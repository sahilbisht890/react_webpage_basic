

import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../home";
import About from "../about";
import Service from "../services";
import Blog from "../blog";

export default function Main()
{
    return <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='services' element={<Service/>}/>
                <Route path='blog' element={<Blog/>}/>

            </Route>
        </Routes>
       </BrowserRouter>
    </>
}
