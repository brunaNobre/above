import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { relativeTimeRounding } from 'moment';


export default function AbvProfileEditDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    props.uploadUserImage()
    setOpen(false);
  };





  return (
    <div className="userProfileEditIcon-wrapper">
      <Button title="Atualizar foto do perfil" variant="outlined" color="primary" onClick={handleClickOpen} className="userProfileEditIcon">
          {""}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Atualize sua foto do perfil"}</DialogTitle>
        <DialogContent>
          <input type="file" name="image" onChange={(e) => {props.sendInputImage(e.target.files[0])}}></input>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
