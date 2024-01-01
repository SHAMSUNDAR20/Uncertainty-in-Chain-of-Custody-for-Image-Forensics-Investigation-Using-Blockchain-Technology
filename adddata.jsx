
import axios from "axios";
import { useState } from "react";
const Adddata = () => {

const [caseid, setcaseid] = useState('');
const data=JSON.parse(window.localStorage.getItem("data"));

const [file, setFile] = useState('');
function handleChange(event) {
  setFile(event.target.files[0]);
}
function handleSubmit(event) {
  event.preventDefault();
  const url = "http://localhost:5000/forenics/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  formData.append("caseid",caseid)
  formData.append("address",data[4])
  formData.append("private",data[5])
  formData.append("uid",data[0])

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
    alert("uploaded");
    // setcaseid("")
    // setFile("")
  });
}

return (
<div>
    <h1>Upload data</h1>
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
    <div className="form-floating mb-3 mt-3">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleChange} className="form-control" />

          <button type="submit" className="btn btn-primary">Upload</button>
        </form>

        
      </div>

        {/* <div className="form-floating mb-3 mt-3">
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
        </div> */}

       

 
</div>
)
}
export default Adddata;
