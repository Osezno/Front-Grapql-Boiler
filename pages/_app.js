import { ApolloProvider } from "@apollo/client"
import client from "../config/apollo"
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import '../src/index.css'

const MyApp = ({ Component, pageProps }) => {

    console.log("Desde app.js")
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default MyApp;