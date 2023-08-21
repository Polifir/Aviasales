import { format } from 'date-fns';
import styles from './Card.module.scss';

export const Card = ({ price, segments, carrier }) => {
  const {
    container,
    header,
    prise,
    logoContainer,
    logo,
    content,
    infoContainer,
    title,
    info,
  } = styles;

  const flightTime = (time) => {
    const hours = Math.floor(time / 360);
    const minets = Math.floor(time / 60);
    return `${hours}Ч ${minets}М`;
  };

  const formatDate = (date1, date2) => {
    return `${format(new Date(date1), 'kk:mm')} - ${format(
      new Date(date2),
      'kk:mm'
    )}
      `;
  };
  return (
    <div className={container}>
      <header className={header}>
        <span className={prise}>{price} Р</span>
        <div className={logoContainer}>
          <img
            className={logo}
            src={`https://pics.avs.io/99/36/${carrier}.png`}
            alt='logo'
          />
        </div>
      </header>
      <section className={content}>
        <ul className={infoContainer}>
          <li>
            <span className={title}>
              {segments[0].origin} - {segments[1].origin}
            </span>
            <span className={info}>
              {formatDate(segments[0].date, segments[1].date)}
            </span>
          </li>
          <li>
            <span className={title}>
              {segments[0].origin} - {segments[1].origin}
            </span>
            <span className={info}>
              {formatDate(segments[0].date, segments[1].date)}
            </span>
          </li>
        </ul>
        <ul className={infoContainer}>
          <li>
            <span className={title}>В пути</span>
            <span className={info}>{flightTime(segments[0].duration)}</span>
          </li>
          <li>
            <span className={title}>В пути</span>
            <span className={info}>{flightTime(segments[1].duration)}</span>
          </li>
        </ul>
        <ul className={infoContainer}>
          <li>
            <span className={title}>
              {segments[0].stops.length !== 0
                ? segments[0].stops.length + ' пересадки'
                : 'нет пересадок'}
            </span>
            <span className={info}>{segments[0].stops.join(' ')}</span>
          </li>
          <li>
            <span className={title}>
              {segments[1].stops.length !== 0
                ? segments[1].stops.length + ' пересадки'
                : 'нет пересадок'}
            </span>
            <span className={info}>{segments[1].stops.join(' ')}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
