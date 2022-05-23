import { useState } from "react";
import { MdCode, MdSchool } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";

const CodeSection = () => {
  return (
    <div>
      <p>Comfortable with</p>
      <ul className="list-disc pl-8">
        <li>Python</li>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Dart</li>
      </ul>
      <p>Somewhat comfortable with</p>
      <ul className="list-disc pl-8">
        <li>Javascript</li>
        <li>Angular</li>
        <li>BASH</li>
      </ul>
      <p>Still learning</p>
      <ul className="list-disc pl-8">
        <li>React</li>
        <li>Flutter</li>
      </ul>
    </div>
  );
};

const SchoolSection = () => {
  return (
    <div>
      <p>
        I'm a computer science student at Texas A&amp;M University - San
        Antonio. During my time at TAMU-SA, I have taken the following courses:
      </p>
      <ul className="list-disc pl-8">
        <li>Programming Fundamentals [1-3] (C++ and Java)</li>
        <li>Scripting Languages (BASH, Python, and PowerShell)</li>
        <li>Mobile App Development I (Using Java)</li>
        <li>Cyber Security</li>
        <li>Database Systems</li>
        <li>Systems Analysis and Design</li>
      </ul>
    </div>
  );
};

const CoffeeSection = () => {
  return (
    <div>
      <p>I love coffee! A nice dark roast is always a solid choice.</p>
    </div>
  );
};

export const AboutPanel = () => {
  const [infoPage, setInfoPage] = useState(0);

  const middleButtonRotations = {
    0: " hover:-rotate-3",
    1: " ",
    2: " hover:rotate-3",
  };

  const buttons = [
    [<MdCode size={64} />, "bg-emerald-400 hover:-rotate-6"],
    [<MdSchool size={64} />, "bg-red-400" + middleButtonRotations[infoPage]],
    [<GiCoffeeCup size={64} />, "bg-yellow-400 hover:rotate-6"],
  ];

  const pages = [<CodeSection />, <SchoolSection />, <CoffeeSection />];

  const handleButtonClick = (i) => {
    setInfoPage(i);
  };

  return (
    <div className="w-full h- full flex flex-col">
      <div className="p-4 flex gap-6 justify-center">
        {buttons.map((elem, i) => (
          <button
            className={
              "p-1 rounded-md border-4 border-stone-900 drop-shadow-6px transition-all" +
              " hover:rounded-xl hover:drop-shadow-10px hover:-translate-y-2 " +
              elem[1]
            }
            key={i}
            onClick={() => handleButtonClick(i)}
          >
            {elem[0]}
          </button>
        ))}
      </div>
      <div className="transition-all">{pages[infoPage]}</div>
    </div>
  );
};
