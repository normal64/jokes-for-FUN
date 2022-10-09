import React, { useState } from "react";

const SegmentA = (props) => {
  const rerenderFilter = () => {
    let filter = [];
    //console.log("test",document.querySelectorAll(".blacklist-input"));
    //collecting all filter relevant inputs
    let language = document.querySelector("#lcodeSelect").value;
    let singleJoke = document.querySelector("#typ-cb1").checked;
    let doubleJoke = document.querySelector("#typ-cb2").checked;
    let blacklistFilters = [...document.querySelectorAll(".blacklist-input")];
    let filterLocal = []
    blacklistFilters.map(elem =>{
        if(elem.checked){
            filterLocal = [...filterLocal,   elem.value]
        }
    })
    //console.log(`filterLocal`, filterLocal);
    filter = [...filter, filterLocal.join(",")]
    if (language != "en") {
      filter = [...filter, `lang=${language}`];
    }
    if (singleJoke && !doubleJoke) {
      filter = [...filter, `type=single`];
    } else if (!singleJoke && doubleJoke) {
      filter = [...filter, `type=twopart`];
    }
    
    //console.log(`filter`, filter.join("&"));
    //setting shared state with modified API adress
    if(filterLocal.length > 0){
        props.setSharedState(filter.join("&"));
    }else  {
        props.setSharedState("Any?" + filter.join("&"));
    } 
    
  };
  return (
    <div className="segmentA">
      <h3>Jokes for better mood</h3>
      <div className="filters">
        <select
          id="lcodeSelect"
          className="appendLangOpts"
          onChange={rerenderFilter}
        >
          <option value="cs">cs - Czech</option>
          <option value="de">de - German</option>
          <option value="en">en - English</option>
          <option value="es">es - Spanish</option>
          <option value="fr">fr - French</option>
          <option value="pt">pt - Portuguese</option>
        </select>
      </div>
      <div className="multiselect noselect" id="typeSelectWrapper">
        <input type="checkbox" id="typ-cb1" onChange={rerenderFilter} />
        <label htmlFor="typ-cb1">single</label>
        <input type="checkbox" id="typ-cb2" onChange={rerenderFilter} />
        <label htmlFor="typ-cb2">twopart</label>
      </div>
      <div className="multiselect noselect" id="blacklist">
        <input type="checkbox" id="blacklist-1" className="blacklist-input"  value="Programming" onChange={rerenderFilter} />
        <label htmlFor="blacklist-1">Programming</label>
        <input type="checkbox" id="blacklist-2" className="blacklist-input"  value="Miscellaneous" onChange={rerenderFilter} />
        <label htmlFor="blacklist-2">Misc</label>
        <input type="checkbox" id="blacklist-3" className="blacklist-input" value="Dark" onChange={rerenderFilter} />
        <label htmlFor="blacklist-3">Dark</label>
        <input type="checkbox" id="blacklist-4" className="blacklist-input"  value="Pun"onChange={rerenderFilter} />
        <label htmlFor="blacklist-4">Pun</label>
        <input type="checkbox" id="blacklist-5" className="blacklist-input" value="Spooky" onChange={rerenderFilter} />
        <label htmlFor="blacklist-5">Spooky</label>
        <input type="checkbox" id="blacklist-6" className="blacklist-input" value="Christmas" onChange={rerenderFilter} />
        <label htmlFor="blacklist-6">Christmas</label>
      </div>
      <button
        className="getjoke"
        type="button"
        onClick={() => props.setRerender(!props.rerender)}
      >
        New joke
      </button>
    </div>
  );
};

export default SegmentA;
