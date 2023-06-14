import React from "react";
import { EnterForm } from "../EnterForm/EnterForm";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

export function Modal( { onClose } )  {
    return (
        <>
            <div className="modal-bg" onClick={onClose} />
            <div className="modal-container">
                <div className="modal-header">
                    <h1 className="modal-title">
                        Web <span>App</span>
                    </h1>
                    <AiOutlineClose
                        className="modal-close-btn"
                        onClick={onClose}
                    />
                </div>
                <EnterForm
                    onCreate={onClose}
                    title={"Войдите в свой профиль"}
                />
            </div>
        </>
    )
}