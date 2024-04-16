
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

    const suppObras = [
        { label: 'Naruto', value: 'naruto'},
        { label: 'Jujutsu', value: 'jujutsu'},
    ]

    const suppGrupos = [
        { label: 'Okasa', value: 'okasa'},
        { label: 'tapis', value: 'tapis'},
    ]

    const [serieCapitulo, setSerieCapitulo] = useState(null);
    
    const subirSerieCapitulo = (e) => {
        setSerieCapitulo(e.target.files);
    }

    const packFiles = (files) => {
        const data = new FormData();
        [...files].forEach((file, i) => {
            data.append(`file-${i}`, file, file.name)
        })
        return data;
    }

    const subirObra = () => {
        if (serieCapitulo === null || serieCapitulo.length === 0) {
            return;
        }
        const data = packFiles(serieCapitulo);

        //variables temporales serie_uid y numeroCapitulo
        const serie_uid = 5;
        const numeroCapitulo = 10;

        data.append("data", JSON.stringify({
            serie_uid: serie_uid,
            id_usuario: numeroCapitulo,
        }));
        data.append("ruta", "capitulos");
        data.append("carpeta", serie_uid + '_' + numeroCapitulo);
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
                        />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Capitulo</label>
                        <div className="r-sel">
                        <Select
                            options = {[]}
                            placeholder = {"Seleccione el capitulo"}
                        />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Enlaces de descarga</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="Enlace de descarga" />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Fecha de publicacion</label>
                        <div className="r-sel">
                            <input className="control-date" type="date" />
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