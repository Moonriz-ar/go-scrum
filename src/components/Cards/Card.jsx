import React from "react";

function Card({
  task: { title, datetime, creator, description, type, priority },
}) {
  const limitString = (str) => {
    if (str.length > 370) {
      return { string: `${str.slice(0, 367)}...`, addButton: true };
    } else {
      return {
        string: str,
        addButton: false,
      };
    }
  };

  return (
    <article className="flex flex-col space-y-5 my-5 p-5 shadow-md rounded-md relative bg-slate-50 ">
      <div className="absolute top-6 right-6 font-bold">x</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <h6 className="text-sm">{datetime}</h6>
        <h5 className="text-sm">{creator}</h5>
      </div>
      <div className="flex items-center space-x-3">
        <div className="text-sm font-bold max-w-fit px-2 py-0.5  rounded-md bg-emerald-400 text-emerald-900">
          {type}
        </div>
        <div className="text-sm font-bold max-w-fit px-2 py-0.5  rounded-md bg-emerald-400 text-emerald-900">
          {priority}
        </div>
      </div>
      <p>{limitString(description).string}</p>
    </article>
  );
}

export default Card;
