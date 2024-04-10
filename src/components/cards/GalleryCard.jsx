import React from "react";

function GalleryCard({ imgSrc, isScaled, name }) {
  return (
    <a
      href={imgSrc}
      target="_blank"
      rel="noopener noreferrer"
      class={`imgContainer h-[350px] w-full hover:scale-125 opacity-95 hover:opacity-100 hover:rounded-[48px] hover:shadow-sm hover:cursor-pointer transition hover:z-40 duration-300 ${
        isScaled && "scale-150 rounded-[48px] z-30 shadow-sm !opacity-100"
      }`}
    >
      <img
        src={imgSrc}
        height={320}
        loading={"lazy"}
        width={320}
        alt={name ? name : "New goshen Gallery showing school activities"}
        class={"img h-full w-full object-cover"}
      />
    </a>
  );
}

export default GalleryCard;
