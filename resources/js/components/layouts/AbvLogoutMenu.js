import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AbvUserProfile from '../AbvUserProfile/AbvUserProfile'



export default function AbvLogoutMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    axios.post('/logout'); 
}

  return (
    <div className="abv-logout-menu-wrapper">
      <Button aria-controls="logout-menu" aria-haspopup="true" onClick={handleClick}>
      <AbvUserProfile
        birth_date={props.user.birth_date}
        id={props.user.id}
        avatar={props.avatar}
        uploadUserImage={props.uploadUserImage}
        sendInputImage={props.sendInputImage}
      />

      </Button>
      <Menu
        className="logout-menu"
        id="logout-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <AbvUserProfile
          edit="true"
          id={props.user.id}
          avatar={props.avatar}
          uploadUserImage={props.uploadUserImage}
          sendInputImage={props.sendInputImage}
        />

        <MenuItem onClick={handleClose}>
            {props.user.name}
        </MenuItem>
        <span className="logout-user-email">{props.user.email}</span>
        <MenuItem onClick={handleClose}>
        <a href="/login" id="logout-link" onClick={logout}>Sair</a>
        </MenuItem>
      </Menu>
    </div>
  );
}