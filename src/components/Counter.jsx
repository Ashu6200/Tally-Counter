import { useDispatch } from 'react-redux';
import {
  changeCounterName,
  decrementValue,
  deleteCounter,
  incrementByValue,
  incrementValue,
  resetValue,
} from '../context/counterSlice';
import { useState } from 'react';

const Counter = ({ item }) => {
  const dispatch = useDispatch();
  const [showSetValue, setShowSetValue] = useState(false);
  const [showSetName, setShowSetName] = useState(false);
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');

  const handlerChangeValue = () => {
    dispatch(incrementByValue({ id: item.id, value: Number(value) }));
    setShowSetValue(false);
  };
  const handlerChangeName = () => {
    dispatch(changeCounterName({ id: item.id, name: name }));
    setShowSetName(false);
  };
  return (
    <div className='counterWrapper'>
      <div className='counterheading'>
        <p className='counterName'>{item.countername}</p>
        <button
          className='logoutbtn'
          onClick={() => dispatch(deleteCounter({ id: item.id }))}
        >
          DeleteCounter
        </button>
      </div>
      <div className='counterValue'>
        <p className='counterName'>{item.value}</p>
      </div>
      <div className='counterbtns'>
        <button
          className='counterbtnvalue'
          onClick={() => dispatch(decrementValue({ id: item.id }))}
        >
          Decrement
        </button>
        <button
          className='counterbtnvalue'
          onClick={() => dispatch(incrementValue({ id: item.id }))}
        >
          Increment
        </button>
      </div>
      <div className='othersetting'>
        <div className=''>
          <button
            className='counterbtnvalue'
            onClick={() => dispatch(resetValue({ id: item.id }))}
          >
            Reset value
          </button>
        </div>
        <div className=''>
          {showSetValue ? (
            <div className='editsection'>
              <input
                type='number'
                name=''
                id=''
                value={value}
                placeholder='Enter the number...'
                onChange={(e) => setValue(e.target.value)}
              />
              <button className='counterbtnvalue' onClick={handlerChangeValue}>
                Set Value
              </button>
            </div>
          ) : (
            <div onClick={() => setShowSetValue(true)}>
              <div className='otherbtn'>
                <p className='counterName'>Start Value</p>
              </div>
            </div>
          )}
        </div>
        <div className=''>
          {showSetName ? (
            <div className='editsection'>
              <input
                type='text'
                name=''
                id=''
                value={name}
                placeholder='Enter the name...'
                onChange={(e) => setName(e.target.value)}
              />
              <button className='counterbtnvalue' onClick={handlerChangeName}>
                Set Name
              </button>
            </div>
          ) : (
            <div onClick={() => setShowSetName(true)}>
              <div className='otherbtn'>
                <p className='counterName'>Change Name</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
