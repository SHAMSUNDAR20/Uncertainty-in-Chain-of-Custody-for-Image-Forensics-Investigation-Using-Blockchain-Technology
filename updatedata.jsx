
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updatedata = () => {
var rx=0;
const {state}=useLocation();
const [did, setdid] = useState(state[rx++]);
const [filename, setfilename] = useState(state[rx++]);
const [codeid, setcodeid] = useState(state[rx++]);
const [keyvalue, setkeyvalue] = useState(state[rx++]);
const [caseid, setcaseid] = useState(state[rx++]);
const submitdata = () => {
 const value={did:did,filename:filename,codeid:codeid,keyvalue:keyvalue,caseid:caseid};
axios.post("http://localhost:5000/forenics/updatedata", value).then
    (response=>{
      window.location.replace('/viewdata')
    })};
return (
<div>
    <h1>Add data</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setdid(e.target.value)}
            value={did}
            placeholder="Enter did"
          />
          <label htmlFor="did">did</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setfilename(e.target.value)}
            value={filename}
            placeholder="Enter filename"
          />
          <label htmlFor="filename">filename</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setcodeid(e.target.value)}
            value={codeid}
            placeholder="Enter codeid"
          />
          <label htmlFor="codeid">codeid</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setkeyvalue(e.target.value)}
            value={keyvalue}
            placeholder="Enter keyvalue"
          />
          <label htmlFor="keyvalue">keyvalue</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setcaseid(e.target.value)}
            value={caseid}
            placeholder="Enter caseid"
          />
          <label htmlFor="caseid">caseid</label>
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
export default Updatedata;
