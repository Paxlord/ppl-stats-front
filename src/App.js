import { Route, Routes, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import UsersPage from './components/UsersPage';
import UserProfilePage from './components/UserProfilePage';

const App = () => {

  return(

    <div className='flex h-screen w-screen bg-blue-50/50'>

      <NavBar />

      <div className='mx-12 h-full flex-1 flex items-stretch'>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/users" element={<UsersPage />}/>
          <Route path="/user/:id" element={<UserProfilePage />}/>
        </Routes>
      </div>
    </div>

  )

}

export default App;
