
import { useContext, useEffect, useState } from "react"
import React, { useRef } from 'react'
import Select from 'react-select'
import { useSnackbar } from "notistack";

import addicon from '../../img/add.svg'
import arrow from '../../img/arrow-right.svg'
import folder from '../../img/folder.svg'
import close from '../../img/close.svg'
import routes from "../../helpers/routes"
import { Link, useNavigate } from "react-router-dom"
import capituloContext from "../../context/capitulo/capituloContext"
import serieContext from "../../context/serie/serieContext"
import gruposContext from "../../context/grupos/gruposContext"
import { useSeries } from "../../hooks/useSeries"
import { Box, Modal, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#181818',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ContainerSubirmanga = (props) => {
    const navigate = useNavigate();
    const [suppObras, setSuppObras] = useState([]);
    const [suppCap, setSuppCap] = useState([]);
    const [suppGrupos, setSuppGrupos] = useState([]);
    const [serieCapitulo, setSerieCapitulo] = useState(null);

    const { enqueueSnackbar } = useSnackbar();
    const { form, onChangeGeneral } = useForm({ tituloObra: '', numeroCapitulo: '' });
    const { tituloObra, numeroCapitulo } = form;

    const { series, capitulos, getCapitulosSerie } = useSeries();
    const { grupos } = useContext(gruposContext);
    const { msg, subirGrupoCapitulo, subirCapitulo } = useContext(capituloContext);
    const imagenesInputRef = useRef(null);
    const [infoCap, setInfoCap] = useState({
        serie_uid: "",
        id_grupo: "",
        titulo: "",
        numero: "",
        link_desc: "",
        fecha_pub: "",
        id_capitulo: ""
    });

    const { serie_uid, id_grupo, titulo, numero, link_desc, fecha_pub, id_capitulo } = infoCap;

    useEffect(() => {
        const newSupp = series?.map((item) => ({ label: item.nombre, value: item.serie_uid }));
        setSuppObras(newSupp);
    }, [series]);

    useEffect(() => {
        const newSupp = grupos?.map((item) => ({ label: item.nombre, value: item.id }));
        setSuppGrupos(newSupp);
    }, [grupos]);

    useEffect(() => {
        if (serie_uid) {
            getCapitulosSerie(serie_uid);
        }
    }, [serie_uid]);

    useEffect(() => {
        const newSuppCap = capitulos?.map((cap) => ({ label: cap.numero, value: cap.id_capitulo }));
        setSuppCap(newSuppCap);
    }, [capitulos]);

    const onChange = (e) => {
        setInfoCap({
            ...infoCap,
            [e.target.name]: e.target.value
        });
    };

    const onChangeObra = (e) => {
        setInfoCap({
            ...infoCap,
            serie_uid: e.value
        });
    };

    const onChangeGrupo = (e) => {
        setInfoCap({
            ...infoCap,
            id_grupo: e.value
        });
    };

    const onChangeNumero = (e) => {
        setInfoCap({
            ...infoCap,
            numero: e.value,
            id_capitulo: e.value
        });
    };

    const subirSerieCapitulo = (e) => {
        setSerieCapitulo(e.target.files);
    };

    const packFiles = (files) => {
        const data = new FormData();
        [...files].forEach((file) => {
            data.append(file.name, file, file.name);
        });
        return data;
    };

    const subirObra = () => {
        if (numero === "" || serie_uid?.trim() === "" || id_grupo === "" || fecha_pub === "" || id_capitulo.trim() === "" || link_desc.trim() === "") {
            enqueueSnackbar("Hay algunos campos que se deben llenar", {
                variant: "default",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
            return;
        }

        const data = packFiles(serieCapitulo);
        data.append("data", JSON.stringify(infoCap));
        data.append("ruta", "capitulos");
        data.append("carpeta", `${id_grupo}_${serie_uid}_${numero}`);
        subirGrupoCapitulo(data).then(status => {
            if (status === 200) {
                enqueueSnackbar("Capítulo creado exitosamente", {
                    variant: "success",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "right"
                    }
                });
                // Vaciar campos
                setInfoCap({
                    serie_uid: "",
                    id_grupo: "",
                    titulo: "",
                    numero: "",
                    link_desc: "",
                    fecha_pub: "",
                    id_capitulo: ""
                });

                // Limpiar el input de archivos
                if (imagenesInputRef.current) imagenesInputRef.current.value = "";
            }
        }).catch(error => {
            enqueueSnackbar(error.message, {
                variant: "error",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
        });
    };

    const crearCapitulo = () => {
        if (numeroCapitulo?.trim() === "" || tituloObra?.trim() === "") {
            enqueueSnackbar("Hay algunos campos que se deben llenar", {
                variant: "default",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                }
            });
            return;
        }

        subirCapitulo({ tituloObra, serie_uid, numeroCapitulo })
            .then((response) => {
                if (response.status === 200) {
                    enqueueSnackbar("Capítulo creado exitosamente", {
                        variant: "success",
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        }
                    });
                    resetForm(); // Clear the form fields
                } else {
                    enqueueSnackbar(response.msg, {
                        variant: "error",
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        }
                    });
                }
            });
    };

    const [modalProjects, setModalProjects] = React.useState({
        create: false
    });

    const handleOpenCreate = () => {
        setModalProjects({ ...modalProjects, create: !modalProjects.create });
    };

    const handleClose = () => setModalProjects({ ...modalProjects, create: false });

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "#ffffff", // Fondo del select
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#000000", // Color del texto
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#000000", // Color del texto del placeholder
        }),
        menu: (provided) => ({
            ...provided,
            color: "#000000", // Color del texto en el menú desplegable
        }),
    };


    return (
        <div className="cont-subirmanga">
            <div className="subir-view">
                <h3>Subir capítulo</h3>

                <form action="">
                    <p className="msg">*Podras gestionar esta subida desde tu panel de grupo</p>

                    <div className="control-form">
                        <label htmlFor="">Obra</label>
                        <div className="r-sel">
                            <Select
                                options={suppObras}
                                placeholder={"Introduzca el titulo de la obra"}
                                name="serie_uid"
                                id="serie_uid"
                                // value={{label: id_grupo, value: id_grupo}}
                                onChange={onChangeObra}
                                styles={customStyles}
                            />
                            <p>si la obra que quieres no esta, puedes crearla
                                <span><Link to={routes.subirobra}> undiendo aqui</Link></span>
                            </p>
                        </div>

                    </div>

                    <div className="control-form">
                        <label htmlFor="">Grupo</label>
                        <div className="r-sel">
                            <Select
                                options={suppGrupos}
                                placeholder={"Seleccione el grupo"}
                                name="id_grupo"
                                id="if_grupo"
                                onChange={onChangeGrupo}
                                styles={customStyles}
                            />
                        </div>
                    </div>

                    {serie_uid?.trim() !== "" && (
                        <div className="control-form">
                            <label htmlFor="">Capitulo</label>
                            <div className="r-sel">
                                <Select
                                    options={suppCap}
                                    placeholder={"Seleccione el capitulo"}
                                    name="numero"
                                    id="numero"
                                    onChange={onChangeNumero}
                                    styles={customStyles}
                                />
                                <p>si el capitulo que quieres no esta, puedes crearlo
                                    <span>
                                        <a onClick={() => handleOpenCreate()}> undiendo aqui</a>
                                    </span>
                                </p>
                            </div>

                        </div>
                    )}

                    <div className="control-form">
                        <label htmlFor="">Enlaces de descarga</label>
                        <div className="r-sel">
                            <input className="control-input" type="text" placeholder="Enlace de descarga" name="link_desc" id="link_desc" value={link_desc} onChange={onChange} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Fecha de publicacion</label>
                        <div className="r-sel">
                            <input className="control-date" type="date" name="fecha_pub" id="fecha_pub" value={fecha_pub} onChange={onChange} />
                        </div>
                    </div>

                    <div className="control-form">
                        <label htmlFor="">Imagenes</label>
                        <div className="r-file">
                            <input ref={imagenesInputRef} type="file" name="serieCapitulo" id="serieCapitulo" onChange={subirSerieCapitulo} multiple />
                        </div>
                    </div>

                    <div className="control-button">
                        <Link onClick={() => navigate(-1)} className="btn-cancelar">
                            <p>Regresar</p>
                        </Link>
                        <div className="btn-subir" onClick={subirObra}>
                            <p>Subir</p>
                        </div>
                    </div>
                </form>
                <Modal
                    open={modalProjects?.create}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography fontSize={20} color="white" marginBottom={2} fontWeight={600}>¿Está seguro de eliminar esta serie?</Typography>
                        <div style={{ flexDirection: 'column', display: 'flex', width: "100%", marginBottom: 10 }}>
                            <label htmlFor="tituloObra" style={{ color: "#ffffff" }}>Título del capítulo</label>
                            <div className="r-sel">
                                <input
                                    className="control-input"
                                    style={{ background: "#181818", color: "#ffffff" }}
                                    type="text"
                                    placeholder="Título del capítulo"
                                    name="tituloObra"
                                    id="tituloObra"
                                    value={tituloObra}
                                    onChange={(event) => onChangeGeneral(event, "tituloObra")}
                                />
                            </div>
                        </div>
                        <div style={{ flexDirection: 'column', display: 'flex', width: "100%" }}>
                            <label htmlFor="numeroCapitulo" style={{ color: "#ffffff" }}>Número del capítulo</label>
                            <div className="r-sel">
                                <input
                                    className="control-input"
                                    style={{ background: "#181818", color: "#ffffff" }}
                                    type="text"
                                    placeholder="Número del capítulo"
                                    name="numeroCapitulo"
                                    id="numeroCapitulo"
                                    value={numeroCapitulo}
                                    onChange={(event) => onChangeGeneral(event, "numeroCapitulo")}
                                />
                            </div>
                        </div>
                        <div className="control-button" style={{ flexDirection: 'column', display: 'flex', width: "100%" }}>
                            <button className="btn-subir" onClick={crearCapitulo}>Crear Capítulo</button>
                        </div>
                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default ContainerSubirmanga;