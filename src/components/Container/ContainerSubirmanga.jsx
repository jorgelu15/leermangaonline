
import { useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'

import ModalObra from '../Modal/ModalObra'


import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'


const ContainerSubirmanga = (props) => {


    const [ openMG, setOpenMG ] = useState(false)
   
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
                                <span onClick={() => setOpenMG(true)}> undiendo aqui</span>
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

            <ModalObra open={openMG} setOpen={setOpenMG}></ModalObra>

        </div>
    )
}

export default ContainerSubirmanga;