
import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props){
    const [modalIsOpen,setModalOpen] = useState(false);
    function deleteHandler(){
        setModalOpen(true)
    }
    function closeModelHandler(){
        setModalOpen(false);
    }

    return (
      <div>
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </div>
        {modalIsOpen && <Modal onConfirm = {closeModelHandler} onCancel = {closeModelHandler}/>}
        {modalIsOpen && <Backdrop  onCancel = {closeModelHandler}/>}
      </div>
    );
}


export default Todo;