import React from "react";
import "../ModalLinks/ModalLinks.css";

export const Profile = ({ userData }) => {
    return (
        <div className="modal-links__container">
            <div className="modal-links">
                <div className="modal-links__text">
                    <h3>Ваш пароль:</h3>
                    <p>{ userData.password }</p>
                </div>
            </div>
        </div>
    )
}