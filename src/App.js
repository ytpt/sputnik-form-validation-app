import React  from "react";
import { ModalProvider } from "./context";
import { Controls } from "./components/Controls";

function App() {

  return (
      <ModalProvider>
          <div className="App">
              <Controls />
          </div>
      </ModalProvider>
  );
}

export default App;
