import React, { ReactElement } from "react";
import "./Btn.scss";

type Props = {
  onClick: () => any;
  customClass: string;
  children: React.ReactNode;
};

const Btn = ({ onClick, customClass, children }: Props) => {
  const btnClass = `btn ${customClass}`;
  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Btn;
