export const CardGroup = (props) => {
  const groupTitle = props.title;
  const groupEntries = props.children;
  return (
    <div className="flex flex-col border-8 border-stone-900 rounded-xl drop-shadow-6px transition-all hover:drop-shadow-10px">
      <h1 className="p-4 font-telex text-2xl bg-emerald-400 border-b-8 border-stone-900">
        {groupTitle}
      </h1>
      <div className="p-4 flex-grow flex gap-4 bg-amber-50">{groupEntries}</div>
    </div>
  );
};
