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
import NewTaskFields from './NewTaskFields'
import sunSign from '../../utils/sunSign'


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

export default function NewTaskForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAndSaveTask = () => {
    setOpen(false);
    props.handleAdd(props.newTask)
  };



  return (
    <div>
      <Button className="new-task-button" variant="outlined" onClick={handleClickOpen}>
        Nova tarefa
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar + " newtask-header"}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Nova tarefa
            </Typography>
            <Button color="inherit" onClick={handleCloseAndSaveTask}>
              salvar
            </Button>
          </Toolbar>
        </AppBar>
        
        <NewTaskFields 
        newTask={props.newTask}
        sendInputValue={props.sendInputValue}
         />

         <p className="new-task-form-sunsign">Na data acima o <span>Sol</span> está em <span>{sunSign(props.newTask.due_to)}</span></p>

      </Dialog>
    </div>
  );
}