import React, { Component } from 'react'
import AbvUserProfile from './AbvUserProfile/AbvUserProfile'
import AbvGreeting from './AbvGreeting'


class AbvSideMenuHeader extends Component {
    render() {
        return (
            <div className="abv-sidemenu-header">
                <AbvUserProfile edit="true" avatar={this.props.user.avatar} id={this.props.user.id}/>
                <AbvGreeting user={this.props.user} firstName={this.props.firstName}/>
            </div>
        )
    }
}

export default AbvSideMenuHeader