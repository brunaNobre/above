import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import AboveSideMenu from './AboveSideMenu'

import AbvLogo from '../AbvLogo'
import AbvNavBar from '../AbvNavBar'
import AboveHeaderColorBar from './AboveHeaderColorBar'
import AbvUserProfile from '../AbvUserProfile/AbvUserProfile'



function AboveHeader () {


    return (
        <AppBar position="static" className="abv-header">
            <Toolbar>
                <AbvLogo />
                <AbvNavBar />
                <AboveHeaderColorBar />
                <AbvUserProfile />
                <AboveSideMenu />
           </Toolbar>
        </AppBar>
    )
}



export default AboveHeader

