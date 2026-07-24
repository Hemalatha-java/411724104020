// import First from "./First";
// import Second from "./Second";
// import Parent from "./Parent";
// import Page from "./pages/Page";
// // import Heading from "./atoms/Heading";
import Leraning from "./Counter";
import {Add,Multiply,Divide} from './Math';
import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
    return (
        <>
         
        <Navbar/>
        <Routes>
            <Route path='/Counter' element={<Leraning/>}/>
            <Route path='*' element={<h1>Incorrect path</h1>}/>
            <Route path="/Add" element={<Add/>}/>
            <Route path="/Multiply" element={<Multiply/>}/>
            <Route path="/Subtract" element={<Subtract/>}/>
        </Routes>
       
         
        </>
    );
}
