import { makeStyles } from '@material-ui/styles';
import colors from '../constants/colors';
import shadows from '../constants/shadows';
import borders from '../constants/borders';
import grids from '../constants/grids';
import breakpoints from '../constants/breakpoints';



const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const LayoutStyle = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
       
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 15,
        background: colors.primary,
        color:colors.white,
        height: '100%',
        [breakpoints.largeTablet]: {
            overflowX: 'auto' ,
        }  
    },
    header: {
        width: '100%',
        color: colors.white,
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        justifyContent: 'justify-content: left;',
        borderBottom:`${colors.contrastDark} solid`,
        
       
    },
    footer:{
        ...grids.octaGrid,
        backgroundColor:colors.contrastDark,
        color:colors.contrastLight,
        position: 'absolute',
        bottom: '0',
        height: '80px',
        [breakpoints.largeTablet]: {
            position: 'static',
        }
    },
    container: {
        ...grids.twoColumnGrid
    },
  
    iconContainer: {
        display: 'flex',
        marginLeft: theme.spacing(3),
    },
   
}))

export default LayoutStyle