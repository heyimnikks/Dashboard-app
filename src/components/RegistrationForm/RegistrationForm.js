import React, {useState} from 'react';
import './RegistrationForm.css';
import { withRouter } from "react-router-dom";
import { useDispatch} from 'react-redux';
import register  from "../../actions";

function RegistrationForm(props) {
    //const registrationReducer = useSelector(state => state.registrationReducer);
    const dispatch = useDispatch();
    const rowStyle = {
        marginTop: "120px",
        boxShadow: "-1px 1px 50px 10px black"
      };
      const aStyle={
          borderBottom:"1px solid #f44c89",
          padding:"10px",
          textAlign:"center"
      };

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    
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
        const userDetails = { firstname, lastname, email,mobile, password,  confirmPassword};
        dispatch(register(userDetails));
        redirectToHome(); 
    }
    return(
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
                            value={firstname}
                            autoComplete="off"
                            onChange = {(event) => setFirstName(event.target.value)}
                       />
                        <label htmlFor="lastname" className ="label control-label">Last name</label>
                            <input type="lastname" 
                            className="form-control" 
                            id="lastname" 
                            placeholder="Last name" 
                            value={lastname}
                            autoComplete="off"
                            onChange = {(event) => setLastName(event.target.value)}
                       />

                            <label htmlFor="email" className ="label control-label">Email address</label>
                            <input type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                            value={email}
                            autoComplete="off"
                            onChange = {(event) => setEmail(event.target.value)}
                       />

                       <label  htmlFor="mobile" className ="label control-label">Mobile number</label>
                            <input type="mobile" 
                            className="form-control" 
                            id="mobile"  
                            placeholder="Mobile number" 
                            value={mobile}
                            autoComplete="off"
                            onChange = {(event) => setMobile(event.target.value)}
                       />


                           <label htmlFor="password" className ="label control-label">Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="password" 
                            value={password}
                            autoComplete="off"
                            onChange = {(event) => setPassword(event.target.value)}
                       />
                       <label className ="label control-label">Confirm Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="confirmPassword" 
                            value={confirmPassword}
                            autoComplete="off"
                            onChange = {(event) => setconfirmPassword(event.target.value)}
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