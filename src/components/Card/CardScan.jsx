
import { useContext, useState } from "react";
import { useSnackbar } from "notistack";

import gruposContext from "../../context/grupos/gruposContext";
import routes from "../../helpers/routes";

import group from "../../img/group.svg"
import setting from "../../img/settings.png"
import { useNavigate } from "react-router-dom";


const CardScan = (props) => {
    const {
        grupo,
    } = props;

    const { getGrupo } = useContext(gruposContext)
    const { enqueueSnackbar } = useSnackbar()

    let navigate = useNavigate();


    const handleClick = async () => {
        enqueueSnackbar("Bienvenido al Panel de administracion", {
            variant: "default",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        })
        await getGrupo(grupo.id_grupo)
        navigate(routes.panel)
    }

    return (
        <div className="card">
            <div className="top">
                <div className="title">
                    <p>{grupo?.nombre}</p>
                </div>
                <div className="cont">
                    <div className="etiq">UPLOADER</div>
                    <div className="count"><img src={group} />{grupo?.id_grupo}</div>
                </div>
            </div>
            <div onClick={handleClick} className="conf">
                <img src={setting} />
                Gestionar
            </div>
        </div>
    );

}

export default CardScan;