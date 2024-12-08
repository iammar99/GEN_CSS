import Index from 'Pages/Routes';
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import ScreenLoader from 'Components/Screen Loader/ScreenLoader';
function App() {

  const [isAppLoading, setIsAppLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (isAppLoading) {
    return <ScreenLoader />;
  }
  return <Index />;
}
export default App;
