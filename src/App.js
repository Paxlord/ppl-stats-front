import { Route, Routes, Link } from 'react-router-dom';

const App = () => {

  return(

    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<h2>Home</h2>}/>
        <Route path='/dashboard' element={<h2>Dashboard</h2>}/>
        <Route path='*' element={<h2>404</h2>}/>
      </Routes>
    </div>

  )

}

export default App;
