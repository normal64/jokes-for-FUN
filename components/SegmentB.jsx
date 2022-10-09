import { useEffect, useState } from "react";

import Image from 'next/image'
import mypic from "../public/loading.gif"
export default function SegmentB(props) {
 
  const [joke, setJoke] = useState();
  useEffect(() => {
    const getJoke = async () => {
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/${props.sharedState? props.sharedState : "Any"}`
      );
      const data = await res.json();
      
      setJoke(data);
    };
    getJoke();
    return () => {};
  }, [props.sharedState, props.rerender]);
  function renderJoke(joke){
      if(joke.joke){
          return(
              <h1>{joke.joke}</h1>
          )
      }else {
          return(
              <>
                   <h2>{joke.setup}</h2> 
                   <br />
                   <h1>{joke.delivery}</h1>
              </>
             
          )
      }
  }

  return (
    <div className="segmentB">
        Warm up joke:
      {props.joke ? renderJoke(props.joke) : "loading"}
      
      <div className="joke-container">
        {joke ? renderJoke(joke) :  <Image
      
      src={mypic}
      alt="Picture for loading"
      width={150}
      height={80}
    /> }
   
      </div>
    </div>
  );
}
