import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Leaderboard from './components/Leaderboard/Leaderboard';
// import SortData from './components/Leaderboard/SortData';

// import CounterApp from './components/counter/CounterApp';
// import ContextProvider from './components/context-practice/ContextProvider';

import Header from './components/routing/Header'
import Profile from './components/routing/Profile'
import Home from './components/routing/Home'
import { AuthProvider } from './components/routing/Context';
import Login from './components/routing/Login';
import RequireAuth from './components/routing/RequireAuth';
import Contacts from './components/routing/Contacts'




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>  */}
         {/* <Routes>
          <Route path='/' element={<Leaderboard/>}/>
          <Route path='/rank' element={<SortData userkey='rank' value={1}/>}/>
          <Route path='/name' element={<SortData userkey='name' value={2}/>}/>
          <Route path='/age' element={<SortData userkey='age' value={3}/>}/>
          <Route path='/points' element={<SortData userkey='points' value={4}/>}/>
        </Routes> */}


        {/* <Routes>
          <Route path='/counter' element={<CounterApp/>}/>
        </Routes> */}

        
          
      {/* </BrowserRouter> */}

      {/* <ContextProvider/> */}
      

      
    <BrowserRouter>
    <AuthProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='contacts' element={<Contacts/>}/>
             {/* here Profile Route is Protected */}
            <Route path='/profile/' element={<RequireAuth><Profile/></RequireAuth>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
</AuthProvider>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
