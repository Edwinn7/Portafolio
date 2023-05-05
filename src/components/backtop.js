import React, { useState, useEffect } from "react";
import arrowIcon from "../assets/img/arrow-circle-up-svgrepo-com.svg";

export const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("down");

    const handleClick = () => {
        if (window.pageYOffset > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }

        // Agregar una clase adicional al botón para indicar la dirección del desplazamiento
        if (window.pageYOffset > window.innerHeight / 2) {
            setScrollDirection("up");
        } else {
            setScrollDirection("down");
        }

        // Comprobar la posición actual de la página
        if (window.pageYOffset > 0) {
            // Si la página no está en la parte superior, desplazarse hacia arriba
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // Si la página está en la parte superior, desplazarse hacia abajo
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Comprobar la posición de la página actual
            if (window.pageYOffset > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <button className={`scroll-to-top-btn ${showButton ? 'show-scroll-btn' : ''} ${scrollDirection === "up" ? 'rotate180' : ''}`} onClick={handleClick}>
            <img src={arrowIcon} alt="arrow icon" />
        </button>
    );
};
