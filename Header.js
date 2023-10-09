import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import AuthContext from '../Store/auth-context';
const Header = () => {
  const navigate=useNavigate();
  const authCtx=useContext(AuthContext);
  const isLoggedIn=authCtx.isLoggedIn;
  console.log(isLoggedIn);
  const logoutHandler=(event)=>{
    event.preventDefault();
    authCtx.logout();
    navigate('/Login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background:'grey',fontStyle:'italic',fontWeight:'bold'}}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {!isLoggedIn && <li className="nav-item active">
        <Link to='/Login' className="nav-link" href="#">Login <span className="sr-only">(current)</span></Link>
      </li>
      }
      {isLoggedIn &&  <li className="nav-item">
        <Link to='/Profile' className="nav-link" href="#">Profile</Link>
      </li>}
     
     {isLoggedIn && <li className="nav-item">
        <button type='submit' className="nav-link disabled" style={{fontStyle:'italic',fontWeight:'bold',background:'grey',border:'2px solid grey'}} onClick={logoutHandler}>Logout</button>
      </li>}
      
    </ul>
   
  </div>
</nav>
  )
}

export default Header
