import './DogTile.css';
import DogDescription from './DogDescription';
function DogTile() {
    const text = "Cute puppy";
    // const customStyle = ;
    const imgUrl = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg";
    return (
      <div className="first"> 
        <img src={imgUrl} />
        <h3 style={{fontSize: '20px', color: 'red'}}> {text} </h3>
        <DogDescription />
      </div>
    );
}

export default DogTile;