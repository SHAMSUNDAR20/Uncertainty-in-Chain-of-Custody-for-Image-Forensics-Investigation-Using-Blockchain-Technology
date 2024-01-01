import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const nav=useNavigate();
    const submitdata = () => {
     const value={id:name,password:password};
    axios.post("http://localhost:5000/forenics/login", value).then(res=>{
        console.log(res.data)
        if(res.data!==null)
        {
            alert("success")
            setname('');
            setpassword('');
            window.localStorage.setItem("id",res.data[0])
            window.localStorage.setItem("data",JSON.stringify(res.data))
            nav("/adddata")
        }
        else
        {
            alert("failed")
        }
        
       
    })
    
    };
    return (
    <div>
        <h1>Login</h1>
            <div className="form-floating mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setname(e.target.value)}
                value={name}
                placeholder="Enter Id"
              />
              <label htmlFor="Id">Id</label>
            </div>
    
            
            <div className="form-floating mb-3 mt-3">
              <input
                type="password"
                className="form-control"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                placeholder="Enter password"
              />
              <label htmlFor="password">password</label>
            </div>
    
    
     <input
              type="submit"
              className="btn btn-primary"
              onClick={submitdata}
              style={{ width: "100%" }}
            />
            <NavLink to="/addusers">Register</NavLink>
    </div>
    )
}
 
export default Login;