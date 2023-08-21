import styles from './App.module.scss';

import logo from '../../assets/Logo.png';
import { NavBar } from '../NavBar/NavBar';
import { Filter } from '../Filter/Filter';
import CardCollection from '../CardCollection';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { featchIdSession } from '../../store/tickets/tickets.slice';

function App() {
  const { container, main, rightContent } = styles;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchIdSession());
  }, [dispatch]);

  return (
    <section className={container}>
      <header>
        <img src={logo} alt='logo' />
      </header>
      <main className={main}>
        <Filter />
        <div className={rightContent}>
          <NavBar />
          <CardCollection />
        </div>
      </main>
    </section>
  );
}

export default App;
