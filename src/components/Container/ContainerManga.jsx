
import { useState } from "react"
import React, { useRef } from 'react';

import CustomizedAccordions from "../Accordions/Accordion";
import image from "../../img/portada.jpg"
import chat from "../../img/chat.png"


const ContainerManga = (props) => {

    return (
        <div>
            <section  className="manga-desc">
                <div className="desc-content">
                    <div className="content">
                        <div className="imagen">
                            <img src={image} alt="portada"/>
                        </div>
                        <div className="resumen">
                            <h1>Tokyo Revengers</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laborum, nostrum quaerat incidunt, numquam fuga exercitationem cupiditate consectetur aut culpa ea atque quis dignissimos maiores libero in officia. Tenetur, eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ea tempora a accusantium minus nihil. Quam doloribus hic animi consequuntur incidunt, vel asperiores quaerat explicabo nesciunt cum ab pariatur porro? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tempore quisquam excepturi aut amet omnis esse molestiae hic laudantium, laborum numquam blanditiis tempora eaque ratione labore doloremque nisi cum expedita.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="capitulos">
                <div className="cap-box">
                    <div className="wid-box">
                        <div className="start-box">
                            <h2>Lista de capitulos</h2>
                            <input type="text" placeholder="Buscar"/>
                        </div>
                        <hr />
                        <CustomizedAccordions></CustomizedAccordions>
                    </div>
                    <div className="chat">
                        <img src={chat} alt="chat"/>
                    </div>
                </div>
                
                <div className="manga-type">
                    <div className="generos">
                        <p className="type-titles">Generos</p>
                        <span className="genero"><button>Seinen</button></span>
                        <span className="genero"><button>Drama</button></span>
                        <span className="genero"><button>Misterio</button></span>
                        <span className="genero"><button>Sobrenatural</button></span>
                        <span className="genero"><button>Accion</button></span>
                    </div>
                    <div className="estado">
                        <p className="type-titles">Estado</p>
                        <p>Publicandose</p>
                    </div>
                    <div className="tipo">
                        <p className="type-titles">Tipo</p>
                        <p>Shounen</p>
                    </div>
                    <div className="compartir">
                        <p className="type-titles">Compartir</p>
                        <div className="socials">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContainerManga;