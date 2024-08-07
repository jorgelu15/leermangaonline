
import { useContext, useState } from "react";
import close from "../../img/close.svg";
import gruposContext from "../../context/grupos/gruposContext";
import { useSnackbar } from "notistack";
import { useAuth } from "../../hooks/useAuth";
import { useGrupos } from "../../hooks/useGrupos";

const ModalGrupo = (props) => {
    const {
        open,
        setOpen,
    } = props;

    const { usuario } = useAuth();
    const { insertGrupo, grupo, getGrupos } = useGrupos();
    const { enqueueSnackbar } = useSnackbar()

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')


    const handlerSubmit = async (e) => {
        e.preventDefault();

        if (nombre.trim() === "" || correo.trim() === "") {
            //   mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await insertGrupo({ usuarioId: usuario?.id, nombre, correo })
        await getGrupos(usuario?.id)
        enqueueSnackbar("Grupo creado", {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        })
    };

    if (!open) return null;

    return (
        <div className={open ? "overlay-bg active" : "overlay-bg"}>

            <div className="cont-modal">
                <div className="header-modal">
                    <h3>Crear nuevo grupo</h3>
                    <div className="btn-cerrar-modal"
                        onClick={() => setOpen(false)}
                    >
                        <img src={close} width={20} height={20} />
                    </div>
                </div>
                <div className="form-modal">
                    <div className="box">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" onChange={(e) => { setNombre(e.target.value) }} placeholder="nombre del grupo" />
                    </div>

                    <div className="box">
                        <label htmlFor="correo">Correo</label>
                        <input type="text" onChange={(e) => { setCorreo(e.target.value) }} placeholder="correo del grupo donde recibira notificaciones" />
                    </div>
                </div>
                <div className="botons-modal">
                    <button onClick={() => setOpen(false)} className="cancel">Cancelar</button>
                    <button onClick={(e) => { handlerSubmit(e), setOpen(false) }}>Crear</button>
                </div>
            </div>
        </div>
    );

}

export default ModalGrupo;