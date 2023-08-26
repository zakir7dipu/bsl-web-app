import './bootstrap';
import ReactDOM from 'react-dom/client';
import Main from "./layouts/Main.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import store from "./store.js";


ReactDOM.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <Router>
            <Main/>
            <ToastContainer />
        </Router>
    </Provider>
);
