import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import AbvUserProfileSigns from './AbvUserProfileSigns'
import AbvUserProfileSun from './AbvUserProfileSun'


class AbvUserProfile extends Component {
    render() {
        return (
            <div className="abv-user-profile">
                <Avatar alt="Avatar" src="/images/users/avatar.jpg" className="user-profile-img"/>
                <AbvUserProfileSun day="19" month="05"/>
            </div>
        )
    }
}

export default AbvUserProfile