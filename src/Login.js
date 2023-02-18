import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        gender:''
    }
    changeHappens = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    }
    handleUserName = (event) => {
        console.log(event)
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }
    DisplayPassword = (event) => {
        event.preventDefault()
        console.log(event)
        document.getElementById('pass').type="text";

    }
    submitHandler=()=>{
        if(this.state.username==="" || this.state.password===""){
            alert("please fill data")
        }
    }
    
   
    render() {
        console.log(this.state)
        return (
            <div className='container'>
                <form onSubmit={this.submitHandler}>
                    <table className='table table-success table-hover'>
                        <tbody>
                            <tr>
                                <td>
                                    <label>UserName</label>
                                </td>
                                <td>
                                    <input type="text"
                                        placeholder='username'
                                        value={this.state.username}
                                        onChange={this.handleUserName}>

                                        </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>password</label>
                                </td>
                                <td>
                                    <input id="pass" type="password" placeholder='password' value={this.state.password} onChange={this.changeHappens}></input>
                                    <button onClick={this.DisplayPassword}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg></button>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td><button className='btn btn-ouline btn-success'>Submit</button></td>
                            </tr>
                           
                        </tbody>
                    </table>

                </form>
            </div>
        )
    }
}
