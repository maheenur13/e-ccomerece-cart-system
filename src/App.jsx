import { useEffect } from "react";
import "./App.scss";
import Homepage from "./pages/Homepage";
import { getCartTotalValues } from "./store/actions";

const App = () => {
  return (
    <div>
      <Homepage />
    </div>
  );
};

export default App;
