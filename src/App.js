import './css/app.css';
import mainImage from './imgs/main_img.jpeg';

function App() {
  return (
    <div className='mainContainer'>
      <img src={mainImage} width={500} />
      <div>&nbsp;</div>
      <div>아직 준비중이에요!</div>
    </div>
  );
}

export default App;
