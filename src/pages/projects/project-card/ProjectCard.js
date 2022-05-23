import { FunkyButton } from "../../../components/button/button";

export const ProjectCard = (props) => {
  const title = props.title;
  const href = props.href;
  const imgSrc = props.src;
  const desc = props.children;
  return (
    <div className="p-2 flex flex-col border-8 border-stone-900 rounded-xl transition-all hover:scale-[1.01]">
      <h1 className="font-telex text-2xl underline">{title}</h1>
      <a href={href}>
        <img
          src={imgSrc}
          alt="Project screenshot"
          className="w-full h-auto border-4 border-stone-900 rounded-2xl"
        />
      </a>
      <p className="font-telex text-lg">{desc}</p>
      <div className="flex-grow p-8 flex flex-col justify-end text-center">
        <FunkyButton href={href} buttonColor="bg-purple-400">
          View Me!
        </FunkyButton>
      </div>
    </div>
  );
};
