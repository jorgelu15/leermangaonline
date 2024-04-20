
import { useContext, useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'


import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'
import routes from "../../helpers/routes"
import { Link } from "react-router-dom"
import capituloContext from "../../context/capitulo/capituloContext"


const ContainerSubirmanga = (props) => {

    const { subirCapitulo } = useContext(capituloContext);

    const [infoCap, setInfoCap] = useState({
        serie_uid: "",
        id_grupo: "",
        titulo: "",
        numero: "",
        link_desc: "",
        fecha_pub: ""
    });

    const {serie_uid, id_grupo, titulo, numero, link_desc, fecha_pub} = infoCap;

    const onChange = e => {
        setInfoCap({
            ...infoCap,
            [e.target.name]: e.target.value
        })
    }

    const onChangeObra = e => {
        setInfoCap  ({
            ...infoCap,
            serie_uid: e.value
        })
    }
    const onChangeGrupo = e => {
        setInfoCap  ({
            ...infoCap,
            id_grupo: e.value
        })
    }
    const onChangeNumero = e => {
        setInfoCap  ({
            ...infoCap,
            numero: e.value
        })
    }

    const suppObras = [
        { label: 'Naruto', value: '0'},
        { label: 'Jujutsu', value: '1'},
    ]

    const suppGrupos = [
        { label: 'Okasa', value: '0'},
        { label: 'tapis', value: '1'},
    ]

    const suppNumero = [
        { label: '1', value: '1'},
        { label: '2', value: '2'},
        { label: '3', value: '3'},
        { label: '4', value: '4'},
        { label: '5', value: '5'},
    ]

    const [serieCapitulo, setSerieCapitulo] = useState(null);
    
    const subirSerieCapitulo = (e) => {
        setSerieCapitulo(e.target.files);
    }

    const packFiles = (files) => {
        const data = new FormData();
        [...files].forEach((file, i) => {
            data.append(file.name, file, file.name)
        })
        return data;
    }

    const subirObra = () => {
        if (serieCapitulo === null || serieCapitulo.length === 0) {
            return;
        }
        if(id_grupo.trim() === ""){
            return;
        }
        if(serie_uid.trim() === ""){
            return;
        }
        if(numero.trim() === ""){
            return;
        }
        const data = packFiles(serieCapitulo);

        //variables temporales serie_uid y numeroCapitulo
        // const serie_uid = 5;
        // const numeroCapitulo = 10;

        data.append("data", JSON.stringify(infoCap));
        console.log(data)
        data.append("ruta", "capitulos");
        data.append("carpeta", id_grupo + '_' + serie_uid + '_' + numero);
        subirCapitulo(data);
    }

    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <h3>Subir capítulo</h3>

                <form action="">
                    <p className="msg">*Podras gestionar esta subida desde tu panel de grupo</p>

                    <div className="control-form">
                        <label htmlFor="">Obra</label>
                        <div className="r-sel">
                            <Select
                                options = {suppObras}
                                placeholder = {"Introduzca el titulo de la obra"}
                                name="serie_uid"
                                id="serie_uid"
                                // value={{label: id_grupo, value: id_grupo}}
                                onChange={onChangeObra}
                            />
                            <p>si la obra que quieres no esta, puedes crearla
                                <span><Link to={routes.subirobra}> undiendo aqui</Link></span>
                            </p>
                        </div>
                       
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Grupo</label>
                        <div className="r-sel">
                        <Select
                            options = {suppGrupos}
                            placeholder = {"Seleccione el grupo"}
                            name="id_grupo"
                            id="if_grupo"
                            onChange={onChangeGrupo}
                        />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Capitulo</label>
                        <div className="r-sel">
                        <Select
                            options = {suppNumero}
                            placeholder = {"Seleccione el capitulo"}
                            name="numero"
                            id="numero"
                            onChange={onChangeNumero}
                        />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Título del capitulo</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="Título del capitulo" name="titulo" id="titulo" value={titulo} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Enlaces de descarga</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="Enlace de descarga" name="link_desc" id="link_desc" value={link_desc} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Fecha de publicacion</label>
                        <div className="r-sel">
                            <input className="control-date" type="date" name="fecha_pub" id="fecha_pub" value={fecha_pub} onChange={onChange}/>
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Imagenes</label>
                        <div className="r-file">
                            <input type="file" name="serieCapitulo" id="serieCapitulo" onChange={subirSerieCapitulo} multiple/>
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

export default ContainerSubirmanga;