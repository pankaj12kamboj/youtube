import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Sidebar } from './component/Sidebar';
import { Mynavbar } from './component/Mynavbar';
import { Mybadge } from './component/Mybadge';
import { Mycolum } from './component/Mycolum';









function App() {
  const [mainClass, setMainClass] = useState('col-md-10')
  const [isVisible, setIsVisible] = useState(true)

  const updateStatus = (value) => {
    setIsVisible(value)
  }

  useEffect(
    () => {
      if (isVisible) {
        setMainClass('col-md-10')
      }
      else {
        setMainClass('col-md-12')
      }
    }
    , [isVisible])
  return (
    <div className='row'>

      <div className='col-md-2 sidemenu'>
        <Sidebar status={isVisible} updateStatus={updateStatus} />
      </div>
      <div className={`${mainClass} mainContainer`} >
        <Mynavbar />
        <Mybadge />
        <Mycolum />
      </div>
    </div>
  );
}

export default App;
