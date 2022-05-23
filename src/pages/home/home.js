import { FunkyButton } from "../../components/button/button";

export const HomePage = () => {
  return (
    <div className="flex-grow w-max h-full p-32 flex flex-col gap-8 justify-center">
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
  );
};
