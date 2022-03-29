import { Route, Routes, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';

const App = () => {

  return(

    <div className='flex'>

      <NavBar />

      <div className='mt-12 mx-12 overflow-auto'>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
        </Routes>
      </div>
    </div>

  )

}

export default App;
