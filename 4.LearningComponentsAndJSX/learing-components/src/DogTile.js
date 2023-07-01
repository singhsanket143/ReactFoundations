import './DogTile.css';
import DogDescription from './DogDescription';
function DogTile() {

    
    return (
      <div className="first"> 
        <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" />
        <h3> Cute Puppy </h3>
        <DogDescription />
      </div>
    );
}

export default DogTile;