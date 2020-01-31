import React, { Component } from 'react'
import AbvUserProfile from './AbvUserProfile/AbvUserProfile'
import AbvGreeting from './AbvGreeting'


class AbvSideMenuHeader extends Component {
    render() {
        return (
            <div className="abv-sidemenu-header">
                <AbvUserProfile
                 edit="true"
                id={this.props.user.id}
                avatar={this.props.avatar}
                uploadUserImage={this.props.uploadUserImage}
                sendInputImage={this.props.sendInputImage}
                />
                <AbvGreeting user={this.props.user} firstName={this.props.firstName}/>
            </div>
        )
    }
}

export default AbvSideMenuHeader