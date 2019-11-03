import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignMoonMood(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="signmoon-moods">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ver nos signos
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar + " signmoon-mood-header"}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Na lua {props.moonPhase}...
            </Typography>
          </Toolbar>
        </AppBar>       
        <List>
          <ListItem>
            <ListItemText primary="...em áries eu me sinto:" secondary="Feliz" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />
          <ListItem>
            <ListItemText primary="...em touro eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em gêmeos eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em câncer eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em leão eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em virgem eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em libra eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em escorpião eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em sagitário eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em capricórnio eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em aquário eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

          <ListItem>
            <ListItemText primary="... em peixes eu me sinto:" secondary="Nervosa" />
          </ListItem>
          <p className="sign-mood-mostFelt">Sentimento mais escolhido: <span>Feliz</span></p>
          <Divider />

        </List>
      </Dialog>
    </div>
  );
}