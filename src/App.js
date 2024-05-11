import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './components/Login/Index';
import Whitelist from './common/Admin/IpWhitelist';
import ProviderTypes from './common/Admin/Providertypes';
import SmsLogs from './common/Admin/Smslogs';



// const router = createBrowserRouter([
//   { path: '/', element: <LoginPage /> },
//   { path: '/index', element: <Index /> }
// ])

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      {/* <Whitelist /> */}
      {/* <ProviderTypes /> */}
      <SmsLogs />
    </div>
  );
}

export default App;
