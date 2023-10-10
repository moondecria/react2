import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/Index"
import { Sobre } from "./Pages/Sobre/Index"
import {Contato } from "./Pages/Contato/Index"
import { Produto } from "./Pages/Produtos/Index";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/sobre",
        element:<Sobre/>
    },
    {
        path:"/contato",
        element:<Contato/>
    },
    {
        path:"/produto",
        element:<Produto/>
    }

])
export{router};