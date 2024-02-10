const FormFilter = () => {

    return (
        <div className="scan-info">
            <h3>Editar Scan</h3>
            <p className="title">Datos principales</p>
            <div className="form-info">
                <div className="box">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre"/>
                </div>

                <div className="box">
                    <label htmlFor="correo">Correo</label>
                    <input type="text" placeholder="Correo"/>
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
            </div>

            <div className="form-info">
                <div className="box">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" placeholder="Url de su pagina de facebook"/>
                </div>

                <div className="box">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" placeholder="Url de su pagina de twitter"/>
                </div>

                <div className="box">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" placeholder="Url de su pagina de instagram"/>
                </div>
            </div>

            <button className="btn-guardar">Guardar</button>

            <p className="mensaje-elim">La eliminacion de la cuenta es <b>Permanente</b></p>
            <button className="btn-eliminar">Eliminar cuenta</button>
        </div>
    );
  };
  
  export default FormFilter;