
const FormPerfil = () => {

    return (
        <div className="perfil-info">
            <h3>Editar Perfil</h3>
            <p className="title">Datos principales</p>
            <div className="form-info">
                <div className="box">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" placeholder="Usuario"/>
                </div>

                <div className="box">
                    <label htmlFor="correo">Correo</label>
                    <input type="text" placeholder="Correo"/>
                </div>

                <div className="box">
                    <label htmlFor="clave">Contraseña</label>
                    <input type="password" placeholder="Contraseña"/>
                </div>

                <div className="box">
                    <label htmlFor="clave">Repetir contraseña</label>
                    <input type="password" placeholder="Repetir contraseña"/>
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
                    <input type="tel" placeholder="Telefono"/>
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
                    <input type="text" placeholder="Url de su perfil de facebook"/>
                </div>

                <div className="box">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" placeholder="Url de su perfil de twitter"/>
                </div>

                <div className="box">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" placeholder="Url de su perfil de instagram"/>
                </div>
            </div>

            <button className="btn-guardar">Guardar</button>

            <p className="mensaje-elim">La eliminacion de la cuenta es <b>Permanente</b></p>
            <button className="btn-eliminar">Eliminar cuenta</button>
        </div>
    );
  };
  
  export default FormPerfil;