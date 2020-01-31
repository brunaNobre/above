import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import AbvUserProfileSigns from './AbvUserProfileSigns'
import AbvUserProfileSun from './AbvUserProfileSun'
import AbvProfileEditDialog from './AbvProfileEditDialog'

class AbvUserProfile extends Component {


    render() {
        
        return (
            <div className="abv-user-profile">
                <Avatar onError={(e) => {e.target.setAttribute("src", "/images/users/avatar.jpg")}} alt="Avatar" src={`/images/users/${this.props.avatar}.jpg`} className="user-profile-img"/> 
                

                {this.props.birth_date ? <AbvUserProfileSun day={this.props.birth_date.split("-")[2]} month={this.props.birth_date.split("-")[1]}/> : ""}
                {this.props.edit ? <AbvProfileEditDialog 
                uploadUserImage={this.props.uploadUserImage}
                sendInputImage={this.props.sendInputImage}
                /> : ""}
            </div>
        )
    }
}

export default AbvUserProfile