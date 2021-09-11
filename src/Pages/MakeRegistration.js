import './MakeRegistration.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {PulseLoader} from 'react-spinners'

function MakeRegistration() {
  const [days, setDays] = useState([]);
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const seats = useSelector((state) => state);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://trains-861bd-default-rtdb.firebaseio.com/trains.json'
      );
      const data = await response.json();
      const trainsArray = [];
      for (let key in data) {
        trainsArray.push({
          trainName: key,
          ...data[key],
        });
      }
      setTrains(trainsArray);
      setLoading(false);
    })();
  }, []);

  const changeDateFilter = (day) => {
    let newFilter = [...days];
    if (newFilter.includes(day)) {
      newFilter = newFilter.filter((existingDay) => existingDay !== day);
    } else {
      newFilter.push(day);
    }
    setDays([...newFilter]);
  };


  return (
    <div className="makeRegistrationContainer">

      {seats[0]?.train ? (
        <div className="selectedTrain">
          <p>You already chose the train</p>
          <div className="trainElement">
            <Link to={'/trains/' + seats[0].train}>
              <p className="trainDate">{seats[0].date}</p>
              <p className="trainName">{seats[0].train}</p>
            </Link>
          </div>
        </div>
      ) : (
        <>
        <div className="date">
        <p>Select a date that suits your need</p>
        <ul className="daysList">
          <li>
            <button
              className={days.includes('Mon') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Mon')}
            >
              Mon
            </button>
          </li>
          <li>
            <button
              className={days.includes('Tue') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Tue')}
            >
              Tue
            </button>
          </li>
          <li>
            <button
              className={days.includes('Wed') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Wed')}
            >
              Wed
            </button>
          </li>
          <li>
            <button
              className={days.includes('Thu') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Thu')}
            >
              Thu
            </button>
          </li>
          <li>
            <button
              className={days.includes('Fri') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Fri')}
            >
              Fri
            </button>
          </li>
          <li>
            <button
              className={days.includes('Sat') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Sat')}
            >
              Sat
            </button>
          </li>
          <li>
            <button
              className={days.includes('Sun') ? 'active' : ''}
              onClick={changeDateFilter.bind(null, 'Sun')}
            >
              Sun
            </button>
          </li>
        </ul>
      </div>
      <PulseLoader loading={loading} color='#fff' size={30} css={{display:'block',margin:'auto',width:'fit-content'}}/>
        <ul className="trains">
          {trains.map((train) => {
                if (days.includes(train.date) || days.length === 0) {
                  return (
                    <li className="trainElement" key={train.trainName}>
                      <Link to={'/trains/' + train.trainName}>
                        <p className="trainDate">{train.date}</p>
                        <p className="trainName">{train.trainName}</p>
                      </Link>
                    </li>
                  );
                }
                return null;
              })}
        </ul>
        </>
      )}
    </div>
  );
}

export default MakeRegistration;
