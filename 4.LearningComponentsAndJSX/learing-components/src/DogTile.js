import './DogTile.css';
import DogDescription from './DogDescription';
function DogTile(props) {
    return (
      <div className="first"> 
        <img src={props.image} />
        <h3 style={{fontSize: '20px', color: 'red'}}> {props.text} </h3>
        <DogDescription description={props.description} />
      </div>
    );
}

export default DogTile;