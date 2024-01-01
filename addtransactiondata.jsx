
import axios from "axios";
import { useState } from "react";
const Addtransactiondata = () => {
const [trandata, settrandata] = useState('');
const [uid, setuid] = useState('');
const [did, setdid] = useState('');
const [transcation, settranscation] = useState('');
const [alltrans, setalltrans] = useState('');
const [trandate, settrandate] = useState('');
const submitdata = () => {
 const value={trandata:trandata,uid:uid,did:did,transcation:transcation,alltrans:alltrans,trandate:trandate};
axios.post("http://localhost:5000/forenics/inserttransactiondata", value);
alert("success")
settrandata('');
setuid('');
setdid('');
settranscation('');
setalltrans('');
settrandate('');
};
return (
<div>
    <h1>Add transactiondata</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => settrandata(e.target.value)}
            value={trandata}
            placeholder="Enter trandata"
          />
          <label htmlFor="trandata">trandata</label>
        </div>

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
            onChange={(e) => settranscation(e.target.value)}
            value={transcation}
            placeholder="Enter transcation"
          />
          <label htmlFor="transcation">transcation</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setalltrans(e.target.value)}
            value={alltrans}
            placeholder="Enter alltrans"
          />
          <label htmlFor="alltrans">alltrans</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => settrandate(e.target.value)}
            value={trandate}
            placeholder="Enter trandate"
          />
          <label htmlFor="trandate">trandate</label>
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
export default Addtransactiondata;
