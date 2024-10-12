import React from "react";

function SkillIcons({ svgPath, altText }) {
  return (
    <>
      <img src={svgPath} width="40" height="40" alt={altText} />
    </>
  );
}

export default SkillIcons;
