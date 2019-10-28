export default function formatMonth(m) {
    switch(m) {
      case "1":
      m = "Janeiro";
      break;
      case "Janeiro":
      m = "1";
      break;

      case "2":
      m = "Fevereiro";
      break;
      case "Fevereiro":
      m = "2";
      break;

      case "3":
      m = "Março";
      break;
      case "Março":
      m = "3";
      break;

      case "4":
      m = "Abril";
      break;
      case "Abril":
      m = "4";
      break;

      case "5":
      m = "Maio";
      break;
      case "Maio":
      m = "5";
      break;

      case "6":
      m = "Junho";
      break;
      case "Junho":
      m = "6";
      break;

      case "7":
      m = "Julho";
      break;
      case "Julho":
      m = "7";
      break;

      case "8":
      m = "Agosto";
      break;
      case "Agosto":
      m = "8";
      break;

      case "9":
      m = "Setembro";
      break;
      case "Setembro":
      m = "9";
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