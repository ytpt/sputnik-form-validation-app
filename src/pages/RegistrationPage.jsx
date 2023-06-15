import React from "react";
import "../components/Modal/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export function RegistrationPage({ handleModalBgClick }) {

    return (
        <>
            <div className="modal-bg" onClick={ handleModalBgClick } />
            <div className="modal">
                <div className="modal-header">
                    <h2 className="modal-header__title">
                        Страница пока не готова :(
                    </h2>
                    <Link to="/">
                        <AiOutlineClose className="modal-header__btn back-btn" />
                    </Link>
                </div>
            </div>
        </>
    )
}