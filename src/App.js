import {useState} from 'react';
import './css/app.css';
import letterIcon from './imgs/lostark_letter.png';
import letterImg from './imgs/letter_image_1.png';

const App = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className='mainContainer'>
      <img src={letterIcon} width={'65%'} onClick={() => setVisibility(true)} />
      <div>&nbsp;</div>
      <div className='mainText'>모험가의 편지가 도착했어요!</div>
      {isVisible ? (
        <div className='letterPopup'>
          <img src={letterImg} width={'100%'} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
