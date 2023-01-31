import { useBearStore } from '@store/index';
import { Button } from 'antd';

function BearCounter() {
  const bears = useBearStore(state => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore(state => state.increasePopulation);
  return (
    <Button type="primary" onClick={increasePopulation}>
      one up
    </Button>
  );
}

const Home = () => {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  );
};
export default Home;
