
import { useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";

import routes from "../../helpers/routes";

import group from "../../img/group.svg"
import setting from "../../img/settings.png"
import { useNavigate } from "react-router-dom";
import { useText } from "../../hooks/useText";
import { useGrupos } from "../../hooks/useGrupos";



const CardScanPl = (props) => {
    const {
        grupo,
    } = props;

    const { miembros, getGrupo, getMiembros } = useGrupos();
    const { enqueueSnackbar } = useSnackbar();
    const { reemplazarEspaciosConGuiones } = useText();

    let navigate = useNavigate();

    useEffect(() => {
        getMiembros(grupo?.id);
    }, [])

    const handleClick = async () => {
        enqueueSnackbar("Bienvenido al Panel de administracion", {
            variant: "default",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        })
        await getGrupo(grupo)
        navigate(routes.panel + `/${grupo.id}/${reemplazarEspaciosConGuiones(grupo.nombre.toLowerCase())}`)
    }

    return (
        <div className="card">
            <div className="top">
                <div className="title">
                    <p>{grupo?.nombre}</p>
                </div>
                <div className="cont">
                    <div className="etiq" style={{textTransform: "uppercase"}}>{grupo?.tipo}</div>
                    <div className="count"><img src={group} />{miembros?.length}</div>
                </div>
            </div>
            <div onClick={handleClick} className="conf">
                <img src={setting} />
                Gestionar
            </div>
        </div>
    );

}

export default CardScanPl;