import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { login } from '../context/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(login(result.user.reloadUserInfo));
      navigate('/');
    });
  };
  return (
    <div className='loginconatiner'>
      <h1>Welcome to Tally Counter</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
        assumenda ipsam, vel quo sunt atque veniam rerum dolor, delectus culpa
        quae laudantium ipsa provident nesciunt harum reprehenderit iure
        recusandae quod.
      </p>
      <button className='google' onClick={signInWithGoogle}>
        Sign in with google
      </button>
    </div>
  );
};

export default Login;
