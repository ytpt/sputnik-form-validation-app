import React from "react";
import { EnterForm } from "../EnterForm/EnterForm";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom";

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
                <div className="modal-links">
                    <Link to="/password" className="modal-link">Я забыл пароль</Link>
                    <Link to="/registration" className="modal-link">Регистрация</Link>
                </div>
            </div>
        </>
    )
}