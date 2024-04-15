
import { useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'


import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'
import routes from "../../helpers/routes"
import { Link } from "react-router-dom"


const ContainerSubirmanga = (props) => {


    const suppObras = [
        { label: 'Naruto', value: 'naruto'},
        { label: 'Jujutsu', value: 'jujutsu'},
    ]

    const suppGrupos = [
        { label: 'Okasa', value: 'okasa'},
        { label: 'tapis', value: 'tapis'},
    ]

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
                            <input type="file" name="" id="" />
                        </div>
                    </div>
                    
                    <div className="control-button">
                        <div className="btn-cancelar">
                            <p>Cancelar</p>
                        </div>
                        <div className="btn-subir">
                            <p>Subir</p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContainerSubirmanga;