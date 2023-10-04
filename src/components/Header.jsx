import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../context/authSlice';

const Header = () => {
  const isUser = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const signUserOut = () => {
    dispatch(logout());
  };
  return (
    <div className='headerWrapper'>
      <div className='headerContainer'>
        <p className='logo'>Tally Counter</p>
        <div>
          <div className='headerAuth'>
            <p className='logo'>Hi {isUser.displayName}</p>
            <button className='logoutbtn' onClick={signUserOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
