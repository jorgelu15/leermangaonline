import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { useSeries } from "../../../hooks/useSeries";
import TableCapitulos from "../../Mui/Tables/TableCapitulos";
import SearchCapitulos from "../../Search/SearchCapitulos";
import { useAdmin } from "../../../hooks/useAdmin";
import TableSlides from "../../Mui/Tables/TableSlides";
import { Box, Modal, Typography } from "@mui/material";

import { v4 } from 'uuid';
import { useSnackbar } from "notistack";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PanelCarousel = (props) => {
    const { slider, getSliderImages, postSliderImage } = useAdmin();
    const [resultados, setResultados] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const sliderInputRef  = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            await getSliderImages(); // Fetch series data
        };
        fetchData();
    }, []); // Only depend on getSeries

    useEffect(() => {
        // Update resultados only when series changes
        setResultados(slider);
    }, [slider]);


    const [modalProjects, setModalProjects] = useState({
        update: false,
        upload: false
    });

    const handleOpenUpload = () => {
        setModalProjects({ ...modalProjects, update: false, upload: !modalProjects.upload })
    };
    const handleClose = () => setModalProjects({ ...modalProjects, update: false, upload: false });

    const [name, setName] = useState(null);
    const [archivo, setArchivo] = useState(null);
    const subirArchivo = (e) => {
        setArchivo(e);
        const nombreCortado = e.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        const newName = v4() + '.' + extension;
        setName(newName);
    }

    const onUpdatetSlide = () => {
        const f = new FormData();

        if (archivo !== null) {
            const nombreCortado = archivo.name.split('.');
            const extension = nombreCortado[nombreCortado.length - 1];
            const newName = v4() + '.' + extension;
            setName(newName);
            f.append("archivo", archivo, newName);
            f.append("data", JSON.stringify(newName));
            f.append("ruta", "slider");
            postSliderImage(f).then(status => {
                if (status === 200) {
                    enqueueSnackbar("Se subio la imagen exitosamente", {
                        variant: "success",
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        }
                    })
                    if(sliderInputRef.current) sliderInputRef.current.value = "";
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
        }

        handleClose()
    }

    return (
        <div className="panel-miembros">
            <div className="cont-miembros">
                <div className="titulo">
                    <h2>Carousel</h2>
                </div>
                <div className="c-table">
                    <div className="query">
                        <button onClick={handleOpenUpload} className="table-btn-ac" style={{ padding: 10, background: "#2a7cce" }}>Subir slide</button>
                    </div>

                    {resultados?.length !== 0 ? (
                        <TableSlides proyectos={resultados} />
                    ) : (
                        <p className="mensaje">No hay solicitudes pendientes.</p>
                    )}
                </div>
            </div>
            <Modal
                open={modalProjects?.upload}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography fontSize={20} color={"black"} marginBottom={2} fontWeight={600}>Subir un slide</Typography>
                    <div className="query">
                        <input ref={sliderInputRef} type="file" className="input-src" placeholder="Titulo" style={{ width: '100%' }} onChange={(e) => subirArchivo(e.target.files[0])} />
                    </div>
                    <div className="query">
                        <button onClick={onUpdatetSlide} style={{ width: "100%", padding: 10 }}>Subir</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default PanelCarousel;
