import { useEffect, useRef } from "react";

export const VideoStream = () => {

  return (
    <div>
      <img ref={videoRef} alt="Video feed" />
    </div>
  );
};
