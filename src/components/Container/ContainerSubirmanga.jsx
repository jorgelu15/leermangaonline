
import { useState } from "react"
import React, { useRef } from 'react';

import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'


const ContainerSubirmanga = (props) => {

    const [section, setSection] = useState(1);

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

                { section == 1 ? 
                <section className="section1">
                    <h3>Subir nuevo episodio</h3>

                    <img className="img-folder" src={folder} />

                    <div className="cont-opcion">
                        <a href="#" onClick={() => setSection(2)}><img src={addicon}/><p>Agregar nuevo episodio a nueva obra</p></a>
                        <a href="#" onClick={() => setSection(2)}><img src={addicon}/><p>Agregar nuevo episodio a una obra</p></a>
                    </div>

                </section>
                : null
                }

                { section == 2 ? 
                <section className="section2">
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
                                        <button className="btn-close"><img src={close}/></button>
                                    </div>
                                    <p>1142px × 1552px</p>
                                </div>

                                <div className="card-add">
                                    <div className="img">
                                        <img src={addicon}/>
                                        <p>Añadir pagina</p>
                                    </div>
                                </div>
                            </div>

                            <div className="form-input">
                                <h3>Palabras del autor</h3>
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="box-recomendacion">
                            <h3>Lista de Recomendaciones</h3>
                            <div>
                                <p>Tamaño de imagen igual o mayor a lo recomendado (1,920×2,560 px)</p>
                                <p>Todas las páginas tienen el mismo tamaño de imagen</p>
                                <p>Más de 8 páginas</p>
                            </div>
                            <p className="info">Entre más recomendaciones cumplas, tendrás cierta ventaja en el ranking de los <a href="#">Scanlation Awards</a>.</p>
                        </div>
                        <div className="box-button">
                            <div>
                                <button className="borrador">Guardar borrador</button>
                                <button className="guardar" onClick={() => setSection(3)}>Guardar e ir a publicar</button>
                            </div>
                        </div>
                    </div>
                </section>
                : null
                }

                { section == 3 ? 
                <section className="section3">
                    <div className="cont-config">  
                        <div className="control-input">
                            <div className="control-label">
                                <div>
                                    <p>Minuatura <span>Requerido</span></p>
                                    
                                </div>
                                <p className="tam-rec">Tamaño recomendado 1,920 px × 2,560 px</p>
                            </div>
                            <div className="cont-img">
                                <div>
                                    <img src={addicon}/>
                                    <p>Añadir imagen</p>
                                </div>
                            </div>
                            <p className="info"> *Hay dos tipos de miniatura: uno con el ancho más largo y otro cuadrado. 
                                En la miniatura se muestra la parte superior de la imagen, por lo que 
                                según las medidas de la imagen es posible que hayan partes que queden por fuera.
                            </p>
                        </div>

                        <div className="control-input">
                            <div className="control-label">
                                <p>Titulo <span>Requerido</span></p>
                            </div>
                            <input type="text" name="titulo"/>
                        </div>

                        <div className="control-input">
                            <div className="control-label">
                                <p>Presentacion</p>
                            </div>
                            <textarea name="presentacion" id="" cols="20" rows="4"></textarea>
                        </div>

                        <div className="control-input">
                            <div className="control-label">
                                <p>Genero</p>
                            </div>
                            <select name="genero" id="">
                                <option value="fantasia">Fantasia</option>
                                <option value="accion">Accion</option>
                                <option value="romance">Romance</option>
                                <option value="terror">Terror</option>
                            </select>
                        </div>

                        <div className="control-input">
                            <div className="control-label">
                                <p>Idioma de la obra</p>
                            </div>
                            <select name="idioma" id="">
                                <option value="EN">EN</option>
                                <option value="ES">ES</option>
                            </select>
                        </div>

                        <div className="control-input">
                            <div className="control-label">
                                <p>Otros</p>
                            </div>
                            <div className="otros">
                                <input type="checkbox" name="" id="" />
                                <p>Permitir comentarios</p>
                            </div>
                        </div>

                        <div className="cont-button">
                            <button className="btn-editar">Editar</button>
                            <button className="btn-publicar">Publicar</button>
                        </div>

                    </div>
                </section>
                : null
                }

                <p className="terminos">A la hora de subir una obra, corrobore sin falta nuestros <span>Términos de Servicio</span> y los <span>Lineamientos de Publicación</span>.</p>
            </div>
        </div>
    )
}

export default ContainerSubirmanga;