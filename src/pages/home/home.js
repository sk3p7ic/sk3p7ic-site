import { FunkyButton } from "../../components/button/button";
import { AboutPanel } from "./about-panel/AboutPanel";

export const HomePage = () => {
  return (
    <div className="flex-grow w-full h-full p-16 xl:p-32 flex flex-col items-center xl:items-stretch gap-8 xl:flex-row md:gap-4">
      <div className="flex flex-col gap-8 justify-center w-min">
        <h1 className="font-telex text-2xl sm:text-5xl md:text-6xl whitespace-nowrap">
          Programmer / Web Dev.
          <br />
          Student. Coffee Addict.
          <br />
          <br />
          That's about it. Or is it?
        </h1>

        <div className="flex justify-between">
          <FunkyButton href="https://github.com/sk3p7ic">My GitHub</FunkyButton>
          <FunkyButton buttonColor="bg-cyan-500" href="https://joshuaibrom.com">
            Personal Site
          </FunkyButton>
        </div>
      </div>
      <div className="flex-grow flex 2xl:justify-center">
        <div className="flex-grow w-full xl:flex-grow-0 2xl:w-3/4 p-8 border-8 rounded-3xl border-stone-900 bg-amber-50 overflow-scroll">
          <div className="flex flex-col font-telex text-xl">
            <p className="md:text-justify">
              A computer science student and coffee lover from San Antonio,
              Texas with a background in Python and Java, as well as HTML, CSS,
              and Javascript. Somewhat familiar with Angular and learning React.
            </p>
            <AboutPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
