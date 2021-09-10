import './Wagon.css';
import Seat from './Seat';

function Wagon(props) {

  let availableSeats;

  let endingIndex = 0;


  const consecutivePlaces = () =>{
    let maxConsecutive = 0;
    let currentConsecutive = 0;
    
    for(let i = 0;i<props.seats.length;i++){
      if(props.seats[i].available){
        currentConsecutive++;
        if(currentConsecutive > maxConsecutive){
          maxConsecutive =  currentConsecutive;
          endingIndex = i;
          if(maxConsecutive===props.minimumSeats){
            return maxConsecutive;
          }
        }
      }else{
        currentConsecutive = 0;
      }
    }

    return false;
  }

  const checkIfCircled = () =>{
    const totalSeats = consecutivePlaces()
    if(totalSeats && endingIndex){
      return endingIndex - totalSeats;
    }else{
      return false;
    }
  }


  if(props.minimumSeats === ''){
    availableSeats = ''
  }else if(consecutivePlaces() <props.minimumSeats){
    availableSeats = 'opacityReduced'
  }

  return (
    <div className={'wagon' + ' ' + props.type.replace(/ /g, '') + ' ' + availableSeats}>
      <p className="wagonType">{props.type}</p>
      {props.seats.map((seat,index) => (
        <Seat
          wagonNumber={props.numberOfWagon}
          key={`${props.trainName}${props.numberOfWagon}${seat.seatNumber}`}
          seatID={`${props.trainName}${props.numberOfWagon}${seat.seatNumber}`}
          available={seat.available}
          number={seat.seatNumber}
          type={props.type}
          date={props.date}
          trainName={props.trainName}
          circled={props.minimumSeats !== '' ? ((checkIfCircled() !==false && index>=checkIfCircled() && index <= endingIndex) ? ' circled' : '') : ''}
        />
      ))}
    </div>
  );
}

export default Wagon;
