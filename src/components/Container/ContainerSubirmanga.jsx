
import { useState } from "react"
import React, { useRef } from 'react';

import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'

const ContainerSubirmanga = (props) => {

    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <div className="listing-nav">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><img src={arrow}/> <a href="">Perfil</a></li>
                        <li><img src={arrow}/> <a href="">Subir obra</a></li>
                    </ul>
                </div>
                <section className="section1">
                    <h3>Subir nuevo episodio</h3>

                    <img className="img-folder" src={folder} />

                    <div className="cont-opcion">
                        <a href="#"><img src={addicon}/><p>Agregar nuevo episodio a nueva obra</p></a>
                        <a href="#"><img src={addicon}/><p>Agregar nuevo episodio a una obra</p></a>
                    </div>

                    <p>A la hora de subir una obra, corrobore sin falta nuestros <span>Términos de Servicio</span> y los <span>Lineamientos de Publicación</span>.</p>
                </section>

                <section>
                    <div className="cont-obra">
                        <div className="form-input">
                            <label htmlFor="">Nombre de obra</label>
                            <input type="text" placeholder="Obra" value={"Mushoku tensei"} disabled/>
                        </div>
                    </div>
                    <div className="cont-files">
                        <div className="box-paginas">
                            <h3>Direccion de Paginas</h3>
                            <div className="inputs">
                                <div>
                                    <input type="radio" name="direccion" id="" />
                                    <label htmlFor="">Horizontal</label>
                                </div>
                                <div>
                                    <input type="radio" name="direccion" id="" />
                                    <label htmlFor="">Vertical</label>
                                </div>
                            </div>
                        </div>
                        <div className="box-form">
                            <h3>Selecciona archivo</h3>
                            <div className="cards">

                                <div className="card">
                                    <div className="img">
                                        <div className="number">1</div>
                                        <button className="btn-close"></button>
                                    </div>
                                    <p>1142px × 1552px</p>
                                </div>

                                <div className="card-add">
                                    <div className="img">
                                        <img src={addicon}/>
                                        <p>Añadir paginas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="form-input">
                                <label htmlFor="">Palabra del Autor</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="box-recomendacion">
                            <h3>Lista de Recomendaciones</h3>
                            <div>
                                <p>Tamaño de imagen igual o mayor a lo recomendado (1,920×2,560 px)</p>
                                <p>Todas las páginas tienen el mismo tamaño de imagen</p>
                                <p>Más de 8 páginas</p>
                            </div>
                            <p>Entre más recomendaciones cumplas, tendrás cierta ventaja en el ranking de los <a href="#">Scanlation Awards</a>.</p>
                        </div>
                        <div className="box-button">
                            <button>Guardar borrar</button>
                            <button>Guardar y publicar</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContainerSubirmanga;