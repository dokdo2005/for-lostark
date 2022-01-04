import './css/app.css';
import letterImg from './imgs/lostark_letter.png';

function App() {
  return (
    <div className='mainContainer'>
      <img src={letterImg} width={'65%'} />
      <div>&nbsp;</div>
      <div className='mainText'>모험가의 편지가 도착했어요!</div>
    </div>
  );
}

export default App;
