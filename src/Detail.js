import React, {useEffect, useState} from "react";
import axios from "axios";

const Detail =({id})=>{
    //Initialize the state for the item's details
    const [detail, setDetail] =useState(null);

    //define the styles for the deatil view
    const detailStyle ={
        border: "2px solid blue",
        borderRadius: "5px",
        padding: "10px",
        marginTop: "20px",
        width: "80%",
        margin: "20px auto"
    };
    
    //fetch the item's details when the id changes
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response =>{
                setDetail(response.data);
            })
            .catch(error =>{
                console.error("Error fetching post details:", error);
            });
    }, [id]);

    //Don't render anything if the details are not yet fetched
    if (!detail) return null;

    // Render the item's details
    return(
        <div style={detailStyle}>
            <h2>{detail.title}</h2>
            <p> {detail.body}</p>
        </div>
    )
}

export default Detail;

