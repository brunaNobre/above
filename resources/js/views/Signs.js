import React, { Component } from 'react'
import SignCard from '../components/Signs/SignCard'


class Signs extends Component {
    constructor() {
        super()
        this.state = {
            signs: []
        }
    }

    componentDidMount() {
        axios.get(`/api/signs`)
          .then(res => {
             this.setState({signs: res.data})
          })
    }



    render() {
        const signCards =  this.state.signs.map(
            sign => <SignCard key={sign.id} name={sign.name} description={sign.description} />
            )

        return (
            <div className="signs-view">
              {signCards}
            </div>
        )
    }
}

export default Signs