import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import AbvUserProfileSigns from './AbvUserProfileSigns'



class AbvUserProfile extends Component {
    render() {
        return (
            <div className="abv-user-profile">
                <Avatar alt="Avatar" src="/images/users/avatar.jpg" className="user-profile-img"/>
                <AbvUserProfileSigns />
            </div>
        )
    }
}

export default AbvUserProfile