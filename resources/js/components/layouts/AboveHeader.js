import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';


import AboveSideMenu from './AboveSideMenu'
import AbvLogoutMenu from './AbvLogoutMenu'

import AbvLogo from '../AbvLogo'
import AbvNavBar from '../AbvNavBar'
import AboveHeaderColorBar from './AboveHeaderColorBar'

function AboveHeader (props) {


    return (
        <AppBar position="static" className="abv-header">
            <Toolbar>
                <AbvLogo />
                <AbvNavBar />
                <AboveHeaderColorBar />
                <AboveSideMenu user={props.user} firstName={props.firstName}/>
                <AbvLogoutMenu user={props.user} firstName={props.firstName}/>
           </Toolbar>

        </AppBar>
    )
}



export default AboveHeader

