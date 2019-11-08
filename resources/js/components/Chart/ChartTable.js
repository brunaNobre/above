import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function translateSign(sign) {
    switch(sign) {
        case "Aries":
        return "Áries";
        break;
        case "Taurus":
        return "Touro";
        break;
        case "Gemini":
        return "Gêmeos";
        break;
        case "Cancer":
        return "Câncer";
        break;
        case "Leo":
        return "Leão";
        break;
        case "Virgo":
        return "Virgem";
        break;
        case "Libra":
        return "Libra";
        break;
        case "Scorpio":
        return "Escorpião";
        break;
        case "Saggitarius":
        return "Sagitário";
        break;
        case "Capricorn":
        return "Capricórnio";
        break;
        case "Aquarius":
        return "Aquário";
        break;
        default:
        return "Peixes";
        break;
    }
}


export default function ChartTable(props) {
  const classes = useStyles();
  let rows = <TableRow><TableCell>carregando...</TableCell></TableRow>;

  if(props.chart.sun != "") {
      rows = (
          <>  
      <TableRow>
        <TableCell>Sol</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.sun)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ascendente</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.rising_sign)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Lua</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.moon)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Mercúrio</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.mercury)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Vênus</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.venus)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Marte</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.mars)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Júpiter</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.jupiter)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Saturno</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.saturn)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Urano</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.uranus)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Netuno</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.neptune)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Plutão</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.pluto)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Meio do céu</TableCell>
        <TableCell className="chart-sign">{translateSign(props.chart.mc)}</TableCell>
      </TableRow>
      </>
      );  
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Astro</TableCell>
            <TableCell>Signo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {rows}
        </TableBody>
      </Table>
    </Paper>
  );
}