import './App.css';
import { Button } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

function Chord({ index, chord } ){
  return (
      <img src={chord.image} alt={chord.name} className="h-full w-full object-cover"/>
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
      <div className="md:container md:mx-auto">
        <Carousel className="rounded-xl">
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

      <Button> TW Button</Button>
      <Patterns patterns={PATTERNS}/>
    </div>
  );
}

export default App;
