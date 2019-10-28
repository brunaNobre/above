import React, { Component } from 'react'
import AbvUserProfile from './AbvUserProfile/AbvUserProfile'
import AbvGreeting from './AbvGreeting'


class AbvSideMenuHeader extends Component {
    render() {
        return (
            <div className="abv-sidemenu-header">
                <AbvUserProfile />
                <AbvGreeting user={this.props.user}/>
            </div>
        )
    }
}

export default AbvSideMenuHeader