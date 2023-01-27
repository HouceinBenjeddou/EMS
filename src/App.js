
import { Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import ListEmployees from './pages/ListEmployees';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
      <Switch>
            <Route path="/" element={<Home />} />     
            <Route path="/edit-employee" element={<ListEmployees />} />
            <Route path="/list" element={<ListEmployees />} />
            <Route path="/card" element={<EmployeeCard />} />
            <Route path="/form" element={<Form />} />
      </Switch>
  );
}

export default App;
