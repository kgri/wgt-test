import React, {useState} from "react";
import classNames from "classnames";
import styles from "./App.module.css";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";

export interface PageProps {
  onNextPage: () => void;
}

const App = () => {
  const [activePage, setActivePage] = useState(1);
  let activeComponent = null;

  const onNextPage = () => {
    setActivePage(activePage + 1);
  };

  switch (activePage) {
    case 1:
      activeComponent = <One onNextPage={onNextPage} />;
      break;
    case 2:
      activeComponent = <Two onNextPage={onNextPage} />;
      break;
    case 3:
      activeComponent = <Three onNextPage={onNextPage} />;
      break;
    case 4:
      activeComponent = <Four />;
      break;
  }

  return (
    <div className="App">
      <div className={styles.appContainer}>{activeComponent}</div>
      <nav className={styles.stepContainer}>
        {[1, 2, 3].map((key, index) => (
          <div
            className={classNames(styles.step, {
              [styles.activeStep]: index + 1 === activePage,
              [styles.completedStep]: index + 1 < activePage,
            })}
            key={key}
            data-test={`step-${index + 1}`}
          >
            {key}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default App