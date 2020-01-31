import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import AbvUserProfileSigns from './AbvUserProfileSigns'
import AbvUserProfileSun from './AbvUserProfileSun'
import AbvProfileEditDialog from './AbvProfileEditDialog'

class AbvUserProfile extends Component {
    constructor(){
        super()
        this.state = {
            image: '',
        }

        this.uploadUserImage = this.uploadUserImage.bind(this)
        this.sendInputImage = this.sendInputImage.bind(this)
    }



    uploadUserImage() {
        const formData = new FormData();
        formData.append('user_image', this.state.image);

        axios.post('/api/user/image', formData)
        .then(res => {
            console.log(res.data)
            });

    }


    sendInputImage(file) {
        this.setState({image: file})
    }


  

    render() {
        return (
            <div className="abv-user-profile">


                {
     
                    this.props.avatar ? 
                    <Avatar alt="Avatar" src={`/images/users/${this.props.id}.jpg`} className="user-profile-img"/> :

                    <Avatar alt="Avatar" src="/images/users/avatar.jpg" className="user-profile-img"/> 

                }

                {this.props.birth_date ? <AbvUserProfileSun day={this.props.birth_date.split("-")[2]} month={this.props.birth_date.split("-")[1]}/> : ""}
                {this.props.edit ? <AbvProfileEditDialog 
                uploadUserImage={this.uploadUserImage}
                sendInputImage={this.sendInputImage}
                /> : ""}
            </div>
        )
    }
}

export default AbvUserProfile