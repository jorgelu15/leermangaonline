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
import { TableHead } from '@mui/material';

import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import gruposContext from '../../../context/grupos/gruposContext';
import { EXPULSADO } from '../../../types';
import { useGrupos } from '../../../hooks/useGrupos';
import { useParams } from 'react-router-dom';

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

export default function TableGrupos(props) {

  const {
    items
  } = props;



  const { enqueueSnackbar } = useSnackbar()


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { insertSolicitud } = useGrupos();
  const { id } = useParams();


  const handleExpulsar = (solic) => {
    enqueueSnackbar("items expulsado", {
      variant: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      }
    })
    insertSolicitud({ id_usuario: solic.id, id_grupo: id, estado: EXPULSADO });
  }

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


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del grupo</TableCell>
            <TableCell align="center">Correo</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Fecha de creacion</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? items?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : items ? items : []
          )?.map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell component="th" scope="row" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                  {item?.nombre}
                </TableCell>
                <TableCell component="th" align="center">
                  {item.correo}
                </TableCell>
                <TableCell component="th" align="center">
                  {item?.tipo}
                </TableCell>
                <TableCell component="th" align="center">
                  {item?.descripcion}
                </TableCell>
                <TableCell component="th" align="center">
                  {item?.estado}
                </TableCell>
                <TableCell component="th" align="center">
                  {formatDate(item.createdAt)}
                </TableCell>
                <TableCell component="th" align="center">
                  <div className='table-btn-cont'>
                    <button className='table-btn-ac'>Contactar</button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
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
              count={items?.length}
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
    </TableContainer>
  );
}