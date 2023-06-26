import Home from './routes/home/home.route';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.route';
import Authentication from './routes/authentication/authentication.route';

function App() {

  return(
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}></Route>
          <Route path='auth' element={<Authentication/>}/>
        </Route>
      </Routes>
    ) 
}

export default App;