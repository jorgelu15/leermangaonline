import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Modal, TableHead, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import gruposContext from '../../../context/grupos/gruposContext';
import { SUPERADMIN } from '../../../types';
import { useAuth } from '../../../hooks/useAuth';
import { useAdmin } from '../../../hooks/useAdmin';

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

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


export default function TableSlides(props) {

    const {
        proyectos
    } = props;


    const { enqueueSnackbar } = useSnackbar()
    const { usuario } = useAuth();

    const { deleteSliderImage } = useAdmin();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - proyectos?.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const formatDate = (fecha) => {
        const date = new Date(fecha);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return (`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
    }

    const [modalProjects, setModalProjects] = React.useState({
        delete: false
    });

    const [imageDelete, setImageDelete] = React.useState(null);

    const handleOpenDelete = (solicitud) => {
        setModalProjects({ ...modalProjects, delete: !modalProjects.update })
        setImageDelete(solicitud);
    };
    const handleClose = () => setModalProjects({ ...modalProjects, delete: false });
    const onAuthorizeSerie = () => {
        console.log("autorizada")
    }

    const onDeleteSlider = () => {
        deleteSliderImage(imageDelete?.id_slider).then(status => {
            if (status === 200) {
                enqueueSnackbar("Se elimino la imagen exitosamente", {
                    variant: "success",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "right"
                    }
                })
                handleClose()
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

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell>Slide</TableCell>
                        <TableCell align="center">Fecha de creacion</TableCell>
                        {usuario?.rol === SUPERADMIN && <TableCell align="center">Acciones</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? proyectos?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : proyectos ? proyectos : []
                    )?.map((solicitud, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <img width={80} height={40} alt={solicitud.url} src={import.meta.env.VITE_BASE_URL_IMAGES + '/uploads/slider/' + solicitud.url} />
                            </TableCell>
                            <TableCell component="th" align="center">
                                {formatDate(solicitud.createdAt)}
                            </TableCell>
                            {usuario?.rol === SUPERADMIN ? (
                                <TableCell component="th" align="center">
                                    <button onClick={() => handleOpenDelete(solicitud)} className='table-btn-ac'>Eliminar</button>
                                </TableCell>
                            ) : <TableCell component="th" align="center"></TableCell>}

                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={proyectos?.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            <Modal
                open={modalProjects?.delete}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography fontSize={20} color={"black"} marginBottom={2} fontWeight={600}>Esta seguro de eliminar esta imagen?</Typography>
                    <div style={{ flexDirection: 'row', display: 'flex', width: "100%", justifyContent: "space-between" }}>
                        <div className="query">
                            <button style={{ width: "98%", padding: 10 }} onClick={onDeleteSlider}>Si</button>
                        </div>
                        <div className="query">
                            <button onClick={handleClose} style={{ width: "98%", padding: 10, backgroundColor: "#2a7cce" }}>No</button>
                        </div>
                    </div>
                </Box>
            </Modal>

        </TableContainer >
    );
}