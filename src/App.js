import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Task1 from "./components/Task1/Content";
import Task2 from "./components/Task2/GoodsGallery";

function App() {
  const [currentTask, setCurrentTask] = useState(1);

  return (
    <div>
      <Navbar onSelectTask={setCurrentTask} />
      <main>
        {currentTask === 1 && <Task1 />}
        {currentTask === 2 && <Task2 />}
      </main>
    </div>
  );
}

export default App;
