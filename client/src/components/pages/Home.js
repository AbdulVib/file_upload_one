import React, { Component } from 'react'

import axios from 'axios'

//
import Form from './Form'

export default class Home extends Component {
    // componentDidMount() {
    //     axios.get('http://localhost:5000/data')
    //         .then(res => res)
    //         .then(res => console.log(res.data, ' ressss'))
    // }
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <hr />
                <hr />
                <hr />
                <Form />
            </div>
        )
    }
}
