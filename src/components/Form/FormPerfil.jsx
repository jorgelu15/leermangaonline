import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ModalGrupo from "../Modal/ModalGrupo";
import gruposContext from "../../context/grupos/gruposContext";

import CardScanPl from "../Card/CardScanPl";

import { v4 } from 'uuid';
import perfilContext from "../../context/perfil/perfilContext";


const FormPerfil = () => {

    const { usuario } = useAuth();
    const { grupos, grupo, getGrupos } = useContext(gruposContext);

    const { updatePerfil } = useContext(perfilContext);

    const [userEdit, setUserEdit] = useState({});
    const onChangeUser = e => {
        setUserEdit({
            ...userEdit,
            [e.target.name]: e.target.value
        })
    }

    const [ viewEdit, setViewEdit ] = useState(true)
    const [ openMG, setOpenMG ] = useState(false)
    
    const [archivo, setArchivo] = useState(null);
    const subirArchivo = (e) => {
        setArchivo(e);
    }

    useEffect(() => {
        setUserEdit(usuario);
    }, [usuario]);

    useEffect(() => {
        getGrupos(usuario?.id)
    }, [grupo])

    const actualizarUsuario = () => {
        const f = new FormData();

        if(archivo !== null){
            const nombreCortado = archivo.name.split('.');
            const extension = nombreCortado[nombreCortado.length - 1];
            const newName = v4() + '.' + extension;
            f.append("archivo", archivo, newName);
        }
        f.append("data", JSON.stringify(userEdit));
        updatePerfil(usuario?.id, f);
    }

    return (
        <div className="perfil-info">

        { viewEdit ? 
            <div className="perfil-datos">
                <h3>Datos de Perfil</h3>
                <div className="form-info">
                    <div className="box">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" name="usuario" value={userEdit?.usuario} onChange={onChangeUser}/>
                    </div>

                    <div className="box">
                        <label htmlFor="correo">Correo</label>
                        <input type="text" name="correo" value={userEdit?.correo} onChange={onChangeUser}/>
                    </div>

                    <div className="box">
                        <label htmlFor="clave">Contraseña</label>
                        <input type="password" name="password"/>
                    </div>

                    <div className="box">
                        <label htmlFor="clave">Repetir contraseña</label>
                        <input type="password"/>
                    </div>

                    <div className="box box-avatar">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="file" onChange={(e) => subirArchivo(e.target.files[0])}/>
                        <p>La imagen debe ser jpg, png o bmp.</p>
                    </div>
                </div>
                <span className="separador"></span>

                <div className="form-info">
                    <div className="box">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="tel" name="telefono" value={userEdit?.telefono} onChange={onChangeUser}/>
                    </div>

                    <div className="box">
                        <label htmlFor="gais">Pais</label>
                        <select name="pais" value={userEdit?.pais} onChange={onChangeUser}>
                            <option value="">Seleccione una opción</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Espana">España</option>
                        </select>
                    </div>

                    <div className="box">
                        <label htmlFor="genero">Genero</label>
                        <select name="genero" value={userEdit?.genero} onChange={onChangeUser}>
                            <option value="">Seleccione una opción</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div className="form-info">
                    <div className="box">
                        <label htmlFor="facebook">Facebook</label>
                        <input type="text" name="facebook" value={userEdit?.facebook} onChange={onChangeUser}/>
                    </div>

                    <div className="box">
                        <label htmlFor="twitter">Twitter</label>
                        <input type="text" name="twitter" value={userEdit?.twitter} onChange={onChangeUser}/>
                    </div>

                    <div className="box">
                        <label htmlFor="instagram">Instagram</label>
                        <input type="text" name="instagram" value={userEdit?.instagram} onChange={onChangeUser}/>
                    </div>
                </div>

                <button className="btn-guardar" onClick={actualizarUsuario}>Guardar</button>

                <p className="mensaje-elim">Ten cuidado la eliminacion de la cuenta es <b>Permanente</b></p>
                <button className="btn-eliminar">Eliminar cuenta</button>
            </div> 
        :
            <div className="perfil-grupos">
                <h3>Mis Grupos</h3>

                <button onClick={() => setOpenMG(true)} className={'btn-crear-grupo'}>Crear grupo</button>

                {/* <MagicMotion> */}
                <div className="cards-scan">

                {
                    grupos ?
                        grupos.length !== 0 ? grupos.map((item, idx) => item.estado ? (
                            
                            <CardScanPl key={idx} grupo={item}></CardScanPl>
                            
                        ) : null) :
                        <div>
                            <p className="">No hay grupos</p>
                        </div> 
                    : <p className="">No hay grupos</p>
                }

                </div>
                {/* </MagicMotion> */}
                
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