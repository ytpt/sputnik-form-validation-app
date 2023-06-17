import React, { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./ModalLinks.css";
import { ModalContext } from "../../context/ModalContext";

export const ModalLinks = () => {

    const { openModal } = useContext(ModalContext);

    const handleClickBtn = () => {
        openModal({
            title: "Что-то пошло не так :("
        })
    }

    return (
        <div className="modal-links-container">
            <div className="modal-links">
                <a href="#"
                    className="modal-links__link"
                    onClick={ handleClickBtn }>
                    Я забыл пароль
                </a>
                <a href="#"
                    className="modal-links__link"
                    onClick={ handleClickBtn }>
                    Регистрация
                </a>
            </div>
            <a href="#" className="modal-support" onClick={ handleClickBtn }>
                <AiOutlineMail className="modal-support__icon" />
                <p className="modal-support__text">Написать в поддержку</p>
            </a>
        </div>
    )
}