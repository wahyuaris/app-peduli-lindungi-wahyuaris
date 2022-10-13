import LoginScreen from "./src/pages/LoginScreen";
import SplashScreen from "./src/pages/SplashScreen";
import React from "react";
import Router from "./src/router/Router";

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState("Splash");

  React.useEffect(() => {
    setTimeout(() => {
      setCurrentScreen("Login");
    }, 2000);
  }, []);

  let mainScreen = currentScreen === "Splash" ? <SplashScreen /> : <Router />;

  return <>{mainScreen}</>;
}