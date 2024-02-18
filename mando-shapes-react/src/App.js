import './App.css';

function Chord({ index, chord } ){
  return (
    <div className="carousel-item w-1/2">
      <img src={chord.image} alt={chord.name} className="w-full"/>
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
    <div>
      <input type="radio" name="pattern_tabs" arial-label={pattern.name} role="tab" className="tab" checked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="carousel rounded-box ">
          {shapes} 
        </div>
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
    <div role="tablist" className="tabs tabs-lifted">
        {patternList}
    </div>
  );

}


const PATTERNS = [
  { name: "Little G",
    shapes: [ 
      { image:"patterns/G/1.png",
        name: "I"
      },
      { image: "patterns/G/4.png",
        name: "IV" 
      }
    ]
  },
  { name: "G Chop",
    shapes: [ 
      { image:"patterns/g-chop/gChopI.svg",
        name: "I"
      },
      { image:"patterns/g-chop/gChop-ii.svg",
        name: "ii"
      },
      { image:"patterns/g-chop/gChopIV.svg",
        name: "IV"
      },
      { image:"patterns/g-chop/gChopV.svg",
        name: "V"
      },
      { image:"patterns/g-chop/gChop-vi.svg",
        name: "vi"
      }
    ]
  }
  ,{ name: "D Chop",
    shapes: [ 
      { image:"patterns/d-chop/dChop1.svg",
        name: "I"
      },
      { image:"patterns/d-chop/dChop-ii.svg",
        name: "ii"
      },
      { image:"patterns/d-chop/dChop4.svg",
        name: "IV"
      },
      { image:"patterns/d-chop/dChop5.svg",
        name: "V"
      },
      { image:"patterns/d-chop/dChop-vi.svg",
        name: "vi"
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

      <button className='btn'> TW Button</button>
      <Patterns patterns={PATTERNS}/>
    </div>
  );
}

export default App;
