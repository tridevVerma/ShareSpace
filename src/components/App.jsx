import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Navbar, Loader } from './';
import { Home, Signin, Signup, Page404, Settings, Profile } from '../pages';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../hooks';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  if (auth.user) {
    return children;
  }
  return <Navigate to="/" />;
};

function App() {
  const auth = useAuth();
  const notify = (msg, type, closeAfter = 5000) => {
    switch (type) {
      case 'error':
        toast.error(msg, { autoClose: closeAfter });
        break;
      case 'success':
        toast.success(msg, { autoClose: closeAfter });
        break;
      default:
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        {auth.loading ? (
          <Loader bg="#eff4fc" color="#1877f2" />
        ) : (
          <Routes>
            <Route path="/" element={<Home notify={notify} />} />
            <Route path="/signin" element={<Signin notify={notify} />} />
            <Route path="/signup" element={<Signup notify={notify} />} />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings notify={notify} />
                </PrivateRoute>
              }
            />

            <Route
              path="/user/:userId"
              element={
                <PrivateRoute>
                  <Profile notify={notify} />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        )}

        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
