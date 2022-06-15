import './App.scss';
import NavBar from './components/NavBar';
import Accounts from './components/Accounts';
import Main from './components/Main';
import SendMoney from './components/SendMoney';

import { FintechProvider } from './FintechContext';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import Advertising from './components/Advertising';

function App() {
  return (
    <FintechProvider>
      <div className="App">
        <NavBar />
        <div className="App__accounts">
          <Accounts />
          <Advertising />
        </div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SendMoney' element={< SendMoney />} />
          <Route path='/TopUp' element={< ComingSoon />} />
          <Route path='/Accouts' element={< ComingSoon />} />
        </Routes>
      </div>
    </ FintechProvider>
  );
}

export default App;
