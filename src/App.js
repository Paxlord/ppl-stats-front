import { Route, Routes, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

const App = () => {

  return(

    <div className='flex h-screen w-screen bg-blue-50/50'>

      <NavBar />

      <div className='mx-12 h-full flex-1 flex items-center justify-center'>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
    </div>

  )

}

export default App;
