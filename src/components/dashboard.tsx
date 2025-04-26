import { Camera, CircleSlash, LayoutDashboard, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CustomButton } from "./button";

export const Dashboard = () => {
  const [status, setStatus] = useState<
    "idle" | "connecting" | "connected" | "error"
  >("connected");

  const videoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    console.log(status);
  }, [status]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/camera_status")
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
        })
        .catch((err) => {
          console.error("Failed to fetch camera status", err);
          setStatus("error");
        });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "http://localhost:5000/video_feed";
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col 2xl:px-80 xl:px-60 px-10 relative pt-30">
      <div className="h-full w-[80%] relative flex flex-col">
        <div className="py-5 flex items-center gap-2 text-white font-bold font-inter text-3xl">
          <LayoutDashboard className="h-8 w-8 text-aslight" />
          Live Preview
        </div>
        <div className="flex bg-black/30 rounded-t-xl backdrop-blur-[10px] shadow-4xl overflow-hidden">
          <div className="h-[480px] w-[720px] bg-black flex justify-center items-center relative flex-col rounded-t-xl">
            {status === "idle" && (
              <div className="text-center">
                <Camera className="h-12 w-12 text-aslight mx-auto mb-2" />
                <p className="text-gray-400">Camera disabled</p>
              </div>
            )}

            {status === "connecting" && (
              <div className="text-center">
                <RefreshCw className="h-10 w-10 text-aslight mx-auto mb-2 animate-spin" />
                <p className="text-aslight">Connecting to camera...</p>
              </div>
            )}

            {status === "connected" && (
              <div>
                <img ref={videoRef} alt="Video feed" />
              </div>
            )}
          </div>
          <div className="flex flex-col p-4 justify-center items-center gap-4 text-white font-bold font-inter text-xl mx-auto">
            <CircleSlash className="text-ascent h-20 w-20" />
            <div>No gesture detected</div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-6 bg-black/30 gap-4 rounded-b-xl backdrop-blur-[10px] shadow-4xl overflow-hidden">
          <div className="flex justify-between items-center w-full px-4">
            <div className="text-white font-bold text-2xl">Gesture Preview</div>
            <div className="w-20 flex justify-center items-center">
              <CustomButton onClick={() => {}} name="Start" />
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="p-4 bg-background/80 rounded-xl w-full">
              <div className="text-white/60 text-sm">Status</div>
              <div className="text-white text-lg font-semibold">Camers off</div>
            </div>
            <div className="p-4 bg-background rounded-xl w-full">
              <div className="text-white/60 text-sm">Current gesture</div>
              <div className="text-white text-lg font-semibold">None</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
