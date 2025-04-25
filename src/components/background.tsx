import { Blobb } from "./blob.tsx";
export default function Background() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-screen fixed -z-50 bg-[#250821]">
        <div className="absolute -left-30 -top-40 rotate-12">
          <Blobb />
        </div>
        <div className="absolute -right-70 bottom-30 rotate-180">
          <Blobb />
        </div>
        <div className="absolute left-64 -bottom-60 rotate-45">
          <Blobb />
        </div>
        <div className="absolute">
          <Blobb />
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="absolute h-[300px] w-[300px] bg-linear-65 from-purple-500 to-pink-500 rounded-full z-50"></div> */
}
{
  /* <div className="absolute h-[300px] w-[300px] bg-linear-65 from-purple-500 to-pink-500 rounded-full z-50 blur-[30px]"></div> */
}
