
import { useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'

import ModalObra from '../Modal/ModalObra'


import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'


const ContainerSubirobra = (props) => {

    const suppGrupos = [
        { label: 'Okasa', value: 'okasa'},
        { label: 'tapis', value: 'tapis'},
    ]

    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <h3>Subir Obra</h3>

                <form action="">

                    <div className="control-form">
                        <label htmlFor="">Miniatura</label>
                        <div className="r-file">
                            <input type="file" name="" id="" />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Titulo</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="titulo de la obra" />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Presentacion</label>
                        <div className="r-sel">
                            <textarea className="control-input" name="" id="" cols="30" rows="4" placeholder="presentacion..."></textarea>
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
                        <label htmlFor="">Genero</label>
                        <div className="r-sel">
                            <select className="control-input" name="" id="">
                                <option value="EN">EN</option>
                                <option value="ES">ES</option>
                            </select>
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

export default ContainerSubirobra;