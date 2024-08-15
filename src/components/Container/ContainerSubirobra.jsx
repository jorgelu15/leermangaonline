
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'
import { useSnackbar } from "notistack";

import { useAuth } from "../../hooks/useAuth"
import serieContext from "../../context/serie/serieContext"
import generoContext from "../../context/genero/generoContext"


import { v4 } from 'uuid';
import routes from "../../helpers/routes";
import { TailSpin } from "react-loader-spinner";
import { useGrupos } from "../../hooks/useGrupos";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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
    const navigate = useNavigate();
    const { usuario } = useAuth();
    const { grupos, getGrupos } = useGrupos();
    const { subirSerie } = useContext(serieContext);
    const { generos, getGeneros } = useContext(generoContext);

    useEffect(() => {
        if (!grupos) {
            getGrupos(usuario?.id)
        }
    }, []);

    const suppGrupos = grupos?.map(grupo => {
        return { label: grupo.nombre, value: grupo.nombre }
    })

    // const obraId = v4();

    const [obraId, setObraId] = useState(v4());
    const { enqueueSnackbar } = useSnackbar()
    const [loading, setLoading] = useState(false);
    const [errorIndicator, setErrorIndicator] = useState(false);
    const bannerInputRef = useRef(null);
    const portadaInputRef = useRef(null);
    const DEMOGRAFIAS = ["", "Seinen", "Shoujo", "Shounen", "Josei", "Kodomo"];
    const TIPOS = ["", "Manga", "Manhua", "Manhwa", "Novela", "One shot", "Doujinshi", "Oel"];
    const IDIOMAS = ["", "EN", "ES"];

    const [newSerie, setNewSerie] = useState({
        banner: "",
        portada: "",
        nombre: "",
        nombre_alt: "",
        estado: "",
        sinopsis: "",
        id_grupo: "",
        genero: "",
        tipo: "",
        demografia: "",
        idioma: "",
        amateur: "",
        erotico: "",
        web_comic: "",
        yonkoma: "",
        sentido_lectura: "",
        hentai: "",
    })

    useEffect(() => {
        getGeneros();
    }, [])

    const { banner, portada, nombre, nombre_alt, estado, sinopsis, id_grupo, genero, tipo, demografia, idioma, amateur, erotico, web_comic, yonkoma, sentido_lectura, hentai } = newSerie;

    const onChange = e => {
        setNewSerie({
            ...newSerie,
            [e.target.name]: e.target.value
        })
    }

    const onChangeGrupo = e => {
        setNewSerie({
            ...newSerie,
            id_grupo: e.value
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
            genero?.trim() === "" ||
            tipo?.trim() === "" ||
            idioma?.trim() === "" ||
            demografia?.trim() === "" ||
            amateur?.trim() === "" ||
            erotico?.trim() === "" ||
            web_comic?.trim() === "" ||
            yonkoma?.trim() === "" ||
            sentido_lectura?.trim() === "" ||
            hentai?.trim() === "") {
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
        }));
        f.append("ruta", "obras");
        setObraId(v4());
        setTimeout(async () => {
            try {
                // await subirSerie(f);
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
                    tipo: "",
                    idioma: "",
                    demografia: "",
                    amateur: "",
                    erotico: "",
                    hentai: "",
                    sentido_lectura: "",
                    web_comic: "",
                    yonkoma: ""
                });
                if (bannerInputRef.current) bannerInputRef.current.value = '';
                if (portadaInputRef.current) portadaInputRef.current.value = '';
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

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "#ffffff", // Fondo del select
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#000000", // Color del texto
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#000000", // Color del texto del placeholder
        }),
        menu: (provided) => ({
            ...provided,
            color: "#000000", // Color del texto en el menú desplegable
        }),
    };

    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <h3>Subir Obra</h3>

                <form action="">

                    <div className="control-form">
                        <label htmlFor="">Banner*</label>
                        <div className="r-file" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <input type="file" name="banner" id="banner" onChange={(e) => subirBanner(e.target.files[0])} ref={bannerInputRef} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Miniatura*</label>
                        <div className="r-file " style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <input type="file" name="portada" id="portada" onChange={(e) => subirPortada(e.target.files[0])} ref={portadaInputRef} />
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
                                styles={customStyles}
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
                        <label htmlFor="">Tipo*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="tipo" id="tipo" value={tipo} onChange={onChange}>
                                {TIPOS && (
                                    TIPOS.map((item, idx) => {
                                        return (
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Demografía*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="demografia" id="demografia" value={demografia} onChange={onChange} >
                                {DEMOGRAFIAS && (
                                    DEMOGRAFIAS.map((item, idx) => {
                                        return (
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Idioma*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="idioma" id="idioma" value={idioma} onChange={onChange} >
                                {IDIOMAS && (
                                    IDIOMAS.map((item, idx) => {
                                        return (
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Amateur*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="amateur" id="amateur" value={amateur} onChange={onChange} >
                                <option value="">Seleccione una opción</option>
                                <option value={1}>Si</option>
                                <option value={0}>No</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Erotico*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="erotico" id="erotico" value={erotico} onChange={onChange} >
                                <option value="">Seleccione una opción</option>
                                <option value={1}>Si</option>
                                <option value={0}>No</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Web comic*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="web_comic" id="web_comic" value={web_comic} onChange={onChange} >
                                <option value="">Seleccione una opción</option>
                                <option value={1}>Si</option>
                                <option value={0}>No</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Yonkoma*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="yonkoma" id="yonkoma" value={yonkoma} onChange={onChange} >
                                <option value="">Seleccione una opción</option>
                                <option value={1}>Si</option>
                                <option value={0}>No</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Sentido de lectura*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="sentido_lectura" id="sentido_lectura" value={sentido_lectura} onChange={onChange} >
                                <option value="">Seleccione una opción</option>
                                <option value={0}>Derecha a izquierda</option>
                                <option value={1}>Izquierda a derecha</option>
                            </select>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Hentai*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="hentai" id="hentai" value={hentai} onChange={onChange} >
                                <option value="">Seleccione una opción</option>
                                <option value={1}>Si</option>
                                <option value={0}>No</option>
                            </select>
                        </div>
                    </div>

                    {/* <div className="control-form">
                        <label htmlFor="">Genero*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <select className="control-input" name="genero" id="genero" value={genero} onChange={onChange}>
                                <option value=""></option>
                                {generos && (
                                    generos.map((item, idx) => {
                                        return (
                                            <option value={item.genero}>{item.genero}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                    </div> */}

                    <div className="control-form">
                        <label htmlFor="">Generos*</label>
                        <div className="r-sel" style={errorIndicator ? { border: `2px solid Red` } : null}>
                            <FormGroup style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                {generos && (
                                    generos.map((item, idx) => {
                                        return (
                                            <FormControlLabel
                                                control={<Checkbox defaultChecked={false} />}
                                                label={`${item.genero}`}
                                                sx={{
                                                    '& .MuiFormControlLabel-label': {
                                                        color: 'white',
                                                    },
                                                }}
                                            />
                                        )
                                    })
                                )}
                            </FormGroup>
                        </div>
                    </div>


                    <div className="control-button" style={{ justifyContent: "space-between" }}>
                        <div onClick={() => navigate(-1)} className="btn-cancelar">
                            <p>Cancelar</p>
                        </div>
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