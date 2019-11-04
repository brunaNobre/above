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
import CircularProgress from '@material-ui/core/CircularProgress';

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

const expected = {
  nova: {
    aries: "Impulsiva; Imediatista.",
    taurus: "Determinada; Buscando conforto; Tranquila.",
    gemini: "Clareza mental.",
    cancer: "Introvertida.",
    leo: "Criativa",
    virgo: "Buscando Simplicidade; Discreta.",
    libra: "Indecisa.",
    scorpio: "Enxergando além da superfície.",
    sagitarius: "Buscando liberdade e espaço.",
    capricorn: "Ambiciosa.",
    aquarius: "Querendo novidade.",
    pisces: "Sonhadora."
  },
  crescente: {
    aries: "Cheia de energia; Nervosa.",
    taurus: "Persistente.",
    gemini: "Com a mente inquieta.",
    cancer: "Sensível.",
    leo: "Carismática.",
    virgo: "Eficiente.",
    libra: "Festeira.",
    scorpio: "Intensa.",
    sagitarius: "Otimista.",
    capricorn: "Objetiva.",
    aquarius: "Interessada nas pessoas.",
    pisces: "Sensível."
  },
  cheia: {
    aries: "Corajosa; Espontânea.",
    taurus: "Esfomeada; Amável",
    gemini: "Encantadora; Falante; Sociável.",
    cancer: "Sensível; Bem humorada.",
    leo: "Vaidosa.",
    virgo: "Prestativa.",
    libra: "Vaidosa.",
    scorpio: "Sensual.",
    sagitarius: "Feliz; Extrovertida.",
    capricorn: "Focada.",
    aquarius: "Original.",
    pisces: "Romântica."
  },
  minguante: {
    aries: "Impaciente; Decidida.",
    taurus: "Prática; Preguiçosa.",
    gemini: "Dispersa.",
    cancer: "Nostálgica; Melancólica.",
    leo: "Egocêntrica",
    virgo: "Atenta.",
    libra: "Equilibrada.",
    scorpio: "Intuitiva.",
    sagitarius: "Fugindo de problemas.",
    capricorn: "Realista.",
    aquarius: "Desapegada.",
    pisces: "Querendo ficar sozinha."
  }
}



export default function SignMoonMood(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let listItems =  <CircularProgress className="loading"/>;


if(props.userFelt && props.mostFelt) {
  if(props.userFelt.scorpio && props.mostFelt.scorpio) {
    listItems = 
    
    <>
<ListItem>
<ListItemText className="listItem" primary="...em áries eu me sinto:" secondary={(props.userFelt.aries[0]) ? `${props.userFelt.aries[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.aries[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].aries}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.aries[0]) ? `${props.mostFelt.aries[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />
<ListItem>
<ListItemText className="listItem" primary="...em touro eu me sinto:" secondary={(props.userFelt.taurus[0]) ? `${props.userFelt.taurus[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.taurus[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].taurus}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.taurus[0]) ? `${props.mostFelt.taurus[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em gêmeos eu me sinto:" secondary={(props.userFelt.gemini[0]) ? `${props.userFelt.gemini[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.gemini[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].gemini}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.gemini[0]) ? `${props.mostFelt.gemini[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em câncer eu me sinto:" secondary={(props.userFelt.cancer[0]) ? `${props.userFelt.cancer[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.cancer[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].cancer}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.cancer[0]) ? `${props.mostFelt.cancer[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em leão eu me sinto:" secondary={(props.userFelt.leo[0]) ? `${props.userFelt.leo[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.leo[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].leo}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.leo[0]) ? `${props.mostFelt.leo[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em virgem eu me sinto:" secondary={(props.userFelt.virgo[0]) ? `${props.userFelt.virgo[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.virgo[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].virgo}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.virgo[0]) ? `${props.mostFelt.virgo[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em libra eu me sinto:" secondary={(props.userFelt.libra[0]) ? `${props.userFelt.libra[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.libra[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].libra}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.libra[0]) ? `${props.mostFelt.libra[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em escorpião eu me sinto:" secondary={(props.userFelt.scorpio[0]) ? `${props.userFelt.scorpio[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.scorpio[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].scorpio}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.scorpio[0]) ? `${props.mostFelt.scorpio[0]}` : "Nenhum por enquanto."}</span></p>
<Divider />

<ListItem>
<ListItemText className="listItem" primary="... em sagitário eu me sinto:" secondary={(props.userFelt.sagitarius[0]) ? `${props.userFelt.sagitarius[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.sagitarius[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].sagitarius}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.sagitarius[0]) ? `${props.mostFelt.sagitarius[0]}` : "Nenhum por enquanto."}</span></p>

<ListItem>
<ListItemText className="listItem" primary="... em capricórnio eu me sinto:" secondary={(props.userFelt.capricorn[0]) ? `${props.userFelt.capricorn[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.capricorn[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].capricorn}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.capricorn[0]) ? `${props.mostFelt.capricorn[0]}` : "Nenhum por enquanto."}</span></p>

<ListItem>
<ListItemText className="listItem" primary="... em aquário eu me sinto:" secondary={(props.userFelt.aquarius[0]) ? `${props.userFelt.aquarius[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.aquarius[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].aquarius}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.aquarius[0]) ? `${props.mostFelt.aquarius[0]}` : "Nenhum por enquanto."}</span></p>

<ListItem>
<ListItemText className="listItem" primary="... em peixes eu me sinto:" secondary={(props.userFelt.pisces[0]) ? `${props.userFelt.pisces[0]}` : "Você ainda não disse o que sentiu nessa lua."} />
</ListItem>
<p className="other-feel"> {props.userFelt.pisces[2]}</p>
<p className="feel-predict bold"><span>Esperados:</span> {expected[props.moonPhase].pisces}</p>
<p className="sign-mood-mostFelt">Sentimento mais escolhido pelas usuárias: <span>{(props.mostFelt.pisces[0]) ? `${props.mostFelt.pisces[0]}` : "Nenhum por enquanto."}</span></p>
    </>
  }
}

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
{listItems}
        </List>
      </Dialog>
    </div>
  );
}