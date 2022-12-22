import React, {useState} from "react";

const Modal = ({close}) => {



    return (
        <div className="modal">
            <div className="modal-text">Employee Created</div>
            <div><i class="fa-solid fa-xmark" onClick={(e) => close(false)}></i></div>
        </div>
    );
};

export default Modal;