import './App.css';
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


function Chord({ index, chord } ){
  return (
    <div key={index} > 
      <img src={chord.image} alt={chord.name}/>
      <p className="legend">{chord.name}</p>
    </div>
  )
}

function Pattern({ pattern }){
  const shapes = [];
  pattern.shapes.forEach((shape, index) => {
    shapes.push(
      <Chord index={index} chord={shape}/>
    );
    
  });
  return (
    <div className="pattern-wrap">
      <div className="pattern-name"> {pattern.name}</div>
      <div className="shapes-wrap">
      <Carousel
        showThumbs="true"
        infiniteLoop="true"
        centerMode="true"
        centerSlidePercentage="33"
        thumbWidth="5"
        
      >
          {shapes} 
        </Carousel>
      </div>
    </div>
  )
}

function Patterns({ patterns }){

  const patternList = [];
  patterns.forEach((pat) => {
    patternList.push(
      <Pattern pattern = {pat}/>
    );
  });

  return (
    <div className="patterns-wrap">
        {patternList}
    </div>
  );

}


const PATTERNS = [
  { name: "Chop G",
    shapes: [ 
      { image:"patterns/G/1.png",
        name: "I"
      },
      { image: "patterns/G/4.png",
        name: "IV" 
      }
    ]
  }

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo_white.png" className="App-logo" alt="Mandolin Shapes" />
        <p>
          Chord progression patterns for mandolin.
        </p>
      </header>

      <Patterns patterns={PATTERNS}/>
    </div>
  );
}

export default App;
