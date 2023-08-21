import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.scss';
import { toggleFilter } from '../../store/filters/filters.slice';
export const Filter = () => {
  const {
    container,
    title,
    inputItems,
    inputContainer,
    checkbox,
    checkInput,
    inputText,
  } = styles;
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  return (
    <section className={container}>
      <h2 className={title}>Количество пересадок</h2>
      <ul className={inputItems}>
        {filters.map((e, index) => {
          return (
            <li key={index}>
              <label className={inputContainer}>
                <input
                  className={checkInput}
                  type='checkbox'
                  checked={e.active}
                  onChange={() => dispatch(toggleFilter(e.label))}
                />
                <span className={checkbox}></span>
                <span className={inputText}>{e.name}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
