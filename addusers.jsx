
import axios from "axios";
import { useState } from "react";
const Addusers = () => {
const [name, setname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [addresss, setaddresss] = useState('');
const [keydata, setkeydata] = useState('');
const submitdata = () => {
 const value={name:name,email:email,password:password,addresss:addresss,keydata:keydata};
axios.post("http://localhost:5000/forenics/insertusers", value)
.then(res=>{
alert("success")
setname('');
setemail('');
setpassword('');
setaddresss('');
setkeydata('');
})
};
return (
<div>
    <h1>Register users</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setname(e.target.value)}
            value={name}
            placeholder="Enter name"
          />
          <label htmlFor="name">name</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter email"
          />
          <label htmlFor="email">email</label>
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

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setaddresss(e.target.value)}
            value={addresss}
            placeholder="Enter addresss"
          />
          <label htmlFor="addresss">addresss</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setkeydata(e.target.value)}
            value={keydata}
            placeholder="Enter keydata"
          />
          <label htmlFor="keydata">keydata</label>
        </div>

 <input
          type="submit"
          className="btn btn-primary"
          onClick={submitdata}
          style={{ width: "100%" }}
        />
</div>
)
}
export default Addusers;
