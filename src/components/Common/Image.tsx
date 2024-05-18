import React from "react";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import { APP_THEME } from "../../constants";

type Props = {
  darkThemeSrc: string;
  lightThemeSrc: string;
  alt: string;
  customClass?: string;
};

const Image = ({ darkThemeSrc, lightThemeSrc, alt, customClass }: Props) => {
  const { theme } = useContext(themeContext);
  const src = theme === APP_THEME.LIGHT ? lightThemeSrc : darkThemeSrc;
  const imgClass = `img ${customClass}`;
  return <img src={src} alt={alt} className={imgClass} />;
};

export default Image;
