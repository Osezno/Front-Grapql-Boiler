
import LayoutStyle from './Layout.style'

import { useState, useEffect } from 'react'

const useStyles = LayoutStyle

const Layout = ({ children }) => {
    const classes = useStyles();
    
    const [loading, setloadig] = useState(false);

    const handleSearch = (search) => {
      
    }

    const handleLoading = () => {
        setloadig(true)
        setTimeout(() => {
            setloadig(false)
        }, 3000);
    }


    return (
        <div className={classes.root}>
          {children}
        </div>
    );
}

export default Layout;