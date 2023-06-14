import React from "react";
import "./ErrorMessage.css";

export function ErrorMessage({ error }) {
    return (
        <p className="error-message">
            {error}
        </p>
    )
}