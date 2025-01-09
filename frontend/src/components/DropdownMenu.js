import React, { useState } from "react";

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown" style={{ position: "relative" }}>
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                All Category
            </button>
            {isOpen && (
                <ul
                    className="dropdown-menu"
                    style={{
                        display: "block",
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "1000",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "0.25rem",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                    }}
                >
                    <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
