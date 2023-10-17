
import { useContext, useState } from "react";
import { useSnackbar } from "notistack";

import group from "../../img/group.svg"
import setting from "../../img/settings.png"


const CardScan = (props) => {
    const {
        grupo,
    } = props;

    const { enqueueSnackbar } = useSnackbar()

    const handleClick = () => {
        enqueueSnackbar("Gestion en curso", {
            variant: "success",
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            }
        })
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