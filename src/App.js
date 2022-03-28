import { Route, Routes, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';

const App = () => {

  return(

    <div className='h-screen w-screen'>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
    </div>

  )

}

export default App;
