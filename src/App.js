import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ItemForm from './components/ItemForm';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Styled from 'styled-components';


const Header = Styled.header`
  position: absolute;
  background-color: #2E3842;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header-title{
    width: 50%;
    padding: 0 2%;
  }

  a{
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
  }
`

const Nav = Styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`

function App() {
  
  return (
    <Router>

      <Header>
        <Link to='/' className='header-title'>AFRICAN MARKETPLACE</Link>

        <Nav className='links'>
          <Link to='/login'>LOGIN</Link>
          <Link to='/signup'>SIGNUP</Link>
          <Link to='/logout'>LOGOUT</Link>
          <Link to='/item-form'>ADD ITEM</Link>
          <Link to='/profile'>PROFILE</Link>
        </Nav>

      </Header>

      <Switch>
        <ProtectedRoute path='/logout' component={Logout}/>
        <ProtectedRoute path='/item-form' component={ItemForm}/>
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
