import "./App.css";
import IndexRoutes from "./routes/Index.Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  );
}

export default App;
