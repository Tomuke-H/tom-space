import React, { useContext } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'


const Navbar = (props) => {
  const { user, handleLogout} = useContext(AuthContext)
  const history = useHistory();
  const { location } = props;

  const rightNavItems = () =>{
    if(user){
      return (
        <>
          <Link to='/edit_user'>
            <Menu.Item active={location.pathname === '/edit_user'} >
              EditUser
            </Menu.Item >
          </Link>
          <Menu.Item onClick={()=> handleLogout(history)}>Logout</Menu.Item>
        </>
      ) ;
    };
    return (
      <>
        <Link to='/login'>
          <Menu.Item active={location.pathname === '/login'} >
            Login
          </Menu.Item >
        </Link>
        <Link to='/register'>
          <Menu.Item active={location.pathname === '/register'} >
            Register
          </Menu.Item >
        </Link>
      </>
    )
  };

  const leftNavItems = () => {
    if(user){
      return (
        <>
          <Link to='/'>
            <Menu.Item active={location.pathname === '/'} >
              Home
            </Menu.Item >
          </Link>
          <Link to='/find_friends'>
            <Menu.Item active={location.pathname === '/find_friends'} >
              Find Friends
            </Menu.Item >
          </Link>
          <Link to='/components'>
            <Menu.Item active={location.pathname === '/components'} >
              Components
            </Menu.Item >
          </Link>
          <Link to='/user'>
            <Menu.Item active={location.pathname === '/user'} >
              {user.name}
            </Menu.Item >
          </Link>
        </>
      )
    };
    return (
      <>
        <Link to='/'>
          <Menu.Item active={location.pathname === '/'} >
            Home
          </Menu.Item >
        </Link>
      </>
    )
  }

  return(
    <Menu>
      <Menu.Menu position="left">{leftNavItems()}</Menu.Menu>
      <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
    </Menu>
  );
}

export default withRouter(Navbar)