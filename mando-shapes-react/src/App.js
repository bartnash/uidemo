import './App.css';
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";


function Chord({ index, chord } ){
  return (
    <div  > 
      <img src={chord.image} alt={chord.name}/>
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
          {shapes} 
    </div>
  )
}

function Patterns({ patterns }){

  const patternList = [];
  patterns.forEach((pat) => {
    patternList.push(
      <Tab key={pat.name} title={pat.name}>
      <Card>
        <CardBody>
      <Pattern pattern = {pat}/>
      </CardBody>
      </Card>
      </Tab>
    );
  });

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Chord Shapes">
        {patternList}
      </Tabs>
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
    <NextUIProvider>
    <div className="App">
      <header className="App-header">
        <img src="logo_white.png" className="App-logo" alt="Mandolin Shapes" />
        <p>
          Chord progression patterns for mandolin.
        </p>
      </header>

      <Patterns patterns={PATTERNS}/>

      
    </div>
   </NextUIProvider>
  );
}

export default App;
