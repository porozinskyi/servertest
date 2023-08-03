import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import HomeCSS from "../CSS/HomeCSS.jsx";
import HomeJS from "../JS/HomeJS.jsx";
import HTMLRoutes from "./HTMLRoutes.jsx";
import { Helmet } from "react-helmet";


const RouteController = () =>{
    return(
        <>
        <Helmet>
            <title>Головна</title>
        </Helmet>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/css'} element={<HomeCSS/>}/>
            <Route path={'/js'} element={<HomeJS/>}/>
        </Routes>
        <HTMLRoutes/>
        </>
    );
};

export default RouteController;