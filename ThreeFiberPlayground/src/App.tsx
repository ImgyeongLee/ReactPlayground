import { Canvas } from '@react-three/fiber';
import ThreeText from './components/ThreeText';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ThreeDeveloper from './components/ThreeDeveloper';
import ThreeName from './components/ThreeName';
import ThreeGamer from './components/ThreeGamer';

function App() {
  const [name, setName] = useState<string>('');
  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" bg-slate-500 h-screen flex flex-col justify-center items-center">
        <div className="text-white text-xl">I am... {name}</div>
        <div className="bg-slate-800 w-full">
          <Canvas camera={{ position: [0, 0, 13], fov: 50 }}>
            <React.Suspense fallback={<></>}>
              <ThreeText setName={setName} />
            </React.Suspense>
          </Canvas>
        </div>
        <div className="bg-slate-800 w-full">
          <Canvas camera={{ position: [0, 0, 13], fov: 50 }}>
            <React.Suspense fallback={<></>}>
              <ThreeDeveloper setName={setName} />
            </React.Suspense>
          </Canvas>
        </div>
        <div className="bg-slate-800 w-full">
          <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
            <React.Suspense fallback={<></>}>
              <ThreeName setName={setName} />
            </React.Suspense>
          </Canvas>
        </div>
        <div className="bg-slate-800 w-full">
          <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
            <React.Suspense fallback={<></>}>
              <ThreeGamer setName={setName} />
            </React.Suspense>
          </Canvas>
        </div>
      </div>
      <div className="bg-red-300 h-screen"></div>
    </DndProvider>
  );
}

export default App;
