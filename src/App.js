import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/Login';
import Dashboard from './common/Dashboard';
import Navbar from './common/Navbar';

function App() {
  return (
    <div className="App">
    {/* <LoginPage />
     */}
     <Dashboard />
    <Navbar />
    </div>
  );
}

export default App;
