import React, { useContext } from "react";
import "./StartPage.css";
import { ModalContext } from "../../context";
import { EnterForm } from "../EnterForm/EnterForm";
import { ModalLinks } from "../ModalLinks/ModalLinks";

export const StartPage = () => {

    const { openModal } = useContext(ModalContext);

    const handleClickStartBtn = () => {
        openModal({
            title: "Web App",
            children: [
                <EnterForm key="form" />,
                <ModalLinks key="links" />
            ]
        })
    }

    return (
        <div className="controls container">
            <button className="controls-btn" onClick={ handleClickStartBtn }>start</button>
        </div>
    )
}