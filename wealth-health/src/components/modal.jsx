import React, {useState} from "react";

const Modal = () => {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className="modal">
            <div className="modal-text">Employee Created</div>
            <div><i class="fa-solid fa-xmark"></i></div>
        </div>
    );
};

export default Modal;