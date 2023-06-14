import React, { useState } from "react";
import "./StartPage.css";
import { Modal } from "../Modal/Modal";

export function StartPage() {
    const [modal, setModal] = useState(false);
    console.log(modal);

    const onClose = () => {
        setModal(false);
    }

    const onOpen = () => {
        setModal(true);
    }

    return (
        <div className="container">
            { modal && <Modal onClose={onClose} /> }
            <button
                className="start-btn"
                onClick={onOpen}>
                Начать
            </button>
        </div>
    )
}