// Chip.js
import React from "react";
import PropTypes from "prop-types";

const Chip = ({ label, onDelete }) => {
  return (
    <div className="chip">
      <span>{label}</span>
      {onDelete && (
        <button aria-label="delete-chip" onClick={onDelete}>&times;</button>
      )}
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default Chip;