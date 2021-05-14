import './index.scss';
import ImageFrame from './module/ImageFrame';
import dummyData from '../dummyData';
import Galary from './module/Galary';

function App() {
  return (
    <div className="App">
      <ImageFrame images={dummyData} />
      {/* <Galary /> */}
    </div>
  );
}

export default App;
