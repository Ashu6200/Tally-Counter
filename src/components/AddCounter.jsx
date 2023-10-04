import { useDispatch } from 'react-redux';
import { addCounter } from '../context/counterSlice';
import { v4 as uuidv4 } from 'uuid';

const AddCounter = () => {
  const dispatch = useDispatch();
  const HandlerAddCounter = () => {
    dispatch(
      addCounter({
        id: uuidv4(),
        countername: 'counter',
        value: 0,
      })
    );
  };
  return (
    <div className='addWrapper'>
      <button onClick={HandlerAddCounter} className='addcounterBtn'>
        Add Counter
      </button>
    </div>
  );
};

export default AddCounter;
