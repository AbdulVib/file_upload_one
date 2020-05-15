import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
   state = {
       name: '',
       email: '',
       password: '',
       photo: null
   }

   handleChange = e => {
       this.setState({ [e.target.name]: e.target.value });
   }

    onChangeHandler=event=>{
        this.setState({ photo: event.target.files[0] });
    }

   handleSubmit = e => {
    
    let reader = new FileReader();
    reader.readAsDataURL(this.state.photo);

    console.log(reader, ' reaer') // one type
    

    //second type

    //    const data = new FormData() 
    //    data.append('file', this.state.photo)

    //   const { name, email, password } = this.state 

    //   const photo = data

    //   console.log(this.state, ' state')
    //    const data = { name, email, password, photo }

        /////////////////// db 
    //    axios.post('http://localhost:5000/upload', data)
    //    .then(res => console.log( res, ' posteddddddddddddd'))
    //    .then(res => res)

    //    console.log(this.state, ' state')
   }
   render() {
    // console.log(this.state, ' state')
        return (
            <div>
                {/* <form onSubmit={ this.handleSubmit }> */}
                    <input type="text" value={ this.state.name } name="name" placeholder="NAME" onChange={ this.handleChange } /> <br />
                    <input type="email" value={ this.state.email } name="email" placeholder="EMAIL" onChange={ this.handleChange } /> <br />
                    <input type="password" value={ this.state.password } name="password" placeholder="PASSWORD" onChange={ this.handleChange } /> <br /> <br />

                    <input type="file" value={ this.state.file } name="file" onChange={ this.onChangeHandler } /> <br />

                    <button onClick={ this.handleSubmit } type="submit">SUBMIT</button>
                {/* </form> */}
            </div>
        )
    }
}
