import { MdCode } from "react-icons/md";

import { FunkyButton } from "../../components/button/button";

export const HomePage = () => {
  return (
    <div className="flex-grow w-full h-full p-32 flex gap-4">
      <div className="flex flex-col gap-8 justify-center">
        <h1 className="font-telex text-6xl whitespace-nowrap">
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
      <div className="flex-grow flex justify-center">
        <div className="w-3/4 p-8 border-8 rounded-3xl border-stone-900 bg-amber-50 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col font-telex text-xl">
            <p className="text-justify">
              A computer science student and coffee lover from San Antonio,
              Texas with a background in Python and Java, as well as HTML, CSS,
              and Javascript. Somewhat familiar with Angular and learning React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
