import React from "react";
import { EnterForm } from "../EnterForm/EnterForm";
import "./Modal.css";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Modal({ onClose })  {
    return (
        <>
            <div className="modal-bg" onClick={ onClose } />
            <div className="modal">
                <div className="modal-header">
                    <h1 className="modal-header__title">
                        Web <span>App</span>
                    </h1>
                    <AiOutlineClose className="modal-header__btn" onClick={ onClose } />
                </div>
                <EnterForm onCreate={ onClose } title={ "Войдите в свой профиль" } />
                <div className="modal-links">
                    <Link
                        to="/password"
                        className="modal-links__link">
                        Я забыл пароль
                    </Link>
                    <Link
                        to="/registration"
                        className="modal-links__link">
                        Регистрация
                    </Link>
                </div>
                <div className="modal-support">
                    <AiOutlineMail className="modal-support__icon" />
                    <p className="modal-support__text">Написать в поддержку</p>
                </div>
            </div>
        </>
    )
}