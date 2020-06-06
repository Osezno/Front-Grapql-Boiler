import { createMuiTheme } from '@material-ui/core/styles';
import  colors  from '../constants/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary:{
      main:colors.secondary
    },   
  },
});

export default theme;