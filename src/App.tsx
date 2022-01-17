import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import { Routes, Route } from "react-router-dom";
import ListGroupTrekPage from "./components/Page/ListGroupTrekPage";
import ListTrekPage from "./components/Page/ListTrekPage";
import ErrorPage from "./components/Page/ErrorPage";
import ViewTrekPage from "./components/Page/ViewTrekPage";

function App() {
  return (
      <>
        {/*<Application />*/}
        <Routes>
            <Route path="/list-trek" element={<ListTrekPage />} />
            <Route path="/list-group-trek" element={<ListGroupTrekPage />} />
            <Route path="/trek/:idTrek" element={<ViewTrekPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </>
  );
}

export default App;
