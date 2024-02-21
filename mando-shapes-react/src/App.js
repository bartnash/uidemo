import './App.css';
import { Tabs } from 'flowbite-react';


function Chord({ index, chord } ){
  return (
    <div key={index} className='h-1/2 min-w-40 -space-x-2 space-y-2 justify-items-center content-center bg-neutral-50 snap-center box-content ' > 
      <img src={chord.image} alt={chord.name} className='h-1/2 self-center relative w-full box-border space-x-4 space-y-2 bg-white'/>
      <p className="legend">{chord.name}</p>
    </div>
  )
}

function Pattern({ pattern }){
  const shapes = [];
  pattern.shapes.forEach((shape, index) => {
    shapes.push(
      <Chord index={index} chord={shape} className=' bg-neutral-50 snap-center'/>
    );
    
  });
  return (
    <div className="h-full">
      <div className="relative h-1/6"> {pattern.name}</div>
      <div className="relative h-1/2" >
        <div className="snap-x snap-mandatory overflow-x-auto items-center justify-center relative w-full gap-6 bg-neutral-50 flex "
        >
          <div className='w-1/3 space-x-2 space-y-2 bg-neutral-50 snap-center h-1/2 box-content ' > 
          </div>
          {shapes} 
          <div className='w-1/3 space-x-2 space-y-2 bg-neutral-50 snap-center h-1/2 box-content ' > 
          </div>
        </div>
      </div>
    </div>
  )
}
        //<div className="snap-x snap-mandatory overflow-x-auto items-center justify-center h-full relative w-full gap-6 auto object-center bg-neutral-50 flex "

        //<Carousel className='snap-mandatory snap-y'>
         // {shapes} 
        //</Carousel>

function Patterns({ patterns }){

  const patternList = [];
  patterns.forEach((pat) => {
    patternList.push(
      <Tabs.Item className='h-full' title={pat.name} >
      <Pattern pattern = {pat} />
      </Tabs.Item>
    );
  });

  return (
    <Tabs aria-label="Chord Patterns" style="default">
        {patternList}
    </Tabs>
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
    <div className="App snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 ">

      <div className="App-header snap-always snap-center">
        <img src="logo_white.png" className="App-logo" alt="Mandolin Shapes" />
        <p>
          Chord progression patterns for mandolin.
        </p>
      </div>
      <div className="snap-always snap-start relative h-full min-w-full ">


      <Patterns patterns={PATTERNS}/>
      </div>
    </div>
  );
}

export default App;
