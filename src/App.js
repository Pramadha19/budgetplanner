import logo from './logo.svg';
import './App.css';
import LandingScreen from './screens/LandingScreen';
import { createContext, useState } from 'react';
import BudgetContext from './components/BudgetContext';

function App() {
  const totalBudget = 2000;
  const [totalSpend, setTotalSpend] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <BudgetContext.Provider value={{totalBudget,totalSpend,setTotalSpend, expenses,setExpenses}}>
       <div id="logo-container">
        <img src={'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/71-512.png'} alt="Logo" />
      </div>
      <LandingScreen/>
    </BudgetContext.Provider>
  );
}

export default App;