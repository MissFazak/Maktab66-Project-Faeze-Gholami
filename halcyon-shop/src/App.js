import './assets/css/main.scss'
import { Route, Routes } from "react-router-dom"
import HomePage from './layout/HomePage';
import Dashboard from './layout/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
