

import Header from "./component/Header/Header.jsx";
import CoreConcepts from "./component/CoreConcepts.jsx";
import Examples from "./component/Examples.jsx";


function App() {

  
  console.log('Excecute App');
  return (
    <>
      <Header />
      <main>
      <CoreConcepts />
      <Examples />
      </main>
    </>
  );
}

export default App;
