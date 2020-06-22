import React, {useState,useEffect} from 'react';
import './LoginForm.css';
import { withRouter } from "react-router-dom";
import { lab } from 'd3';

function LoginForm(props) {

    const rowStyle = {
        marginTop: "120px",
        boxShadow: "-1px 1px 50px 10px black"
      };
      const aStyle={
          borderBottom:"1px solid #f44c89",
          padding:"10px",
          textAlign:"center"

      };
      

    useEffect(() => {
        props.updateTitle('Login');
      }, []);
    
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null,
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.email ==="nikhil@gmail.com" && state.password ==="password"){
               redirectToHome();
        }  
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }

    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
   
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                       <div className="col-md-8">
                         <div className="row" style={rowStyle}>
                             <div className="col-md-12">
                            <h1 style={aStyle}>sign in</h1>
                            <form>
                            <label htmlFor="email" className ="label control-label">User name</label>
                            <input type="email" 
                            className="form-control" 
                            id="email"  
                            placeholder="Enter email" 
                            value={state.email}
                            onChange={handleChange}
                       />

                           <label htmlFor="password" className ="label control-label">Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="password" 
                            value={state.password}

                            onChange={handleChange}
                       />
                       <input type="checkbox"/><small>Remember me ?</small>
                       <div className="row"> 
                       <div className="col-md-6">
                       <button type="submit" className="btn btn-info" onClick={handleSubmitClick}>Sign in</button>
                       </div>
                       <div className="col-md-6 registerMessage">
                        <span>Dont have an account? </span>
                        <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
                       </div>
                       </div>
                       
                       </form>
                       
                    </div>  
                </div>
                </div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </section>
        
        // <div className="card col-12 col-lg-12 login-card mt-2 hv-center">
        //     <h1>Sign in</h1>
        //     <form>
        //         <div className="form-group text-left">
        //         <label htmlFor="email">Email address</label>
        //         <input type="email" 
        //                className="form-control" 
        //                id="email" 
        //                aria-describedby="emailHelp" 
        //                placeholder="Enter email" 
        //                value={state.email}
        //                onChange={handleChange}
        //         />
        //         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="form-group text-left">
        //         <label htmlFor="password">Password</label>
        //         <input type="password" 
        //                className="form-control" 
        //                id="password" 
        //                placeholder="Password"
        //                value={state.password}
        //                onChange={handleChange} 
        //         />
        //         </div>
        //         <div className="form-check">
        //         </div>
        //         <button 
        //             type="submit" 
        //             className="btn btn-primary"
        //             onClick={handleSubmitClick}
        //         >Submit</button>
        //     </form>
        //     <div className="registerMessage">
        //         <span>Dont have an account? </span>
        //         <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
        //     </div>
        // </div>
       
    )
}

export default withRouter(LoginForm);