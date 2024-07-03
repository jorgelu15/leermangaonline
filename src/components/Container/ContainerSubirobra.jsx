
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'
import { useSnackbar } from "notistack";

import ModalObra from '../Modal/ModalObra'


import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'
import useAuth from "../../hooks/useAuth"
import serieContext from "../../context/serie/serieContext"
import generoContext from "../../context/genero/generoContext"


import { v4 } from 'uuid';
import routes from "../../helpers/routes";
import { TailSpin } from "react-loader-spinner";

const FallbackLoader = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row", // Alinea los elementos en columna,
        }}>
            <TailSpin
                visible={true}
                height={24}
                width={24}
                color="#ffffff"
                ariaLabel="tail-spin-loading"
                radius={1}
                thickness={4} // Ajusta el grosor del spinner aquí
                wrapperStyle={{}}
                wrapperClass=""
                contentLoader={(props) => (
                    <div>
                        <TailSpin {...props} />
                    </div>
                )}
            />
        </div>
    );
};

const ContainerSubirobra = (props) => {

    const suppGrupos = [
        { label: 'Okasa', value: 'okasa' },
        { label: 'tapis', value: 'tapis' },
    ]
    // const obraId = v4();

    const [obraId, setObraId] = useState(v4());
    const { enqueueSnackbar } = useSnackbar()
    const [loading, setLoading] = useState(false);
    const [errorIndicator, setErrorIndicator] = useState(false);


    const [newSerie, setNewSerie] = useState({
        banner: "",
        portada: "",
        nombre: "",
        nombre_alt: "",
        estado: "",
        sinopsis: "",
        id_grupo: "",
        tipo: "",
    })



    const { usuario } = useAuth();

    const { subirSerie } = useContext(serieContext);
    const { generos, getGeneros } = useContext(generoContext);


    useEffect(() => {
        getGeneros();
    }, [])

    const { banner, portada, nombre, nombre_alt, estado, sinopsis, id_grupo, tipo } = newSerie;

    const onChange = e => {
        setNewSerie({
            ...newSerie,
            [e.target.name]: e.target.value
        })
    }

    const onChangeGrupo = e => {
        setNewSerie({
            ...newSerie,
            id_grupo: e.value == 'okasa' ? 1 : e.value == 'tapis' ? 2 : 0
        })
    }

    const [bannerImg, setBannerImg] = useState(null);
    const [portadaImg, setPortadaImg] = useState(null);

    const subirBanner = (e) => {
        setBannerImg(e);
        const nombreCortado = e.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        //asignar un identificador unico para cada serie pendiente, cada serie debe tener un id unico y la imagen y banner see guardaran con ese nombre en los archivos
        const newName = "banner_" + obraId + '.' + extension;//esto esta mientras
        setNewSerie({
            ...newSerie,
            banner: newName
        });
    }
    const subirPortada = (e) => {
        setPortadaImg(e);
        const nombreCortado = e.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        //asignar un identificador unico para cada serie pendiente, cada serie debe tener un id unico y la imagen y banner see guardaran con ese nombre en los archivos
        const newName = "portada_" + obraId + '.' + extension;//esto esta mientras
        setNewSerie({
            ...newSerie,
            portada: newName
        });
    }

    const subirObra = async () => {
        setLoading(true);
        if (banner?.trim() === "" ||
            portada?.trim() === "" ||
            nombre?.trim() === "" ||
            sinopsis?.trim() === "" ||
            estado?.trim() === "") {
            setErrorIndicator(true);
            enqueueSnackbar("Hay algunos campos que se deben llenar", {
                variant: "default",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
            setLoading(false);
            return;
        }



        const f = new FormData();

        if (bannerImg !== null) {
            f.append("bannerImg", bannerImg, banner);
        }
        if (portadaImg !== null) {
            f.append("portadaImg", portadaImg, portada);
        }
        f.append("data", JSON.stringify({
            ...newSerie,
            serie_uid: obraId,
            id_usuario: usuario?.id,
            idioma: "EN"
        }));
        f.append("ruta", "obras");
        setObraId(v4());
        setTimeout(async () => {
            try {
                await subirSerie(f);
            } catch (error) {
                console.log(error);
            } finally {
                f.append("data", {});
                setNewSerie({
                    ...newSerie,
                    banner: "",
                    portada: "",
                    nombre: "",
                    nombre_alt: "",
                    estado: "",
                    sinopsis: "",
                    id_grupo: "",
                    tipo: ""
                })

                setLoading(false);
            }
        }, 1500);

        enqueueSnackbar("Obra creada", {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        })
    }

    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <h3>Subir Obra</h3>

                <form action="">

                    <div className="control-form">
                        <label htmlFor="">Banner*</label>
                        <div className="r-file" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <input type="file" name="banner" id="banner" onChange={(e) => subirBanner(e.target.files[0])} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Miniatura*</label>
                        <div className="r-file " style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <input type="file" name="portada" id="portada" onChange={(e) => subirPortada(e.target.files[0])} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Titulo*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <input className="control-input" type="text" placeholder="titulo de la obra*" name="nombre" id="nombre" value={nombre} onChange={onChange} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Titulo alternativo</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="titulo alternativo de la obra" name="nombre_alt" id="nombre_alt" value={nombre_alt} onChange={onChange} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Estado*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="estado" id="estado" value={estado} onChange={onChange} >
                                <option value={"POR DEFECTO"}>Seleccione uno</option>
                                <option value={"PUBLICANDOSE"}>Publicandose</option>
                                <option value={"EN PAUSA"}>En pausa</option>
                                <option value={"FINALIZADO"}>Finalizado</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Presentacion</label>
                        <div className="r-sel">
                            <textarea className="control-input" name="sinopsis" id="sinopsis" cols="30" rows="4" placeholder="presentacion..." value={sinopsis} onChange={onChange}></textarea>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Grupo*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <Select
                                options={suppGrupos}
                                placeholder={"Seleccione el grupo"}
                                name="id_grupo"
                                id="id_grupo"
                                value={{ label: id_grupo, value: id_grupo }}
                                onChange={onChangeGrupo}
                            />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Genero*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="tipo" id="tipo" value={tipo} onChange={onChange} >
                                {generos && (
                                    generos.map((item, idx) => {
                                        return (
                                            <option value={item.genero}>{item.genero}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="control-button" style={{ justifyContent: "flex-end" }}>
                        {/* <div className="btn-cancelar">
                            <p>Cancelar</p>
                        </div> */}
                        <div className="btn-subir" onClick={() => subirObra()}>
                            {loading ? <FallbackLoader /> : <p>Subir</p>}
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContainerSubirobra;