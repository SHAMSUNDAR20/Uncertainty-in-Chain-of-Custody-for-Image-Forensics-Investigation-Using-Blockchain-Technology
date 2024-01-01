import Updatedata from "./updatedata";
import Viewdata from "./viewdata";
import Adddata from "./adddata";
import Updatetransactiondata from "./updatetransactiondata";
import Viewtransactiondata from "./viewtransactiondata";
import Addtransactiondata from "./addtransactiondata";
import Updateusers from "./updateusers";
import Viewusers from "./viewusers";
import Addusers from "./addusers";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return ( <>
        <Routes>
        <Route path="/updatedata" element={<Updatedata/>} />
        <Route path="/viewdata" element={<Viewdata/>} />
        <Route path="/adddata" element={<Adddata/>} />
        <Route path="/updatetransactiondata" element={<Updatetransactiondata/>} />
        <Route path="/viewtransactiondata" element={<Viewtransactiondata/>} />
        <Route path="/addtransactiondata" element={<Addtransactiondata/>} />
        <Route path="/updateusers" element={<Updateusers/>} />
        <Route path="/viewusers" element={<Viewusers/>} />
        <Route path="/addusers" element={<Addusers/>} />
        <Route path="/" element={<Login/>} />
        </Routes>
    </> );
}
 
export default App;