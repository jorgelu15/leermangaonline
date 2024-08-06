import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth";

import { Avatar } from "@mui/material";
import TabsCategory from "../Mui/Tabs/TabsCategory";
import FormPerfil from "../Form/FormPerfil";
import { useReaccion } from "../../hooks/useReaccion";
import { useUser } from "../../hooks/useUser";
import { useParams } from "react-router-dom";

const ContainerPerfil = (props) => {

    const { usuario } = useAuth();
    const { getPerfil, perfil } = useUser();
    const { reacciones_usuario, getReaccionesUsuario } = useReaccion();
    const { id_usuario } = useParams();
    const [viewPerfil, setViewPerfil] = useState(true)

    const changeViewPr = () => {
        setViewPerfil(!viewPerfil)
    }

    useEffect(() => {
        if (usuario) {
            getReaccionesUsuario(usuario?.id);
        }
    }, []);

    useEffect(() => {
        getPerfil(id_usuario)
    }, [])
    console.log(perfil)

    const items = {
        tabs: 5,
        cont: [
            {
                tab: "Leido",
                cards: reacciones_usuario?.leido
            },
            {
                tab: "Pendiente",
                cards: reacciones_usuario?.pendiente
            },
            {
                tab: "Siguiendo",
                cards: reacciones_usuario?.siguiendo
            },
            {
                tab: "Favorito",
                cards: reacciones_usuario?.favorito
            },
            {
                tab: "Abandonado",
                cards: reacciones_usuario?.abandonado
            }
        ]
    }

    return (
        <div className="cont-perfil">
            <div className="perfil-port">
                <div className="background"></div>
                <div className="wallpaper"></div>
                <div className="cont-portada">

                    <div className="img">
                        {/* <Avatar sx={{ width: 200, height: 200 }}></Avatar> */}
                        <Avatar src={import.meta.env.VITE_BASE_URL_IMAGES + '/uploads/avatar/' + usuario ? usuario?.avatar : perfil.avatar} sx={{ width: 200, height: 200 }}></Avatar>
                        {/* <img src={FotoPerfil} alt="" /> */}
                    </div>

                    <div className="info">
                        <p className="username">
                            <span>{usuario ? usuario.usuario : perfil?.usuario}</span>
                            <a className={`${viewPerfil ? 'btn-pf-active' : null} btn-perfil`} onClick={() => { changeViewPr() }}>Ver Perfil</a>
                        </p>
                        <div className="etiq-cards">
                            <div className="card" style={{textTransform: "capitalize"}}>{usuario ? usuario?.genero :  perfil?.genero}</div>
                            <div className="card" style={{textTransform: "capitalize"}}>{usuario ? usuario?.pais :  perfil?.pais}</div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={`${viewPerfil ? 'hidden-indicator' : null}`}>
                <TabsCategory items={items} viewPerfil={viewPerfil} setViewPerfil={setViewPerfil}></TabsCategory>
            </div>
            {usuario && (
                <div className="cont-perfil-info">
                    {viewPerfil ? <FormPerfil /> : null}
                </div>
            )}

        </div>
    )
}

export default ContainerPerfil;