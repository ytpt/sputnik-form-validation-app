import React from "react";
import { EnterForm } from "../EnterForm";
import "./Modal.css";

export function Modal( { onClose } )  {
    return (
        <>
            <div className="modal-bg" onClick={onClose} />
            <div className="modal-container">
                <h1 className="modal-title">
                    Web <span>App</span>
                </h1>
                <EnterForm onCreate={ onClose } title={"Войдите в свой профиль"} />
            </div>
        </>
    )
}