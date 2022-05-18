import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.scss";
import {Routes, Route, Navigate} from "react-router-dom";
import ListGroupTrekPage from "./components/Page/ListGroupTrekPage";
import ListTrekPage from "./components/Page/ListTrekPage";
import ErrorPage from "./components/Page/ErrorPage";
import ViewTrekPage from "./components/Page/ViewTrekPage";
import ListTrekAdminPage from "./components/Page/ListTrekAdminPage";
import LoginPage from "./components/Page/LoginPage";
import AuthApi from "./tools/AuthApi";
import {useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

AuthApi.setup();

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthApi.isAuthenticated);
    const [isAdmin, setIsAdmin] = useState(AuthApi.isAdmin);

    return (
      <>
        <Routes>
            <Route path="/list-group-trek" element={
                <ListGroupTrekPage
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
            } />
            <Route path="/trek/:idTrek" element={
                <ViewTrekPage
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
            } />
            <Route path="/admin/list-trek" element={
                isAuthenticated && isAdmin ?
                <ListTrekAdminPage
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
                :
                <Navigate to="/login" />
            } />
            <Route path="/login" element={
                <LoginPage
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
            } />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={
                <ListTrekPage
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
            } />
        </Routes>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      </>
    );
}

export default App;
