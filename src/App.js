import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import List from "./List";
import Detail from "./Detail";

const App = () => {
  //Initialize state fot the list of items and selected item's id and page
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(1);

  //Fetch the list of items when the component mounts
  useEffect(() => {
    axios.get (`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then (response =>{
      setItems(response.data);
    })
    .catch (error =>{
      console.error("Error getting while fecthing the posts :", error);
    })
  }, [page]);

  //Define a callback to handle item click, and memoize it using useCallback
  const handleItemClick = useCallback((id)=>{
    setSelectedId(id);
  },[]);


  //performing heavy computation on the items, and memoize the result using useMemo
  const computedItems = useMemo(()=>{
    return items.map(item =>{
      // let's just add a timestamp to each item 
      return{...item, timestamp: Date.now()};
    });
  }, [items]);

  //define the callbacks to handle page change
  const handlePrevPage =()=>{
    if (page >1 ) {
      setPage(page-1);
    }
  };

  const  handleNextPage =() =>{
    setPage (page +1 );
  }

  const ButttonStyle = {
    display:"flex",
    justifyContent:"center",
    gap: "10px",
    marginTop:"20px",
    justifyContent:"space-between"
  } 

const headingStyle ={
  textAlign:"center",
  color:"#0D97FA",
  fontSize:"3em",
  fontWeight:"bold",
  
}

const prevNextButtonStyle={
  backgroundColor:"#B2C51C",
  color:"#FA0D0D",
  border:"none",
  pading:"10px 20px",
  curser:"pointer",
  fontSize:"2em"
}
  //Render the List and Details components
  return(
    <div>
      <h1 style={headingStyle}>Post Browser</h1>
      <List items={computedItems} onItemClick={handleItemClick}/>
      {selectedId && <Detail id={selectedId} />}
      <div style={ButttonStyle}>
      <button style={prevNextButtonStyle} onClick={handlePrevPage}>Prev</button>
      <button style={prevNextButtonStyle} onClick={handleNextPage}>Next</button>
      </div>
    </div>
  )
};
export default App;
