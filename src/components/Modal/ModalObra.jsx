
import { useContext, useState } from "react";
import close from "../../img/close.svg";
import gruposContext from "../../context/grupos/gruposContext";
import { useSnackbar } from "notistack";

const ModalGrupo = (props) => {
    const {
        open,
        setOpen,
    } = props;

    const { insertGrupo, grupo } = useContext(gruposContext)
    const { enqueueSnackbar } = useSnackbar()

    const [ nombre, setNombre ] = useState('')
    const [ correo, setCorreo ] = useState('')


    const handlerSubmit = (e) => {
        e.preventDefault();
    
        // if (nombre.trim() === "" || correo.trim() === "") {
        // //   mostrarAlerta('Todos los campos son obligatorios');
        //   return;
        // }

        // insertGrupo({usuarioId: "1", nombre, correo})

        // enqueueSnackbar("Grupo creado", {
        //     variant: "success",
        //     anchorOrigin: {
        //         vertical: "bottom",
        //         horizontal: "right"
        //     }
        // })
    };

    if (!open) return null;

    return (
        <div className={open ? "overlay-bg active" : "overlay-bg"}>

            <div className="cont-modal">
                <div className="header-modal">
                    <h3>NUEVA OBRA</h3>
                    <div className="btn-cerrar-modal"
                        onClick={() => setOpen(false)}
                    >
                        <img src={close} width={20} height={20} />
                    </div>
                </div>
                <div className="form-modal">
                    <div className="box">
                        <label htmlFor="titulo">Obra</label>
                        <input type="text" onChange={(e) => {setNombre(e.target.value)}} placeholder="titulo"/>
                    </div>

                    <div className="box">
                        <label htmlFor="genero">Genero</label>
                        <select name="" id="">
                            <option value="fantasia">Fantasía</option>
                            <option value="accion">Acción</option>
                            <option value="romance">Romance</option>
                            <option value="terror">Terror</option>
                            <option value="codidiano">Cotidiano</option>
                            <option value="comedia">Comedia</option>
                            <option value="deporte">Deporte</option>
                            <option value="ciencia ficcion">Ciencia ficción</option>
                            <option value="suspenso">Suspenso</option>
                        </select>
                    </div>

                    <div className="box">
                        <label htmlFor="idioma">Idioma de la obra</label>
                        <select name="" id="">
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                        </select>
                    </div>
                </div>
                <div className="botons-modal">
                    <button onClick={() => setOpen(false)} className="cancel">Cancelar</button>
                    <button onClick={(e) => {handlerSubmit(e), setOpen(false)}}>Crear</button>
                </div>
            </div>
        </div>
    );

}

export default ModalGrupo;