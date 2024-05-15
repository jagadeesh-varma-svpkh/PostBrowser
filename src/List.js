import React from "react";

// This component receives items and a function to handle item click as props
const List = ({items, onItemClick}) => {
    //define the styles for the list and each item
    const listStyle = {
        display: "flex",
        flexDirection: "column",
        felxWrap: "wrap",
        justifyContent:"space-around",
        gap: "10px",
        cursor: "pointer"
    };
    
    const itemStyle ={
        border: "2px solid #45FA0D",
        borderRadius:"5px",
        padding:" 10px",
        width: "calc(50% -20px)",
        marginBottom:"20px"
    };

    //Render the list of items
    return(
        <div style={listStyle}>
            {items.map(item =>{
                //when an item is clicked, call the onClickItem function with the items's id
                return(<div key={item.id} style={itemStyle} onClick={() => 
                    onItemClick(item.id)}>
                        {item.title}
                </div>
                );
            })}
        </div>
    );
};

export default List;

