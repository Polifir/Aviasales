import styles from './App.module.scss';

import logo from '../../assets/Logo.png';
import { NavBar } from '../NavBar/NavBar';
import { Filter } from '../Filter/Filter';
import CardCollection from '../CardCollection';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

function App() {
  const { container, main, rightContent } = styles;
  const { stop } = useSelector((state) => state.tickets);

  return (
    <section className={container}>
      <header>
        <img src={logo} alt='logo' />
      </header>
      <main className={main}>
        <Filter />
        <div className={rightContent}>
          <NavBar />
          {!stop && <Spin />}
          <CardCollection />
        </div>
      </main>
    </section>
  );
}

export default App;
