import { Camera, CircleSlash, LayoutDashboard, RefreshCw } from "lucide-react";
import { useState } from "react";
import { CustomButton } from "./button";

export const Dashboard = () => {
  const [status] = useState<"idle" | "connecting" | "connected" | "error">(
    "connecting",
  );
  return (
    <div className="w-screen h-screen flex flex-col 2xl:px-80 xl:px-60 px-10 relative pt-30">
      <div className="h-full w-[80%] relative flex flex-col">
        <div className="py-5 flex items-center gap-2 text-white font-bold font-inter text-3xl">
          <LayoutDashboard className="h-8 w-8 text-pink-300" />
          Live Preview
        </div>
        <div className="flex bg-black/30 rounded-t-xl backdrop-blur-[10px] shadow-4xl overflow-hidden">
          <div className="h-[480px] w-[640px] bg-black flex justify-center items-center relative flex-col rounded-t-xl">
            {status === "idle" && (
              <div className="text-center">
                <Camera className="h-12 w-12 text-pink-400 mx-auto mb-2" />
                <p className="text-gray-400">Camera disabled</p>
              </div>
            )}

            {status === "connecting" && (
              <div className="text-center">
                <RefreshCw className="h-10 w-10 text-pink-400 mx-auto mb-2 animate-spin" />
                <p className="text-pink-300">Connecting to camera...</p>
              </div>
            )}

            {status === "connected" && <div>Show camera</div>}
          </div>
          <div className="flex flex-col p-4 justify-center items-center gap-4 text-white font-bold font-inter text-xl mx-auto">
            <CircleSlash className="text-pink-500 h-20 w-20" />
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
            <div className="p-4 bg-[#250821]/80 rounded-xl w-full">
              <div className="text-white/60 text-sm">Status</div>
              <div className="text-white text-lg font-semibold">Camers off</div>
            </div>
            <div className="p-4 bg-[#250821] rounded-xl w-full">
              <div className="text-white/60 text-sm">Current gesture</div>
              <div className="text-white text-lg font-semibold">None</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
