import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


class UserMood extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
    
    }


    handleClick () {
        const data = {
            name: 'Maria da Silva Teste',
            redirect: 'http://127.0.0.1:8000/home'
        };
        
        axios.post('/oauth/clients', data)
            .then(response => {
                console.log(response.data);
            })
            .catch (response => {
                // List errors on response...
            });    }



    render() {
        return (
            <div>
                <h1>Meu mood</h1>
                <Button onClick={() => {this.handleClick()}}>Create User</Button>

            </div>
            
        )
    }
}

export default UserMood