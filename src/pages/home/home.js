import { MdCode } from "react-icons/md";

import { FunkyButton } from "../../components/button/button";

export const HomePage = () => {
  const iconSize = window.innerWidth * 0.125;
  return (
    <div className="flex-grow w-full h-full p-32 flex gap-4">
      <div className="flex flex-col gap-8 justify-center">
        <h1 className="font-telex text-6xl">
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
      <div className="flex-grow"></div>
    </div>
  );
};
