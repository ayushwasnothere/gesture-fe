import { useEffect, useState } from "react";

export const Blobb = () => {
  const [gStart, setGStart] = useState("");
  const [gStop, setGStop] = useState("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setGStart(rootStyles.getPropertyValue("--color-gstart").trim());
    setGStop(rootStyles.getPropertyValue("--color-gstop").trim());
  }, []);
  return (
    <div className={`w-[500px] h-[500px]`}>
      <div className={`w-[500px] h-[500px] absolute`}>
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: gStart }} />
              <stop offset="100%" style={{ stopColor: gStop }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M436,305Q401,360,350.5,381.5Q300,403,244.5,419.5Q189,436,150.5,393Q112,350,83,300Q54,250,79,197Q104,144,140.5,84.5Q177,25,250,25Q323,25,370,76.5Q417,128,444,189Q471,250,436,305Z;
                M422.5,320Q443,390,379.5,421Q316,452,246,464.5Q176,477,139,417.5Q102,358,56,304Q10,250,53.5,194.5Q97,139,146,110.5Q195,82,257.5,57.5Q320,33,380,72.5Q440,112,421,181Q402,250,422.5,320Z;
                M437,300Q388,350,343,373.5Q298,397,248,404Q198,411,160.5,376.5Q123,342,66.5,296Q10,250,61.5,200Q113,150,156,122Q199,94,249.5,94.5Q300,95,354.5,115Q409,135,447.5,192.5Q486,250,437,300Z;
                M466.5,318.5Q439,387,370.5,398Q302,409,244,428Q186,447,128,414Q70,381,50.5,315.5Q31,250,76.5,203.5Q122,157,152,99Q182,41,241.5,66.5Q301,92,340.5,124Q380,156,437,203Q494,250,466.5,318.5Z;
                M411.5,296Q376,342,339,376.5Q302,411,247,419Q192,427,134.5,401.5Q77,376,39.5,313Q2,250,40.5,188Q79,126,128.5,76.5Q178,27,242,53Q306,79,367,100Q428,121,437.5,185.5Q447,250,411.5,296Z;
                M407.5,303.5Q398,357,347.5,376.5Q297,396,243.5,415.5Q190,435,134,405Q78,375,48,312.5Q18,250,37,179.5Q56,109,127,99.5Q198,90,261,56.5Q324,23,383,66.5Q442,110,429.5,180Q417,250,407.5,303.5Z;
                M437,300Q388,350,343,373.5Q298,397,248,404Q198,411,160.5,376.5Q123,342,66.5,296Q10,250,61.5,200Q113,150,156,122Q199,94,249.5,94.5Q300,95,354.5,115Q409,135,447.5,192.5Q486,250,437,300Z;
                M436,305Q401,360,350.5,381.5Q300,403,244.5,419.5Q189,436,150.5,393Q112,350,83,300Q54,250,79,197Q104,144,140.5,84.5Q177,25,250,25Q323,25,370,76.5Q417,128,444,189Q471,250,436,305Z
                "
            />
          </path>
        </svg>
      </div>
      <div className={`w-[500px] h-[500px] absolute blur-[50px]`}>
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(254, 0, 242)" }} />
              <stop offset="100%" style={{ stopColor: "rgb(251, 2, 128)" }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M436,305Q401,360,350.5,381.5Q300,403,244.5,419.5Q189,436,150.5,393Q112,350,83,300Q54,250,79,197Q104,144,140.5,84.5Q177,25,250,25Q323,25,370,76.5Q417,128,444,189Q471,250,436,305Z;
                M422.5,320Q443,390,379.5,421Q316,452,246,464.5Q176,477,139,417.5Q102,358,56,304Q10,250,53.5,194.5Q97,139,146,110.5Q195,82,257.5,57.5Q320,33,380,72.5Q440,112,421,181Q402,250,422.5,320Z;
                M437,300Q388,350,343,373.5Q298,397,248,404Q198,411,160.5,376.5Q123,342,66.5,296Q10,250,61.5,200Q113,150,156,122Q199,94,249.5,94.5Q300,95,354.5,115Q409,135,447.5,192.5Q486,250,437,300Z;
                M466.5,318.5Q439,387,370.5,398Q302,409,244,428Q186,447,128,414Q70,381,50.5,315.5Q31,250,76.5,203.5Q122,157,152,99Q182,41,241.5,66.5Q301,92,340.5,124Q380,156,437,203Q494,250,466.5,318.5Z;
                M411.5,296Q376,342,339,376.5Q302,411,247,419Q192,427,134.5,401.5Q77,376,39.5,313Q2,250,40.5,188Q79,126,128.5,76.5Q178,27,242,53Q306,79,367,100Q428,121,437.5,185.5Q447,250,411.5,296Z;
                M407.5,303.5Q398,357,347.5,376.5Q297,396,243.5,415.5Q190,435,134,405Q78,375,48,312.5Q18,250,37,179.5Q56,109,127,99.5Q198,90,261,56.5Q324,23,383,66.5Q442,110,429.5,180Q417,250,407.5,303.5Z;
                M437,300Q388,350,343,373.5Q298,397,248,404Q198,411,160.5,376.5Q123,342,66.5,296Q10,250,61.5,200Q113,150,156,122Q199,94,249.5,94.5Q300,95,354.5,115Q409,135,447.5,192.5Q486,250,437,300Z;
                M436,305Q401,360,350.5,381.5Q300,403,244.5,419.5Q189,436,150.5,393Q112,350,83,300Q54,250,79,197Q104,144,140.5,84.5Q177,25,250,25Q323,25,370,76.5Q417,128,444,189Q471,250,436,305Z
                "
            />
          </path>
        </svg>
      </div>
    </div>
  );
};
