
import { useContext, useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'

import ModalObra from '../Modal/ModalObra'


import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'
import useAuth from "../../hooks/useAuth"
import serieContext from "../../context/serie/serieContext"


const ContainerSubirobra = (props) => {

    const suppGrupos = [
        { label: 'Okasa', value: 'okasa'},
        { label: 'tapis', value: 'tapis'},
    ]

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
    
    const {subirSerie} = useContext(serieContext);

    const {banner, portada, nombre, nombre_alt, estado, sinopsis, id_grupo, tipo} = newSerie;

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
        const newName = usuario?.id + '.' + extension;//esto esta mientras
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
        const newName = usuario?.id + '.' + extension;//esto esta mientras
        setNewSerie({
            ...newSerie,
            portada: newName
        });
    }

    const subirObra = () => {
        const f = new FormData();

        if (bannerImg !== null) {
            f.append("bannerImg", bannerImg, banner);
        }
        if (portadaImg !== null) {
            f.append("portadaImg", portadaImg, portada);
        }
        f.append("data", JSON.stringify({
            ...newSerie,
            id_usuario: usuario?.id,
            idioma: "EN"
        }));
        subirSerie(f);
    }

    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <h3>Subir Obra</h3>

                <form action="">

                    <div className="control-form">
                        <label htmlFor="">Miniatura</label>
                        <div className="r-file">
                            <input type="file" name="portada" id="portada" onChange={(e) => subirBanner(e.target.files[0])}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Banner</label>
                        <div className="r-file">
                            <input type="file" name="banner" id="banner" onChange={(e) => subirPortada(e.target.files[0])}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Titulo</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="titulo de la obra" name="nombre" id="nombre" value={nombre} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Titulo alternativo</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="titulo alternativo de la obra" name="nombre_alt" id="nombre_alt" value={nombre_alt} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Estado</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="Estado de la obra" name="estado" id="estado" value={estado} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Presentacion</label>
                        <div className="r-sel">
                            <textarea className="control-input" name="sinopsis" id="sinopsis" cols="30" rows="4" placeholder="presentacion..." value={sinopsis} onChange={onChange}></textarea>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Grupo</label>
                        <div className="r-sel">
                        <Select
                            options = {suppGrupos}
                            placeholder = {"Seleccione el grupo"}
                            name="id_grupo"
                            id="id_grupo"
                            value={{label: id_grupo, value: id_grupo}}
                            onChange={onChangeGrupo}
                        />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Genero</label>
                        <div className="r-sel">
                            <select className="control-input" name="tipo" id="tipo" value={tipo} onChange={onChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="control-button">
                        <div className="btn-cancelar">
                            <p>Cancelar</p>
                        </div>
                        <div className="btn-subir" onClick={subirObra}>
                            <p>Subir</p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContainerSubirobra;