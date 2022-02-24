import React from "react";
import "./About.css";
import Textbox from "./Textbox"

const About = () => {

  return (
    <>
    <div className="home">
      <div className="home__container">
            <Textbox heading="Om Betonggris" 
            text="Vi på Betonggris anser att hunden i alla avseenden är människans bäste vän, och vill erbjuda alla
            andra hundälskare det allra bästa till sina älsklingar! Vi erbjuder koppel och halsband som passar oavsett vad din hund 
            har för personlighet. Vill du verkligen skämma bort din vän rekommenderar vi ett besök i vårt hund-spa. Trimning av 
            päls, klippning av klor, tvätt och massage." />


            <Textbox heading="Jobba hos oss"
            text="För närvarande söker vi inga fler medarbetare, men vi planerar att utöka vår spa-verksamhet. Om du älskar hundar och 
            drömmer om att arbeta med att hjälpa hundägare att ge deras fyrbenta kamrater sann livskvalitet skicka in din CV och ett brev 
            där du förklarar hur just du kan ge våra kunder en oförglömlig upplevelse." />
            
            <Textbox heading="Nyheter"
            text="Vi har precis lanserat vår nya line med hundhalsband! Vi är säkra på att du kan hitta det perfekta halsbandet 
            till din hund!" />
        
      </div>
    </div>
</>
  );
};

export default About;
