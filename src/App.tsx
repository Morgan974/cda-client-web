import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import { Routes, Route } from "react-router-dom";
import ErrorLayout from "./components/Layout/ErrorLayout";
import ListGroupTrekPage from "./components/Page/ListGroupTrekPage";
import ListTrekPage from "./components/Page/ListTrekPage";

function App() {
  return (
      <>
        {/*<Application />*/}
        <Routes>
            {/*<Route path="/error"  element={<ErrorLayout />} />*/}
            <Route path="/list-trek" element={<ListTrekPage />} />
            <Route path="/list-group-trek" element={<ListGroupTrekPage />} />
            <Route path="/*" element={<ErrorLayout />} />
        </Routes>
      </>
  );
}

export default App;
