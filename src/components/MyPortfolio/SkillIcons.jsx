import React from "react";

function SkillIcons({ svgPath, altText, bgcolor, borderradius }) {
  return (
    <>
      <img
        style={{ background: bgcolor, borderRadius: borderradius }}
        src={svgPath}
        width="40"
        height="40"
        alt={altText}
      />
    </>
  );
}

export default SkillIcons;
