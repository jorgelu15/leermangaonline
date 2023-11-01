import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import routes from '../../../helpers/routes';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function AccountMenu() {

    const { usuario, logOut } = useAuth();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            
            <Tooltip title="Perfil">
            <Box
                onClick={handleClick}
                size="small"
                sx={{ ml: 2, display: 'flex', alignItems: 'center' }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ width: 32, height: 32 }}>{usuario?.usuario.charAt(0)}</Avatar>
                <p>{usuario?.usuario}</p>
            </Box>
            </Tooltip>
        </Box>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            sx={{top: '15px'}}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
                <Link to={routes.perfil} 
                    style={{display: 'flex', alignItems: 'center', color: 'black'}}>
                    <Avatar /><p style={{marginLeft: 10}}>Mi perfil</p>
                </Link>
            </MenuItem>

            <Divider />
            
            <MenuItem onClick={handleClose}>
                <Link to={routes.perfil} 
                    style={{display: 'flex', alignItems: 'center', color: 'black'}}>
                    <ListItemIcon>
                        <ListIcon fontSize="small" />
                    </ListItemIcon>
                    Mis listas
                </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
                <Link to={routes.perfil} 
                    style={{display: 'flex', alignItems: 'center', color: 'black'}}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Configuraciones
                </Link>
            </MenuItem>

            <MenuItem onClick={() => {logOut()}}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Cerrar sesion
            </MenuItem>
            

        </Menu>
        </React.Fragment>
    );
}