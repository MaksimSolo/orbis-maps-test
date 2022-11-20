import React, {useState} from 'react';
import s from './Header.module.scss'

export const Header: React.FC = () => {
  const [demoMode, setDemoMode] = useState<boolean>(false)
  const definedDemoMode = demoMode ? 'Stop Demo' : 'Start Demo'
  const changeDemoMode = () => {
    setDemoMode(!demoMode)
  }
  return (
    <header className={s.header}>
      <div>
        <button>layer1</button>
        <button>layer2</button>
      </div>
      <span>ORBIS-MAPS-test</span>
      <button onClick={changeDemoMode}>
        {definedDemoMode}
      </button>

    </header>
  );
};
