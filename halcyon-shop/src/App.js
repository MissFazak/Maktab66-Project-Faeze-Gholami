import "./assets/css/main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./layout/HomePage";
import Dashboard from "./layout/Dashboard";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import ManagePage from "./pages/ManagePage";
import ManageOfSP from "./pages/ManageOfSP";
import OrderPage from "./pages/OrderPage";
import MainPage from "./components/MainPage";
import ListOfBrands from "./pages/ListOfBrands";
import SingleBrands from "./pages/SingleBrands";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "./redux/productSlice";
import Mobile from "./pages/Mobile";
import { fetchCategory } from "./redux/categorySlice";
import { stateSelector } from "./redux/stateSlice";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import OrderForm from "./pages/OrderForm";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <div className="container">
      <Routes>
       
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<MainPage />} />
            {items.map((item, index) => (
                <Route
                  path={`/mobile/${item.id}`}
                  element={<Mobile />}
                  key={index}
                />
              ))}
            <Route path="login" element={<PublicRoute/>}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/cart-page" element={<CartPage />} />
            <Route path="/order" element={<OrderForm/>}/>
            <Route path="/list-brands" element={<ListOfBrands />}>
              {items.map((item, index) => (
                <Route
                  path="/list-brands/brands"
                  element={<SingleBrands />}
                  key={index}
                />
              ))}
            </Route>
          </Route>
       
    
          <Route path='/' element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="manage-page" element={<ManagePage />} />
              <Route path="manage-of-sp" element={<ManageOfSP />} />
              <Route path="order-page" element={<OrderPage />} />
            </Route>
          </Route>
       
      </Routes>
    </div>
  );
}

export default App;
