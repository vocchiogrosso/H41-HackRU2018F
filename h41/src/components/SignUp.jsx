import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
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

    signUp(){
        console.log('this.state',this.state);
        const { email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return  (
            <div className="form-inline" 
                 style={{marginLeft:'35%',marginTop:'20%'}}
                 >
             <h2>Sign Up</h2>
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
              <button
                style={{marginRight:'25px'}}
                className="btn btn-primary"
                type="button"
                onClick={() => this.signUp()}
              >
              </button>
             </div>
            <div>{this.state.error.message}</div>
            <div><Link to={'/signin'}>Already a user? Sign In Instead.</Link></div>
           </div>
        )        
    }
}

export default SignUp;