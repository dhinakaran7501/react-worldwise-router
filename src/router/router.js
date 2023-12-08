import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "../component/pricing/pricing";
import Product from "../component/product/product";
import Login from "../component/login/login";
import Nestedroute from "../component/nestedRoute/nestedroute";
import Countries from "../component/countries/countries";
import Homepage from "../component/homepage/homepage";
import Cities from "../component/cities/cities";
import CityDetails from "../component/cityDetails/cityDetails";
import ErrorComponent from "../component/errorComponent/errorComponent";
import Form from "../component/form/form";
import { Context } from "../Context/context";

const Router = () => {
  return (
    <div className="router">
      <Context>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nestedroute" element={<Nestedroute />}>
              <Route index element={<Cities />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:capital" element={<CityDetails />} />
              <Route path="countries" element={<Countries />} />

              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
};

export default Router;
