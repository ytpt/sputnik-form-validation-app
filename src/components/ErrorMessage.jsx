import React from "react";

export function ErrorMessage({ error }) {
    return (
        <p className="error-text">{ error }</p>
    )
}