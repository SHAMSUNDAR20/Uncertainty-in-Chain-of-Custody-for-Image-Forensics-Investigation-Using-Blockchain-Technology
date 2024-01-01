
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updateusers = () => {
var rx=0;
const {state}=useLocation();
const [uid, setuid] = useState(state[rx++]);
const [name, setname] = useState(state[rx++]);
const [email, setemail] = useState(state[rx++]);
const [password, setpassword] = useState(state[rx++]);
const [addresss, setaddresss] = useState(state[rx++]);
const [keydata, setkeydata] = useState(state[rx++]);
const submitdata = () => {
 const value={uid:uid,name:name,email:email,password:password,addresss:addresss,keydata:keydata};
axios.post("http://localhost:5000/forenics/updateusers", value).then
    (response=>{
      window.location.replace('/viewusers')
    })};
return (
<div>
    <h1>Add users</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setuid(e.target.value)}
            value={uid}
            placeholder="Enter uid"
          />
          <label htmlFor="uid">uid</label>
        </div>

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
            type="text"
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
export default Updateusers;
