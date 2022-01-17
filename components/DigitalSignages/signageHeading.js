import React from "react";

const SignageHeading = ({className = ""}) => {
  return (
    <div className={`logo-container ${className}`}>
      <img className="logo" src="/images/logo.svg" alt="Logo" />
    </div>
  );
};

export default SignageHeading;
