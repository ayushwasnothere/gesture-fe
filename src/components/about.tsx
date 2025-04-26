export const About = () => {
  return (
    <div className="text-white px-80 pt-30 flex py-40 flex-col relative h-full w-full gap-6">
      <Heading text="Made by The Byte Force" />
      <SubHeading text="Members" space={0} />
      <div className="cursor-pointer pl-10 text-xl text-white/80 text-bold font-inter flex flex-col ga-2">
        <a
          href="https://github.com/rakshith-reddy-23"
          target="_blank"
          className="underline"
        >
          T. Rakshith Reddy
        </a>
        <a
          href="https://github.com/mekala-2405"
          target="_blank"
          className="underline"
        >
          M. Harshvardhan Reddy
        </a>
        <a
          href="https://github.com/Talos-Sentries101"
          target="_blank"
          className="underline"
        >
          G. Srinikesh Reddy
        </a>
        <a
          href="https://github.com/ayushwasnothere"
          target="_blank"
          className="underline"
        >
          Ayush Kumar Shah
        </a>
      </div>
      <Heading text="About Project" />
      <Text
        text="A real-time gesture control project built using OpenCV, MediaPipe, and NumPy for intuitive interaction using hand gestures. Control your screen, draw, scroll, and more — with just your hands! 🖐️💻"
        space={0}
      />
      <Heading text="Features" />
      <Text
        text={`
🔽 Scroll Down
\n
➤ Closed fist (✊): All fingers down.`}
        space={0}
      />
      <Text
        text={`
🔼 Scroll Up
\n
➤ All fingers up except the thumb (🖐️).
`}
        space={0}
      />
      <Text
        text={`
🔊 Volume Control
\n
➤ Middle finger and thumb pinch (🤏): Pinch to raise or lower the volume.
`}
        space={0}
      />
      <Text
        text={`
📸 Take Screenshot
\n
➤ OK gesture (👌): Index and thumb form a circle — only in normal mode.
`}
        space={0}
      />
      <Text
        text={`
📸 Take Screenshot
\n
➤ OK gesture (👌): Index and thumb form a circle — only in normal mode.
`}
        space={0}
      />
      <Text
        text={`
🌟 Brightness Control
\n
➤ Thumb and pinky up (🤙): Adjust brightness only in normal mode.
`}
        space={0}
      />
      <Text
        text={`
🖊️ Pen Mode (Drawing)
\n
➤ OK gesture (🖊️): Allows you to draw only in drawing mode.
`}
        space={0}
      />
      <Heading text="Technologies Used" />
      <SubHeading text="OpenCV" space={0} />
      <Text
        text="OpenCV is a powerful open-source computer vision and machine learning library that provides a comprehensive set of tools for image processing, computer vision, and machine learning tasks."
        space={1}
      />
      <SubHeading text="MediaPipe" space={0} />
      <Text
        text="MediaPipe is a cross-platform framework for building multimodal applied machine learning pipelines, enabling real-time hand tracking and gesture recognition."
        space={1}
      />
      <SubHeading text="Numpy" space={0} />
      <Text
        text="NumPy is a fundamental package for scientific computing in Python, providing support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays."
        space={1}
      />
      <SubHeading text="pywin32 / win32clipboard" space={0} />
      <Text
        text="pywin32 is a set of Python extensions for Windows that provides access to many of the Windows APIs, including clipboard operations, allowing for easy interaction with the Windows clipboard."
        space={1}
      />
      <SubHeading text="React" space={0} />
      <Text
        text="React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage the state of applications efficiently."
        space={1}
      />
      <SubHeading text="Tailwind CSS" space={0} />
      <Text
        text="Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without having to leave your HTML."
        space={1}
      />
      <SubHeading text="Typescript" space={0} />
      <Text
        text="TypeScript is a superset of JavaScript that adds static typing to the language, enabling developers to catch errors early and improve code quality."
        space={1}
      />
      <SubHeading text="Flask" space={0} />
      <Text
        text="Flask is a lightweight WSGI web application framework in Python, designed to make it easy to build web applications quickly and with minimal code."
        space={1}
      />
    </div>
  );
};

const Heading = ({ text }: { text: string }) => {
  return (
    <div className="text-4xl inline font-inter font-bold text-white/80 border-b-4 py-1 border-ascent w-fit">
      {text} :
    </div>
  );
};

const SubHeading = ({ text, space }: { text: string; space: number }) => {
  return (
    <div
      className={`ml-${String(10 + (space || 0) * 5)} text-2xl inline font-inter font-bold text-white/80 border-b-4 py-1 border-ascent w-fit`}
    >
      {text} :
    </div>
  );
};

const Text = ({ text, space }: { text: string; space: number }) => {
  return (
    <div
      className={`pl-${String(10 + (space || 0) * 5)} text-xl text-white/80`}
    >
      {text}
    </div>
  );
};
