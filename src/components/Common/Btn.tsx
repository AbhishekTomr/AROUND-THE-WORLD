import React from "react";
import "./Btn.scss";

type Props = {
  btnText: string;
  onClick: () => any;
  customClass: string;
};

const Btn = ({ btnText, onClick, customClass }: Props) => {
  const btnClass = `btn ${customClass}`;
  return (
    <button onClick={onClick} className={btnClass}>
      {btnText}
    </button>
  );
};

export default Btn;
