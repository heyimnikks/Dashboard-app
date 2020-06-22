import React, {useState} from 'react';
import './RegistrationForm.css';
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {

    const rowStyle = {
        marginTop: "120px",
        boxShadow: "-1px 1px 50px 10px black"
      };
      const aStyle={
          borderBottom:"1px solid #f44c89",
          padding:"10px",
          textAlign:"center"

      };
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
   
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            redirectToHome();  
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        // <div className="card col-12 col-lg-12 login-card mt-2 hv-center">
        //     <h1>Register</h1>
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
        //             <label htmlFor="password">Password</label>
        //             <input type="password" 
        //                 className="form-control" 
        //                 id="password" 
        //                 placeholder="Password"
        //                 value={state.password}
        //                 onChange={handleChange} 
        //             />
        //         </div>
        //         <div className="form-group text-left">
        //             <label htmlFor="confirmPassword">Confirm Password</label>
        //             <input type="password" 
        //                 className="form-control" 
        //                 id="confirmPassword" 
        //                 placeholder="Confirm Password"
        //                 value={state.confirmPassword}
        //                 onChange={handleChange} 
        //             />
        //         </div>
        //         <button 
        //             type="submit" 
        //             className="btn btn-dark"
        //             onClick={handleSubmitClick}
        //         >
        //             Register
        //         </button>
        //     </form>
        //     {/* <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
        //         {state.successMessage}
        //     </div> */}
        //     <div className="mt-2">
        //         <span>Already have an account? </span>
        //         <span className="loginText btn-dark text-white" onClick={() => redirectToLogin()}>Login here</span> 
        //     </div>
            
        // </div>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                       <div className="col-md-8">
                         <div className="row" style={rowStyle}>
                             <div className="col-md-12">
                            <h1 style={aStyle}>Sign up</h1>
                            <form>

                            <label htmlFor="firstname" className ="label control-label">First name</label>
                            <input type="firstname" 
                            className="form-control" 
                            id="firstname" 
                            placeholder="First name" 
                            value={state.firstname}
                            autoComplete="off"
                            onChange={handleChange}
                       />
                        <label htmlFor="lastname" className ="label control-label">Last name</label>
                            <input type="lastname" 
                            className="form-control" 
                            id="lastname" 
                            placeholder="Last name" 
                            value={state.lastname}
                            autoComplete="off"
                            onChange={handleChange}
                       />

                            <label htmlFor="email" className ="label control-label">Email address</label>
                            <input type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                            value={state.email}
                            autoComplete="off"
                            onChange={handleChange}
                       />

                       <label  htmlFor="mobilenumber" className ="label control-label">Mobile number</label>
                            <input type="mobilenumber" 
                            className="form-control" 
                            id="mobilenumber"  
                            placeholder="Mobile number" 
                            value={state.mobilenumber}
                            autoComplete="off"
                            onChange={handleChange}
                       />


                           <label htmlFor="password" className ="label control-label">Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="password" 
                            value={state.password}
                            autoComplete="off"
                            onChange={handleChange}
                       />
                       <label className ="label control-label">Confirm Password</label>
                            <input type="confirmPassword" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="confirmPassword" 
                            value={state.confirmPassword}
                            autoComplete="off"
                            onChange={handleChange}
                       />
                      
                       <div className="row"> 
                       <div className="col-md-6">
                       <button type="submit" className="btn btn-info" onClick={handleSubmitClick}>Register</button>
                       </div>
                       <div className="col-md-6 registerMessage">
                        <span>Already have an account? </span>
                        <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
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
    )
}

export default withRouter(RegistrationForm);