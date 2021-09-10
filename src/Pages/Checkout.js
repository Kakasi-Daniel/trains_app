import './Checkout.css';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Input from '../Input';
import Randomstring from 'randomstring';
import actions from '../store/store';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';

function Checkout() {
  const seats = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  let code = localStorage.getItem('code');
  if (!code) {
    code = Randomstring.generate();
    localStorage.setItem('code', code);
  }

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const deleteSeatHandler = (seatID) => {
    dispatch(actions.addRemoveSeat({ id: seatID }));
  };

  if(seats.length === 0){
    history.replace('/')
  }

  return (
    <div className="checkoutWrapper">
      <Formik
        initialValues={{
          cnp: '',
          name: '',
          email: '',
        }}
        validationSchema={yup.object({
          cnp: yup
            .string()
            .matches(/^[0-9]+$/, 'CNP must be only digits')
            .min(13, 'CNP must be exactly 13 characters long')
            .max(13, 'CNP must be exactly 13 characters long')
            .required('age is required'),
          name: yup
            .string()
            .min(5, 'Minumum 5 characters')
            .max(20, 'Maximum 20 characters')
            .matches(/\s/, 'Write down all of your names')
            .required('Name is a required field!'),
          email: yup
            .string()
            .email('Invalid email!')
            .required('Email is required'),
        })}
        onSubmit={(values) => {
          (async () => {
            const data = {
              seats,
              details: { ...values },
            };
            const getData = await fetch(
              'https://trains-861bd-default-rtdb.firebaseio.com/trains/' +
                seats[0].train +
                '/wagons.json'
            );
            const wagonData = await getData.json();

            seats.forEach(seat =>{
                wagonData[seat.wagonNumber-1].availableSeats--
                wagonData[seat.wagonNumber-1].seats[seat.seatNumber-1].available=false
            })

            const postWagonData = await fetch(
                'https://trains-861bd-default-rtdb.firebaseio.com/trains/' +
                  seats[0].train +
                  '/wagons.json',
                  {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(wagonData),
                  }
              );


            const response = await fetch(
              'https://trains-861bd-default-rtdb.firebaseio.com/registrations/' +
                code +
                '.json',
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data }),
              }
            );
            dispatch(actions.clearStore());
            localStorage.removeItem('code');
            history.replace('/');
          })();
        }}
      >
        {(props) => (
          <Form>
            <h2>Book train seats</h2>
            <Input label="CNP" type="text" name="cnp" />
            <Input label="Name" type="text" name="name" />
            <Input label="E-mail" type="email" name="email" />
            <div className="unique">
              <p>{code}</p>
              <button type="button" onClick={copyCodeToClipboard}>
                Copy to clipboard
              </button>
            </div>
            <button type="submit">Save registration</button>
          </Form>
        )}
      </Formik>
      <ul className="seatsList">
        {seats.map((seat) => (
          <li>
            <p>{seat.train}</p>
            <p>Wagon number: {seat.wagonNumber}</p>
            <p>{seat.type}</p>
            <p>seat nr.: {seat.seatNumber}</p>
            <button
              className="deleteIcon"
              onClick={deleteSeatHandler.bind(null, seat.id)}
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;
