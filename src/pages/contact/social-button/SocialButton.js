import { MdOpenInNew } from "react-icons/md";

export const SocialButton = (props) => {
  const bg = " " + props.buttonColor;
  const href = props.href;
  const icon = props.icon;
  const text = props.text;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pr-4 group flex gap-4 items-center whitespace-nowrap border-8 border-stone-900 rounded-xl bg-amber-50 transition-all hover:drop-shadow-6px"
    >
      <div className={"p-2 border-r-4 border-stone-900 transition-all" + bg}>
        {icon}
      </div>
      <p className="w-full flex gap-2 justify-between items-center text-lg sm:text-3xl">
        {text} <MdOpenInNew />
      </p>
    </a>
  );
};
