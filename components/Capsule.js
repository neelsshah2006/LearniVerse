import React from "react";
import PropTypes from "prop-types";

const Capsule = ({ value }) => {
  return (
    <span className="inline-block bg-white border border-black text-black px-1 py-0.5 rounded-full mx-1 text-sm font-light">
      {value}.
    </span>
  );
};

Capsule.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Capsule;
