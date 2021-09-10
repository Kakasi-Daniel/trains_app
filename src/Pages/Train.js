import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Wagon from '../Wagon';
import { useSelector } from 'react-redux';
import './Train.css';

function Train() {
  const [wagons, setWagons] = useState([]);
  const params = useParams();
  const [type, setType] = useState('all');
  const [minimumSeats, setMinimumSeats] = useState('');
  const date = useRef('day');
  const seats = useSelector((state) => state);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://trains-861bd-default-rtdb.firebaseio.com/trains/' +
          params.trainID +
          '.json'
      );
      const data = await response.json();

      date.current = data.date;

      setWagons([...data.wagons]);
    })();
  }, []);

  const typeChangedHandler = (e) => {
    setType(e.target.value);
  };

  const minimumSeatsChangeHandler = (e) => {
    const number = parseInt(+e.target.value);

    if (number >= 2 && number <= 6) {
      setMinimumSeats(number);
    } else if (e.target.value === '') {
      setMinimumSeats(e.target.value);
    }
  };

  return (
    <div className="wagonsWrapper">
      <div className="wagonsFilters">
        <select
          onChange={typeChangedHandler}
          className="wagonTypeSelector"
          name="WagonType"
        >
          <option defaultValue value="all">
            All
          </option>
          <option value="first class">First Class</option>
          <option value="second class">Second Class</option>
          <option value="sleeping">Sleeping</option>
        </select>
        <label className="minimumSeatsWrapper" htmlFor="minimumSeats">
          Available consecutive seats:
          <input
            value={minimumSeats}
            onChange={minimumSeatsChangeHandler}
            type="number"
            id="minimumSeats"
            className="minimumSeats"
            min="2"
            max="6"
          />
        </label>
      </div>
      <div className="legendWrapper">
        <p>Seat color legend:</p>
        <div className="legend">
          <div className="legendItem">
            <div className="legendColor"></div>
            - available
          </div>
          <div className="legendItem">
            <div className="legendColor unavailable"></div>
            - unavailable
          </div>
          <div className="legendItem">
            <div className="legendColor selected"></div>
            - selected
          </div>
        </div>
      </div>
      <div className="wagons">
        {wagons.map((wagon, index) => {
          if (type === 'all') {
            return (
              <Wagon
                date={date.current}
                trainName={params.trainID}
                numberOfWagon={index + 1}
                key={index}
                availableSeatsNumber = {wagon.availableSeats}
                seats={wagon.seats}
                type={wagon.type}
                minimumSeats={minimumSeats}
              />
            );
          } else if (wagon.type === type) {
            return (
              <Wagon
                date={date.current}
                trainName={params.trainID}
                numberOfWagon={index + 1}
                key={index}
                availableSeatsNumber = {wagon.availableSeats}
                seats={wagon.seats}
                type={wagon.type}
                minimumSeats={minimumSeats}
              />
            );
          }
        })}
      </div>
      {seats.length === 0 ? (
        <p className="selectSeat">Select a seat in order to reserve it.</p>
      ) : (
        <Link className="routerLink trainsLink" to="/checkout" replace>
          Go to checkout &gt;
        </Link>
      )}
    </div>
  );
}

export default Train;
