import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import styles from './CardCollection.module.scss';
import {
  featchIdSession,
  featchTicketsGet,
} from '../../store/tickets/tickets.slice';
import { useEffect, useState } from 'react';
import { filterTicketsTransfer } from './filterTicketsTransfer';
import { filterPrimaryTickets } from './filterPrimaryTickets';

export const CardCollection = () => {
  const { button } = styles;
  const { tickets, stop, idSesion } = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filter);
  const filtersPrimary = useSelector((state) => state.filterPrimary);
  const [viewTicketsCount, setViewTicketsCount] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchIdSession());
  }, []);
  useEffect(() => {
    if (idSesion && !stop) {
      dispatch(featchTicketsGet(idSesion));
    }
  }, [idSesion, tickets]);

  const ticketsRes = filterPrimaryTickets(
    filterTicketsTransfer(tickets, filters),
    filtersPrimary
  );

  return (
    <>
      {ticketsRes.length !== 0 ? (
        ticketsRes.slice(0, viewTicketsCount).map((e, i) => {
          return (
            <Card
              key={i}
              price={e.price}
              segments={e.segments}
              carrier={e.carrier}
            />
          );
        })
      ) : (
        <p className={button}>Нет билетов</p>
      )}
      {ticketsRes.length !== 0 && (
        <button
          className={button}
          onClick={() => setViewTicketsCount(viewTicketsCount + 5)}
        >
          Показать больше билетов
        </button>
      )}
    </>
  );
};
