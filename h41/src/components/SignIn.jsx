import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            error: {
                message: ''
            }
        }
    }

    signIn(){
        console.log('this.state',this.state);
        const { email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return  (
            <div className="form-inline" style={{marginLeft:'35%',marginTop:'20%'}}>
             <h2>Sign In</h2>
             <div className="form-group">
              <input 
                style={{marginRight:'5px'}}
                className="form-control"
                type="text"
                placeholder="email"
                onChange={event => this.setState({email: event.target.value})}
              />
              <input 
                style={{marginRight:'5px'}}
                className="form-control"
                type="password"
                placeholder="password"
                onChange={event => this.setState({password: event.target.value})}
              />
              <br></br>
              <button
                style={{position:'relative',width:'95%',height:'180%'}}
                type="button"
                onClick={() => this.signIn()}
              >
              </button>
             </div>
            <div>{this.state.error.message}</div>
            <div><Link to={'/signup'}>Not a user? Sign Up Instead.</Link></div>
           </div>
        )        
    }
}

export default SignIn;