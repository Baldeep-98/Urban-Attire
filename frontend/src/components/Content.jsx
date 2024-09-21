import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
const NotFound=()=><h1>Page Not found</h1>
function Content(){
    return(
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="*" element={<NotFound/>}/>
</Routes>
    );
}
export default Content;