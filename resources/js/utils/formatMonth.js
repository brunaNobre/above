export default function formatMonth(m) {
    switch(m) {
      case "01":
      m = "Janeiro";
      break;
      case "Janeiro":
      m = "01";
      break;

      case "02":
      m = "Fevereiro";
      break;
      case "Fevereiro":
      m = "02";
      break;

      case "03":
      m = "Março";
      break;
      case "Março":
      m = "03";
      break;

      case "04":
      m = "Abril";
      break;
      case "Abril":
      m = "04";
      break;

      case "05":
      m = "Maio";
      break;
      case "Maio":
      m = "05";
      break;

      case "06":
      m = "Junho";
      break;
      case "Junho":
      m = "06";
      break;

      case "07":
      m = "Julho";
      break;
      case "Julho":
      m = "07";
      break;

      case "08":
      m = "Agosto";
      break;
      case "Agosto":
      m = "08";
      break;

      case "09":
      m = "Setembro";
      break;
      case "Setembro":
      m = "09";
      break;

      case "10":
      m = "Outubro";
      break;
      case "Outubro":
      m = "10";
      break;

      case "11":
      m = "Novembro";
      break;
      case "Novembro":
      m = "11";
      break;

      case "12":
      m = "Dezembro";
      break;
      case "Dezembro":
      m = "12";
      break;

      default:
      break;

    }

    return m;
  } 