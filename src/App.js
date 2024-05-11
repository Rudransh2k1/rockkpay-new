import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/Login';
import Dashboard from './common/Dashboard';
import Navbar from './common/Navbar';
import CreateComissionAdmin from './components/admin/commission/CreateComissionAdmin';
import SideDrawer from './components/Layout/SideDrawer';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <LoginPage />
     */}
   
    {/* <Navbar /> */}
  
    {/* <CreateComissionAdmin />
     */}
    <SideDrawer />
    {/* <Dashboard /> */}
    {/* <Routing /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
