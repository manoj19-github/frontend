import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export interface AppThemeReturns {
  toggleTheme: (_theme: "dark" | "light") => void;
  currTheme: string | undefined;
  getCurrentTheme: () => void;
}
const useAppTheme = (): AppThemeReturns => {
  const { setTheme, theme } = useTheme();
  const [currTheme, setCurrTheme] = useState<string | undefined>();
  useEffect(() => {
    const appTheme = JSON.parse(
      JSON.stringify(window.localStorage.getItem("gurukul-themes"))
    );
    setTheme(appTheme);
    setCurrTheme(appTheme);
  }, []);

  const toggleTheme = (_theme: "dark" | "light") => {
    window.localStorage.setItem("gurukul-themes", _theme);
    setTheme(_theme);
    console.log({ _theme });
    setCurrTheme(_theme);
  };
  const getCurrentTheme = () => {
    return ["light", null].includes(
      JSON.parse(JSON.stringify(window.localStorage.getItem("gurukul-themes")))
    );
  };
  return {
    toggleTheme,
    currTheme,
    getCurrentTheme,
  };
};

export default useAppTheme;
