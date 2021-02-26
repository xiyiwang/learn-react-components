import React from "react";
import { SimpleImg } from "react-simple-img";

const SpeakerImage = ({ id, alt }) => {
  const imageUrl = `/speakerimages/Speaker-${id}.jpg`;
  return (
    <SimpleImg
      src={imageUrl}
      alt={alt}
      animationDuration="1"
      width={200}
      height={200}
      applyAspectRatio="true"
    />
  );
};

export default SpeakerImage;
