import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Results from "../views/Results";
import Detail from "../views/Detail";

const RoutesComponents = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/results/:title" element = {<Results/>} />
            <Route path="/detail/:id" element = {<Detail/>} />
        </Routes>
    </BrowserRouter>
)

export default RoutesComponents