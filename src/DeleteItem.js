import React from "react";

const DeleteItem = props => {
  return(
    <button onClick={props.onDeleteLastItem} disabled={props.onNoItemsFound()}>
      Delete Last Item
    </button>
  )
}

export default DeleteItem;