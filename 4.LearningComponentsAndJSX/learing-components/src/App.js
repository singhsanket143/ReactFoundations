import './App.css';
import DogTile from './DogTile';


function App() {
  return (
    <section className='puppy'>
      <DogTile description="d1" text="puppy1" image="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVwcHl8ZW58MHx8MHx8f" />
      <DogTile description="d2" text="puppy2" image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" />
      <DogTile description="d3" text="puppy3" image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" />
      <DogTile description="d4" text="puppy4" image="https://www.shutterstock.com/image-photo/small-cute-puppy-maltese-dog-260nw-1735724201.jpg" />
      <DogTile description="d4" text="puppy4" image="https://www.shutterstock.com/image-photo/small-cute-puppy-maltese-dog-260nw-1735724201.jpg"> 
        <p>This is children prop</p>
      </DogTile>
    </section>
  );
}

export default App;
