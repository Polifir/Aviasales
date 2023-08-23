import classNames from 'classnames';
import styles from './NavBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilterPrimary } from '../../store/filtersPrimary/filtersPrimary.slice';

export const NavBar = () => {
  const { container, button, active } = styles;
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filterPrimary);
  return (
    <ul className={container}>
      {filters.map((e) => {
        return (
          <li key={e.idx}>
            <button
              className={classNames(button, [e.active ? active : ''])}
              onClick={() => dispatch(toggleFilterPrimary(e.idx))}
            >
              {e.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
