import { useSelector } from 'react-redux';
import AddCounter from '../components/AddCounter';
import Header from '../components/Header';
import Counter from '../components/Counter';

const Home = () => {
  const counter = useSelector((state) => state.counter.counters);
  return (
    <>
      <Header />
      <div className='homeWrapper'>
        <div className='homeContainer'>
          <div className='countersection'>
            {counter.map((counter) => {
              return <Counter key={counter.id} item={counter} />;
            })}
          </div>
          <AddCounter />
        </div>
      </div>
    </>
  );
};

export default Home;
