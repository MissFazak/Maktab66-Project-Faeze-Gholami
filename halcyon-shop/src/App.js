import "./assets/css/main.scss";
import { Route, Routes } from "react-router-dom";
import {Provider} from "react-redux"
import { store } from "./redux";
import HomePage from "./layout/HomePage";
import Dashboard from "./layout/Dashboard";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import ManagePage from "./pages/ManagePage"
import ManageOfSP from "./pages/ManageOfSP"
import OrderPage from "./pages/OrderPage"
import MainPage from "./components/MainPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="manage-page" element={<ManagePage/>}/>
          <Route path="manage-of-sp" element={<ManageOfSP/>}/>
          <Route path="order-page" element={<OrderPage/>}/>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
