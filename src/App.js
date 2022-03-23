//import logo from './logo.svg';
import './App.css';
import FifthComponent from './fifth';
import FirstComponent from './first';
import FourthComponent from './fourth';
import SecondComponent from './second';
import ThirdComponent from './third';

function App() {
  return (
    <div className='main' >
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <SecondComponent/>
      <ThirdComponent />
      <ThirdComponent />
      <FifthComponent/>
    </div>
  );
}

export default App;
