import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Logout, ExpandMore } from '@mui/icons-material';

const CURRENT_PATH = 'bg-point-purple text-white py-2 px-4 rounded-full font-semibold';
const NORMAL_LINK = 'text-point-purple hover:underline py-2 px-4';

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-white shadow-md items-center">
      <div className="container mx-auto py-3 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <nav className="flex md:flex-1 justify-center gap-4 sm:gap-10 text-sm font-semibold items-center">
            <div className={CURRENT_PATH}>Dashboard</div>
            <div className={NORMAL_LINK}>Clientes</div>
            <div className={NORMAL_LINK}>Reglas de acumulación</div>
          </nav>
          <div className="text-[#1C1B1E] flex gap-1 items-center">
            <div className="font-semibold text-sm">Pamela Rojas Gonzalez</div>
            <>
              <Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 25, height: 25, backgroundColor: '#1D1B2029' }}>
                    <ExpandMore fontSize="small" sx={{ color: '#1C1B1E' }} />
                  </Avatar>
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiMenuItem-root': {
                        fontSize: '15px',
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>Editar perfil</MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Cerrar Sesión
                </MenuItem>
              </Menu>
            </>
          </div>
        </div>
      </div>
    </header>
  );
}
