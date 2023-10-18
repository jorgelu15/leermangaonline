import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ModalGrupo from "../Modal/ModalGrupo";
import gruposContext from "../../context/grupos/gruposContext";

import CardScanPl from "../Card/CardScanPl";


const FormPerfil = () => {

    const { usuario } = useAuth();
    const { grupos, grupo, getGrupos } = useContext(gruposContext)

    const [ viewEdit, setViewEdit ] = useState(true)
    const [ openMG, setOpenMG ] = useState(false)
    

    useEffect(() => {
        getGrupos(usuario?.id)
    }, [grupo])

    return (
        <div className="perfil-info">

        { viewEdit ? 
            <div className="perfil-datos">
                <h3>Datos de Perfil</h3>
                <div className="form-info">
                    <div className="box">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text"/>
                    </div>

                    <div className="box">
                        <label htmlFor="correo">Correo</label>
                        <input type="text"/>
                    </div>

                    <div className="box">
                        <label htmlFor="clave">Contraseña</label>
                        <input type="password"/>
                    </div>

                    <div className="box">
                        <label htmlFor="clave">Repetir contraseña</label>
                        <input type="password"/>
                    </div>

                    <div className="box box-avatar">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="file"/>
                        <p>La imagen debe ser jpg, png o bmp.</p>
                    </div>
                </div>
                <span className="separador"></span>

                <div className="form-info">
                    <div className="box">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="tel"/>
                    </div>

                    <div className="box">
                        <label htmlFor="gais">Pais</label>
                        <select name="pais">
                            <option value="Colombia">Colombia</option>
                            <option value="Colombia">España</option>
                        </select>
                    </div>

                    <div className="box">
                        <label htmlFor="genero">Genero</label>
                        <select name="genero">
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div className="form-info">
                    <div className="box">
                        <label htmlFor="facebook">Facebook</label>
                        <input type="text"/>
                    </div>

                    <div className="box">
                        <label htmlFor="twitter">Twitter</label>
                        <input type="text"/>
                    </div>

                    <div className="box">
                        <label htmlFor="instagram">Instagram</label>
                        <input type="text"/>
                    </div>
                </div>

                <button className="btn-guardar">Guardar</button>

                <p className="mensaje-elim">Ten cuidado la eliminacion de la cuenta es <b>Permanente</b></p>
                <button className="btn-eliminar">Eliminar cuenta</button>
            </div> 
        :
            <div className="perfil-grupos">
                <h3>Mis Grupos</h3>

                <button onClick={() => setOpenMG(true)} className={'btn-crear-grupo'}>Crear grupo</button>

                <div className="cards-scan">

                {
                    grupos ?
                        grupos.length !== 0 ? grupos.map((item) => item.estado ? (
                            <CardScanPl key={item.id} grupo={item}></CardScanPl>
                        ) : null) :
                        <div>
                            <p className="">No hay grupos</p>
                        </div> 
                    : <p className="">No hay grupos</p>
                }

                </div>
                
            </div>
        }
            
            <div className="perfil-botones">
                <h3>Opciones</h3>
                <div>
                    <button onClick={() => setViewEdit(true)} className={'btn-perfil'}>Editar perfil</button>
                    <button onClick={() => setViewEdit(false)} className={'btn-perfil'}>Mis grupos</button>
                </div>
            </div>
            <ModalGrupo open={openMG} setOpen={setOpenMG}></ModalGrupo>
        </div>
    );
  };
  
  export default FormPerfil;