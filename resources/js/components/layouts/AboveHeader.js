import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';




function AboveHeader () {
    return (
        <AppBar position="static">
            <Toolbar>
                <h1>Above</h1>
            </Toolbar>
        </AppBar>
    )
}
export default AboveHeader