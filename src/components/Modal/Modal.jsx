import React, { useContext } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../../context/ModalContext";

export function Modal(props)  {

    const { children, title } = props;
    const { closeModal } = useContext(ModalContext);

    const handleClose = () => {
        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 0.2);
    }

    return (
        <>
            <div className="modal-bg" onClick={ handleClose } />
            <div className="modal" onClick={ (event) => event.stopPropagation() }>
                <div className="modal-header">
                    <h1 className="modal-header__title">{ title }</h1>
                    <AiOutlineClose className="modal-header__btn" onClick={ handleClose } />
                </div>
                <div className="modal-body">{ children }</div>
            </div>
        </>
    )
}