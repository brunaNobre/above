import React from 'react'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




function AboveSideMenu () {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
            </Button>
            <Menu 
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
     
            >
                <MenuItem>Tarefas</MenuItem>
                <MenuItem>Planetas</MenuItem>
                <MenuItem>Signos</MenuItem>
            </Menu>
        </div>
    )
}

export default AboveSideMenu