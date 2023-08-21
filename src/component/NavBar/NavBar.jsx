import classNames from 'classnames';
import styles from './NavBar.module.scss';

export const NavBar = () => {
  const { container, button, active } = styles;
  return (
    <ul className={container}>
      <li>
        <button className={classNames(button, active)}>самый дешевый</button>
      </li>
      <li>
        <button className={button}>самый быстрый</button>
      </li>
      <li>
        <button className={button}>оптимальный</button>
      </li>
    </ul>
  );
};
