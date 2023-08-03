import { Route, Routes } from "react-router-dom";
import HomeHTML from "../HTML/HomeHTML.jsx";
import HelloHTML from "../HTML/HelloHTML/HelloHTML.jsx";
import Tags from "../HTML/Tags/Tags.jsx";
import Attributes from "../HTML/Attributes/Attributes.jsx";
import CreatePage from "../HTML/CreatePage/CreatePage.jsx";


const HTMLRoutes = () =>{
    return(
        <>
        <Routes>
            <Route path={'/html'} element={<HomeHTML/>}/>
            <Route path={'/html/hello'} element={<HelloHTML/>}/>
            <Route path={'/html/tags'} element={<Tags/>}/>
            <Route path={'/html/attributes'} element={<Attributes/>}/>
            <Route path={'/html/create_page'} element={<CreatePage/>}/>
        </Routes>
        </>
    );
};

export default HTMLRoutes;