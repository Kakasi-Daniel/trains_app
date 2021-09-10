import './Seat.css';
import {useSelector,useDispatch} from 'react-redux'
import actions from './store/store'
import {useEffect} from 'react';

function Seat(props) {


    const dispatch = useDispatch();
    const reservation = useSelector(state => state)

   

    const addSeatHandler = () =>{

        const seat = {
            id: props.seatID,
            train: props.trainName,
            wagonNumber: props.wagonNumber,
            type: props.type,
            seatNumber: props.number,
            date:props.date
        }

        dispatch(actions.addRemoveSeat(seat))
    }

    const ids = reservation.map(seat => seat.id)

    if(!props.available){
       return <div className='seat unavailable'>{props.number}</div>
        
    }

  return <div onClick={addSeatHandler} className={`seat${ids.includes(props.seatID) ? ' selected' : ''}${props.circled}`}>{props.number}</div>;
}

export default Seat;
