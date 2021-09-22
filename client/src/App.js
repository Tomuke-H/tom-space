import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Things from './pages/Things';
import ComponentDemo from './pages/ComponentDemo';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path='/' component={Home}/>
            <ProtectedRoute exact path='/things' component={Things}/>
            <ProtectedRoute exact path='/components' component={ComponentDemo}/>
            <ProtectedRoute exact path='/user' component={UserPage} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route component={()=><p>react 404 path not found</p>} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
