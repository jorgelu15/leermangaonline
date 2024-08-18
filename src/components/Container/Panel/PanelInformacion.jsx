import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { useGrupos } from "../../../hooks/useGrupos";
import lupa from "../../../img/lupa.svg"
import { useForm } from "../../../hooks/useForm";

const PanelInformacion = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { grupo, getGrupo, putInfoGrupo } = useGrupos();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getGrupo(id)
        }
    }, [id])

    const { form, onChangeGeneral } = useForm({ correo: grupo.correo ? grupo.correo : "", name: grupo.nombre ? grupo.nombre : "", descripcion: grupo.descripcion ? grupo.descripcion : "", tablon: grupo.tablon ? grupo.tablon : "" });
    const { correo, name, descripcion, tablon } = form;
    const onUpdateGrupo = () => {
        if (correo?.trim() === "" || name?.trim() === "" || descripcion?.trim() === "" || tablon?.trim() === "") {
            enqueueSnackbar("El campo de email es obligatorio", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            })
            return;
        }

        putInfoGrupo({ correo, name, descripcion, tablon }, id).then(e => {
            enqueueSnackbar("Informacion actualizada", {
                variant: "success",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            })
        }).catch(e => {
            enqueueSnackbar("Hubo un error al actualizar", {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            })
        })

    }

    return (
        <div className="panel-miembros">
            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Informacion</h2>
                </div>
                <div className="c-table" style={{ minHeight: 0 }}>
                    <div className="query">
                        <input type="text" className="input-src" placeholder="Introduzca el correo electronico de su grupo" name="correo" value={correo} onChange={(event) => onChangeGeneral(event, "correo")} />
                        <input type="text" className="input-src" placeholder="Introduzca el nombre de su grupo" name="name" value={name} onChange={(event) => onChangeGeneral(event, "name")} />
                    </div>
                </div>
                <div className="c-table" style={{ minHeight: 0 }}>
                    <div className="query">
                        <textarea className="input-src" placeholder="Introduzca una breve descripcion sobre el trabajo de su grupo" name="descripcion" value={descripcion} onChange={(event) => onChangeGeneral(event, "descripcion")}></textarea>
                        <textarea className="input-src" placeholder="Introduzca un mensaje en su tablon que podra ver todo el mundo" name="tablon" value={tablon} onChange={(event) => onChangeGeneral(event, "tablon")}></textarea>
                    </div>
                </div>
                <div className="c-table" style={{ minHeight: 0 }}>
                    <div className="query" >
                        <button
                            onClick={onUpdateGrupo}
                            style={{
                                padding: 10,
                                width: "100%"
                            }}

                        >Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelInformacion;