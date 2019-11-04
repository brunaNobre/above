import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import SignMoonMood from './SignMoonMood'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MoonsMood(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let userFeellingsNewList = <CircularProgress className="loading"/>;
  let userFeellingsWaxList = <CircularProgress className="loading"/>;
  let userFeellingsFullList = <CircularProgress className="loading"/>;
  let userFeellingsWanList = <CircularProgress className="loading"/>;
  let newMoonMostFelt = "";
  let newMoonMostFeltPercentage = "...";
  let waxMoonMostFelt = "";
  let waxMoonMostFeltPercentage = "...";
  let fullMoonMostFelt = "";
  let fullMoonMostFeltPercentage = "...";
  let wanMoonMostFelt = "";
  let wanMoonMostFeltPercentage = "...";

  let userFeltSignNew = {};

  let userFeltSignWax = {};

  let userFeltSignFull = {};

  let userFeltSignWan = {};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

      // if userFeellingsNew state was loaded
      if(Array.isArray(props.userFeellingsNew)) {
        if((props.userFeellingsNew).length == 0) {
          userFeellingsNewList = <ListItem><ListItemText primary="Você não registrou nenhum sentimento nessa lua." /></ListItem>
        } else {
          userFeellingsNewList = []
          const percentage = {}
          const count = {};
          let sum = 0;
          (props.userFeellingsNew).forEach(function(feelling) {
             count[feelling.name] = (count[feelling.name] ||0) + 1;
            });
    
          for(let feelling in count) {
            sum = sum + count[feelling];
          } 
    
          for(let feelling in count) {
            percentage[feelling]  = (count[feelling] / sum) * 100
          }
          //sort the percentage values
          let sortedPercentages = [];
          for(let p in percentage) {
            sortedPercentages.push([p, percentage[p]]);
          }
          sortedPercentages.sort(function(a, b) {
            return b[1] - a[1];
          });
    
          userFeellingsNewList = sortedPercentages.map(function(p, i) {
            return (
              <ListItem key={i}>
                <ListItemText primary={`${p[0]}: ${p[1].toPrecision(3)}%`} />
              </ListItem>
            )
          });
        }  
      }

      // if userFeellingsWax state was loaded
      if(Array.isArray(props.userFeellingsWax)) {
        if((props.userFeellingsWax).length == 0) {
          userFeellingsWaxList = <ListItem><ListItemText primary="Você não registrou nenhum sentimento nessa lua." /></ListItem>
        } else {
          userFeellingsWaxList = []
          const percentage = {}
          const count = {};
          let sum = 0;
          (props.userFeellingsWax).forEach(function(feelling) {
             count[feelling.name] = (count[feelling.name] ||0) + 1;
            });
    
          for(let feelling in count) {
            sum = sum + count[feelling];
          } 
    
          for(let feelling in count) {
            percentage[feelling]  = (count[feelling] / sum) * 100
          }
          //sort the percentage values
          let sortedPercentages = [];
          for(let p in percentage) {
            sortedPercentages.push([p, percentage[p]]);
          }
          sortedPercentages.sort(function(a, b) {
            return b[1] - a[1];
          });
    
          userFeellingsWaxList = sortedPercentages.map(function(p, i) {
            return (
              <ListItem key={i}>
                <ListItemText primary={`${p[0]}: ${p[1].toPrecision(3)}%`} />
              </ListItem>
            )
          });
        }  
      }

      // if userFeellingsFull state was loaded
      if(Array.isArray(props.userFeellingsFull)) {
        if((props.userFeellingsFull).length == 0) {
          userFeellingsFullList = <ListItem><ListItemText primary="Você não registrou nenhum sentimento nessa lua." /></ListItem>
        } else {
          userFeellingsFullList = []
          const percentage = {}
          const count = {};
          let sum = 0;
          (props.userFeellingsFull).forEach(function(feelling) {
             count[feelling.name] = (count[feelling.name] ||0) + 1;
            });
    
          for(let feelling in count) {
            sum = sum + count[feelling];
          } 
    
          for(let feelling in count) {
            percentage[feelling]  = (count[feelling] / sum) * 100
          }
          //sort the percentage values
          let sortedPercentages = [];
          for(let p in percentage) {
            sortedPercentages.push([p, percentage[p]]);
          }
          sortedPercentages.sort(function(a, b) {
            return b[1] - a[1];
          });
    
          userFeellingsFullList = sortedPercentages.map(function(p, i) {
            return (
              <ListItem key={i}>
                <ListItemText primary={`${p[0]}: ${p[1].toPrecision(3)}%`} />
              </ListItem>
            )
          });
        }  
      }      

      // if userFeellingsWan state was loaded
      if(Array.isArray(props.userFeellingsWan)) {
        if((props.userFeellingsWan).length == 0) {
          userFeellingsWanList = <ListItem><ListItemText primary="Você não registrou nenhum sentimento nessa lua." /></ListItem>
        } else {
          userFeellingsWanList = []
          const percentage = {}
          const count = {};
          let sum = 0;
          (props.userFeellingsWan).forEach(function(feelling) {
             count[feelling.name] = (count[feelling.name] ||0) + 1;
            });
    
          for(let feelling in count) {
            sum = sum + count[feelling];
          } 
    
          for(let feelling in count) {
            percentage[feelling]  = (count[feelling] / sum) * 100
          }
          //sort the percentage values
          let sortedPercentages = [];
          for(let p in percentage) {
            sortedPercentages.push([p, percentage[p]]);
          }
          sortedPercentages.sort(function(a, b) {
            return b[1] - a[1];
          });
    
          userFeellingsWanList = sortedPercentages.map(function(p, i) {
            return (
              <ListItem key={i}>
                <ListItemText primary={`${p[0]}: ${p[1].toPrecision(3)}%`} />
              </ListItem>
            )
          });
        }  
      }  

      // if allFeellingsNew state was loaded and has any feelling
      if(Array.isArray(props.allFeellingsNew) && (props.allFeellingsNew).length) {
          const percentage = {}
          const count = {};
          let sum = 0;

          (props.allFeellingsNew).forEach(function(feelling) {
             count[feelling.name] = (count[feelling.name] ||0) + 1;
            });
    
          for(let feelling in count) {
            sum = sum + count[feelling];
          } 
    
          for(let feelling in count) {
            percentage[feelling]  = (count[feelling] / sum) * 100
          }

          let arr = Object.values(percentage);
          let max = Math.max(...arr);

          for(let p in percentage) {
            if((percentage[p] == max)) {
              newMoonMostFelt = p;
              newMoonMostFeltPercentage = percentage[p].toPrecision(3);
              break;
            }
          }
      }

      // if allFeellingsWax state was loaded and has any feelling
      if(Array.isArray(props.allFeellingsWax) && (props.allFeellingsWax).length) {
        const percentage = {}
        const count = {};
        let sum = 0;

        (props.allFeellingsWax).forEach(function(feelling) {
           count[feelling.name] = (count[feelling.name] ||0) + 1;
          });
  
        for(let feelling in count) {
          sum = sum + count[feelling];
        } 
  
        for(let feelling in count) {
          percentage[feelling]  = (count[feelling] / sum) * 100
        }

        let arr = Object.values(percentage);
        let max = Math.max(...arr);

        for(let p in percentage) {
          if((percentage[p] == max)) {
            waxMoonMostFelt = p;
            waxMoonMostFeltPercentage = percentage[p].toPrecision(3);
            break;
          }
        }
    }      

      // if allFeellingsFull state was loaded and has any feelling
      if(Array.isArray(props.allFeellingsFull) && (props.allFeellingsFull).length) {
        const percentage = {}
        const count = {};
        let sum = 0;

        (props.allFeellingsFull).forEach(function(feelling) {
           count[feelling.name] = (count[feelling.name] ||0) + 1;
          });
  
        for(let feelling in count) {
          sum = sum + count[feelling];
        } 
  
        for(let feelling in count) {
          percentage[feelling]  = (count[feelling] / sum) * 100
        }

        let arr = Object.values(percentage);
        let max = Math.max(...arr);

        for(let p in percentage) {
          if((percentage[p] == max)) {
            fullMoonMostFelt = p;
            fullMoonMostFeltPercentage = percentage[p].toPrecision(3);
            break;
          }
        }
    }     

      // if allFeellingsWan state was loaded and has any feelling
      if(Array.isArray(props.allFeellingsWan) && (props.allFeellingsWan).length) {
        const percentage = {}
        const count = {};
        let sum = 0;

        (props.allFeellingsWan).forEach(function(feelling) {
           count[feelling.name] = (count[feelling.name] ||0) + 1;
          });
  
        for(let feelling in count) {
          sum = sum + count[feelling];
        } 
  
        for(let feelling in count) {
          percentage[feelling]  = (count[feelling] / sum) * 100
        }

        let arr = Object.values(percentage);
        let max = Math.max(...arr);

        for(let p in percentage) {
          if((percentage[p] == max)) {
            wanMoonMostFelt = p;
            wanMoonMostFeltPercentage = percentage[p].toPrecision(3);         
            break;
          }
        }
    }     


// GET MOST FELT FEELLING ON EVERY SIGN ON EVERY MOON PHASE
function getFeellingsInPhaseSign(userFeellingsPhase, sign, userMoods, phase) {
  let moodsOfPhaseIds = [];
  for (let i = 0; i < (userFeellingsPhase).length; i++) {
      if(moodsOfPhaseIds.indexOf((userFeellingsPhase)[i].pivot.mood_id) == -1) {
        moodsOfPhaseIds.push((userFeellingsPhase)[i].pivot.mood_id);
      }
  }
  
  let moodsOfSign = [];
  let feellingsPhaseSign = [];
  
  for(let i = 0; i < moodsOfPhaseIds.length; i++) {
    for(let j = 0; j < (userMoods).length; j++) {
      if((userMoods)[j].id == moodsOfPhaseIds[i] && (userMoods)[j].moon_sign == sign) {
        moodsOfSign.push((userMoods)[j]);
        break;
      }
    }
  }
  
  for(let i = 0; i < moodsOfSign.length; i++) {
    for(let j = 0; j < (userFeellingsPhase).length; j++) {      
      if(moodsOfSign[i]) {
        if((userFeellingsPhase)[j].pivot.mood_id == moodsOfSign[i].id) {
          feellingsPhaseSign.push((userFeellingsPhase)[j].name);
        }
      }
    }
  }

  const percentage = {}
  const count = {};
  let sum = 0;
  let mostFelt;
  let mostFeltPercentage;
  let listOfFeellings = "";

  if(feellingsPhaseSign) { 
    (feellingsPhaseSign).forEach(function(feelling) {
      count[feelling] = (count[feelling] ||0) + 1;
     });

     for(let feelling in count) {
      sum = sum + count[feelling];
    } 

    for(let feelling in count) {
      percentage[feelling]  = (count[feelling] / sum) * 100
    }

    let arr = Object.values(percentage);
    let max = Math.max(...arr);

    for(let p in percentage) {
      if((percentage[p] == max)) {
        mostFelt = p;
        mostFeltPercentage = percentage[p].toPrecision(3);         
        break;
      }
    }

    for(let p in percentage){
      if((p != mostFelt)) {
        listOfFeellings = listOfFeellings + p + "; ";
      }
    }


  }



  
  return [mostFelt, mostFeltPercentage, listOfFeellings];
}

const signNames = ["aries", "taurus", "gemini", "cancer", "leo", 
"virgo", "libra", "scorpio", "sagitarius", "capricorn", "aquarius", "pisces"];

// User feellings on NEW MOON on each sign
if(Array.isArray(props.userFeellingsNew) ) {
   if(Array.isArray(props.userMoods)){
    for(let i = 0; i < signNames.length; i++) {
      userFeltSignNew[signNames[i]] = getFeellingsInPhaseSign(props.userFeellingsNew, signNames[i], props.userMoods, "new");
    }
   }
}

// User feellings on WAX MOON on each sign
if(Array.isArray(props.userFeellingsWax) && Array.isArray(props.userMoods)) {
for(let i = 0; i < signNames.length; i++) {
  userFeltSignWax[signNames[i]] = getFeellingsInPhaseSign(props.userFeellingsWax, signNames[i], props.userMoods, "waxing");
}
}

// User feellings on FULL MOON on each sign
if(Array.isArray(props.userFeellingsFull) && Array.isArray(props.userMoods)) {
for(let i = 0; i < signNames.length; i++) {
  userFeltSignFull[signNames[i]] = getFeellingsInPhaseSign(props.userFeellingsFull, signNames[i], props.userMoods, "full");
}
}

// User feellings on WAN MOON on each sign
if(Array.isArray(props.userFeellingsWan) && Array.isArray(props.userMoods)) {
for(let i = 0; i < signNames.length; i++) {
  userFeltSignWan[signNames[i]] = getFeellingsInPhaseSign(props.userFeellingsWan, signNames[i], props.userMoods, "waning");
}
} 
  return (
    <div className={classes.root +" moons-panel"}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Nova" {...a11yProps(0)} />
          <Tab label="Crescente" {...a11yProps(1)} />
          <Tab label="Cheia" {...a11yProps(2)} />
          <Tab label="Minguante" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignMoonMood moonPhase="nova"
        userFelt = {userFeltSignNew}
        />
        Na <b>Lua Nova</b> eu me sinto:
        <List component="nav" aria-label="main mailbox folders">
        {userFeellingsNewList}
        </List>
        <div className="major-feelling-in-moon">

        {(newMoonMostFelt != "") ? 
        <p className="major-people">O que foi mais sentido pelos usuários nessa lua: <b>{newMoonMostFelt} ({newMoonMostFeltPercentage}%)</b></p> :
        <p className="major-people">Ninguém mais falou o que sentia nessa lua.</p>}

          
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignMoonMood moonPhase="crescente"
        userFelt={userFeltSignWax}
        />
        Na <b>Lua Crescente</b> eu me sinto:
        <List component="nav" aria-label="main mailbox folders">
        {userFeellingsWaxList}
        </List>
        <div className="major-feelling-in-moon">

        {(waxMoonMostFelt != "") ? 
        <p className="major-people">O que foi mais sentido pelos usuários nessa lua: <b>{waxMoonMostFelt} ({waxMoonMostFeltPercentage}%)</b></p> :
        <p className="major-people">Ninguém mais falou o que sentia nessa lua.</p>}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SignMoonMood moonPhase="cheia"
        userFelt={userFeltSignFull}
        />
        Na <b>Lua Cheia</b> eu me sinto:
        <List component="nav" aria-label="main mailbox folders">
        {userFeellingsFullList}
        </List>
        <div className="major-feelling-in-moon">

        {(fullMoonMostFelt != "") ? 
        <p className="major-people">O que foi mais sentido pelos usuários nessa lua: <b>{fullMoonMostFelt} ({fullMoonMostFeltPercentage}%)</b></p> :
        <p className="major-people">Ninguém mais falou o que sentia nessa lua.</p>}

        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SignMoonMood moonPhase="minguante"
        userFelt={userFeltSignWan}
        />
        Na <b>Lua Minguante</b> eu me sinto:
        <List component="nav" aria-label="main mailbox folders">
        {userFeellingsWanList}
        </List>
        <div className="major-feelling-in-moon">
        {(wanMoonMostFelt != "") ? 
        <p className="major-people">O que foi mais sentido pelos usuários nessa lua: <b>{wanMoonMostFelt} ({wanMoonMostFeltPercentage}%)</b></p> :
        <p className="major-people">Ninguém mais falou o que sentia nessa lua.</p>}        
        </div>
      </TabPanel>
      <Divider />
    </div>
  );
}