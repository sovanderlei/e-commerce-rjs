import React from 'react';

const Footer = ({ onSave, onCancel, onDelete }) => {
    return (
        <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-success" onClick={onSave}>Save</button>
            <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
            {onDelete && (
                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
            )}
        </div>
    );
};

export default Footer;
