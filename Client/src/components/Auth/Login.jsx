import React, { useState } from 'react'
import style from '../../styles/Auth.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const Login = (props) => {
    const{setIsLoged}=props;
    const [formData,setFormData]= useState({
        email:'',
        password:'',
    });
    const [error,setError] = useState("");
    const[loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const icon =showPassword?faEyeSlash:faEye;

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try
        {
            const res = await fetch("https://luxora-backend-0gll.onrender.com/api/users/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    email:formData.email,
                    password:formData.password,
                }),
            });
            const data = await res.json();
            if(!res.ok){
                setError(data.message||"Invalid email or password");
                setFormData({...formData,password:""});
                return;
            }
            localStorage.setItem("userInfo",JSON.stringify(data));
            window.location.href="/";
        }
        catch
        {
            setError("Something went wrong")
        }
        finally
        {
            setLoading(false)
        }
    }
  return (
    <>
        <div className={style.logInContainer}>
            <div className={style.log_Title}>
                <h4>Sign In</h4>
                <div className={style.noAccount}>
                    <p>Don't have an account yet?</p>
                    <span onClick={()=>setIsLoged(prev=>!prev)}>Sign Up</span>
                </div>
            </div>
                <div className={style.logForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.formInput}>
                           <div className={style.email}><input required name='email' onChange={handleChange} placeholder='Your email address' type="email" /></div> 
                            <div className={style.password}><input required name='password' onChange={handleChange} placeholder='Password' type={showPassword?"text":"password"} /> <FontAwesomeIcon className={style.icon} onClick={()=>setShowPassword(prev=>!prev)} icon={icon}/></div>
                        </div>
                        <div className={style.formOptions}>
                            <div className={style.remember}><input type="checkbox" /><label htmlFor="">Remember me</label></div>
                            <div className={style.forgetPassword}><a href="">Forgot password?</a></div>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className={style.SignUpButton}><button disabled={loading}>{loading?"Signing in...":"Sign in"}</button></div>
                    </form>
                </div>
            
        </div>
    </>
  )
}

export default Login
