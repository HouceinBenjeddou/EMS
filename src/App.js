
import { Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import ListEmployees from './pages/ListEmployees';

function App() {
  return (
      <Switch>
            <Route path="/" element={<Home />} />     
            <Route path="/list" element={<ListEmployees />} />
            <Route path="/form" element={<Form />} />
      </Switch>
  );
}

export default App;
