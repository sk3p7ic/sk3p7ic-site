/**
 * Creates a custom-styled button.
 * @param {JSX.Element} props The children of the button component (usually just text).
 * @param {string} buttonColor The color of the button, in Tailwind CSS form. Defaults to `bg-purple-900`.
 * @returns
 */
export const FunkyButton = (props) => {
  const buttonColor =
    props.buttonColor != null ? props.buttonColor : "bg-purple-900";

  const doHandleClick = (e) => {
    e.preventDefault();
    window.location.replace(props.href);
  };

  return (
    <button
      className={
        "p-3 font-tomorrow text-4xl text-stone-100 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-sm -rotate-2 transition-all" +
        " hover:drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:rounded-lg hover:rotate-0 hover:scale-110 " +
        buttonColor
      }
      onClick={doHandleClick}
    >
      {props.children}
    </button>
  );
};
