import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



import AbvLogo from '../AbvLogo'
import AbvNavBar from '../AbvNavBar'



function AboveHeader () {


    return (
        <AppBar position="static" className="abv-header">
            <Toolbar>
                <AbvLogo />
                <AbvNavBar />
           </Toolbar>
        </AppBar>
    )
}



export default AboveHeader

