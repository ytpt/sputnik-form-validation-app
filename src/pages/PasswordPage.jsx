import React from "react";
import "../components/Modal/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export function PasswordPage({ handleModalBgClick }) {
    return (
        <>
            <div className="modal-bg" onClick={ handleModalBgClick } />
            <div className="modal">
                <div className="modal-header">
                    <h2 className="modal-header__title">
                        Что-то пошло не так :(
                    </h2>
                    <Link to="/">
                        <AiOutlineClose className="modal-header__btn back-btn" />
                    </Link>
                </div>
            </div>
        </>
    )
}