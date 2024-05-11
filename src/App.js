import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './components/Login/Index';



const router=createBrowserRouter([
  {path: '/',element:<LoginPage/>},
  {path: '/index',element:<Index/>}
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
