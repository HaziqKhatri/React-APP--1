import { useState } from 'react';
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";
import {EXAMPLES} from  "../data.js";

export default function Examples(){
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
	return (
		<Section id="examples" title="Examples">

      <Tabs  /*buttonsContainer = "menu" */
      buttons = 
      {
        <>
          <TabButton isSelcted={selctedTopic === 'components' } onClick={() => clickHandler('components')}>Components</TabButton>
           <TabButton isSelcted={selctedTopic === 'jsx' } onClick={() => clickHandler('jsx')}>JSX</TabButton>
           <TabButton isSelcted={selctedTopic === 'props' } onClick={() => clickHandler('props')}>Props</TabButton>
           <TabButton isSelcted={selctedTopic === 'state'  } onClick ={() => clickHandler('state')}>State</TabButton>
        </>
      }
      >
       {tabContent}
      </Tabs>
         
       </Section>
	);
}