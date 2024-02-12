import './App.css';

function Chord({ chord } ){
  return (
    <div className="chord-shape"> 
      <div className="chord-name">{chord.name}</div>
      <img className="chord-image" src={chord.image} alt={chord.name}/>
    </div>
  )
}

function Pattern({ pattern }){
  const shapes = [];
  pattern.shapes.forEach((shape) => {
    shapes.push(
      <Chord chord={shape}/>
    );
    
  });
  return (
    <div className="pattern-wrap">
      <div className="pattern-name"> {pattern.name}</div>
      <div className="shapes-wrap"> {shapes} </div>
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
        name: "V" 
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
