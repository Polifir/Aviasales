import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import { featchTicketsGet } from '../../store/tickets/tickets.slice';
import { useEffect } from 'react';

export const CardCollection = () => {
  const dispatch = useDispatch();
  const { tickets, stop, idSesion } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (idSesion !== '') {
      dispatch(featchTicketsGet(idSesion));
    }
  }, [idSesion]);
  return (
    <>
      <button
        onClick={() => {
          console.log(tickets);
          dispatch(featchTicketsGet(idSesion));
        }}
      >
        getId
      </button>
      {!stop && <p>Загрузка</p>}
      {tickets ? (
        tickets.map((e, i) => {
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
        <p>Пусто</p>
      )}
    </>
  );
};
