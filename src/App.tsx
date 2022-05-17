import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.scss";
import { Routes, Route } from "react-router-dom";
import ListGroupTrekPage from "./components/Page/ListGroupTrekPage";
import ListTrekPage from "./components/Page/ListTrekPage";
import ErrorPage from "./components/Page/ErrorPage";
import ViewTrekPage from "./components/Page/ViewTrekPage";
import ListTrekAdminPage from "./components/Page/ListTrekAdminPage";
import LoginPage from "./components/Page/LoginPage";

function App() {
  return (
      <>
        <Routes>
            <Route path="/list-group-trek" element={<ListGroupTrekPage />} />
            <Route path="/trek/:idTrek" element={<ViewTrekPage />} />
            <Route path="/admin/list-trek" element={<ListTrekAdminPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<ListTrekPage />} />
        </Routes>
      </>
  );
}

export default App;
