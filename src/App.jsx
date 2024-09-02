import { useState } from 'react';
import {CORE_CONCEPTS} from "./data.js";
import Header from "./component/Header/Header.jsx";
import CoreConcept from "./component/CoreComponent.jsx";
import TabButton from "./component/TabButton.jsx";
import {EXAMPLES} from  "./data.js";

function App() {

  const [ selctedTopic, setSelectedTopic ] = useState('');

  function clickHandler(selctedButton){

    setSelectedTopic(selctedButton);
    console.log(selctedTopic)
  }

  let tabContent = <p>Pleae select a topic</p>;
  if(selctedTopic){
    tabContent = (
      <div id="tab-content">
           <h3>{EXAMPLES[selctedTopic].title}</h3>
           <p>{EXAMPLES[selctedTopic].description}</p>
           <pre>
             <code>
               {EXAMPLES[selctedTopic].code}
             </code>
           </pre>
         </div> 
    );
  }
  console.log('Excecute App');
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Core Concept</h2> 
        <ul>
        {/*{[<p>hello</p> , <p>world </p>]}*/}
      {/*  {CORE_CONCEPTS.map((concptItem) =>
           <CoreConcept  key={concptItem.title} {...concptItem} />
        )}*/}

        { CORE_CONCEPTS.map((conceptItem) =>

          <CoreConcept  key={conceptItem.title} {...conceptItem} />
         )}
        
          
          {/*<CoreConcept 
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
           />
          <CoreConcept  {...CORE_CONCEPTS[1]} />
          <CoreConcept  {...CORE_CONCEPTS[2]} />
          <CoreConcept  {...CORE_CONCEPTS[3]} />*/}
        </ul>
       </section>
       <section id="examples">
          <h2>Examples</h2>
         <menu>
           <TabButton isSelcted={selctedTopic === 'components' } onSelect={() => clickHandler('components')}>Components</TabButton>
           <TabButton isSelcted={selctedTopic === 'jsx' } onSelect={() => clickHandler('jsx')}>JSX</TabButton>
           <TabButton isSelcted={selctedTopic === 'props' } onSelect={() => clickHandler('props')}>Props</TabButton>
           <TabButton isSelcted={selctedTopic === 'state'  } onSelect={() => clickHandler('state')}>State</TabButton>
         </menu>
         {tabContent}
         
       </section>
      </main>
    </div>
  );
}

export default App;
