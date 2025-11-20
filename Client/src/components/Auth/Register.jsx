import React from 'react'
import { useState } from 'react';
import style from '../../styles/Auth.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const Register = (props) => {
    const {setIsLoged}=props;
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:'',
        password:'',
        confirmPassword:'',
    });
    const [error,setError]=useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const icon =showPassword?faEyeSlash:faEye;


    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(formData.password!==formData.confirmPassword){
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        try
        {
            const res = await fetch("https://luxora-backend-0gll.onrender.com/api/users/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    name:`${formData.firstName} ${formData.lastName}`,
                    email:formData.email,
                    password:formData.password,
                }),
            });
            const data = await res.json();
            if(!res.ok){
                setError(data.message||"Registration failed");
                return;
            }
            localStorage.setItem("userInfo",JSON.stringify(data));
            setIsLoged(true);
        }
        catch
        {
            setError("Something went wrong")
        }
        finally{
            setLoading(false);
        }
    };
  return (
    <>
         <div className={style.logInContainer}>
                    <div className={style.log_Title}>
                        <h4>Sign Up</h4>
                        <div className={style.noAccount}>
                            <p>Already have an account</p>
                            <span onClick={()=>setIsLoged(prev=>!prev)}>Sign in</span>
                        </div>
                    </div>
                        <div className={style.logForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={style.formInput}>
                                    <div className={style.nameContainer}>
                                        <div className={style.Fname}><input required name='firstName' onChange={handleChange} placeholder='First Name' type="text" /></div>           
                                        <div className={style.Lname}><input required name='lastName' onChange={handleChange} placeholder='Last Name' type='text'/></div>           
                                    </div>
                                    <div className={style.email}><input required name='email' onChange={handleChange} placeholder='Email address' type="email" /></div>
                                    <div className={style.password}><input required name='password' onChange={handleChange} placeholder='Password' type={showPassword?"text":"password"}/><FontAwesomeIcon className={style.icon} onClick={()=>setShowPassword(prev=>!prev)} icon={icon}/></div>
                                    <div className={style.password}><input required name='confirmPassword' onChange={handleChange} placeholder='Confirm password' type="password" /></div>
                                </div>
                               {error && <p style={{color: "red"}}>{error}</p>}
                                <div className={style.SignUpButton}><button disabled={loading}>{loading?"Creating account...":"Sign Up"}</button></div>
                            </form>
                        </div>
                    
                </div>
    </>
  )
}

export default Register
