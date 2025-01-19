import ModalWnd from './components/Modal/ModalWnd';
import { useState } from 'react';

function App() {

  const [modalState, setModalState] = useState(false);
  const handDelete = () => {
    console.log('Запис видален!');
    setModalState(false);
  };
  return (
    <div className="App">
      <ModalWnd call={modalState} onDestroy={()=> setModalState(false)}
        onAccept = {handDelete}/>
      <button onClick={() => setModalState(true)}>MODAL WINDIW</button>
    </div>
  );
}

export default App;
