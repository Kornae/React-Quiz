import React from "react";
import Home from "./Home";
import { Data, dataLoader } from "./Data";

import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from "react-router-dom";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/data" element={<Data />} loader={dataLoader} />

      </Route>
    )
  )

  return (

    <div>

      <RouterProvider router={router} />


    </div>
  );
}

const Root = () => {
  return <>
    <div>
      <Link to='/'> </Link>
      <Link to='/data'></Link>
    </div>

    <div>
      <Outlet />
    </div>
  </>
}

export default App;
