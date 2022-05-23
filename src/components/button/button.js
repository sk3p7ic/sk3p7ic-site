export const FunkyButton = (props, { buttonColor = "bg-purple-900" }) => {
  return (
    <button
      className={
        "p-3 font-tomorrow text-4xl text-stone-100 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] -rotate-2 transition-all" +
        " hover:drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:rotate-0 hover:scale-110 " +
        buttonColor
      }
    >
      {props.children}
    </button>
  );
};
