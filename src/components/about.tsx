export const About = () => {
  const url = window.location.href;
  const path = url.split("/").filter((segment) => segment);
  return (
    <div className="text-white px-80 pt-30 relative h-full w-full flex items-center justify-between">
      {path[2]}
    </div>
  );
};
