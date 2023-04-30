import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Loader } from './';
import { Home, Signin, Signup, Page404, Profile } from '../pages';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../hooks';

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
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin notify={notify} />} />
            <Route path="/signup" element={<Signup notify={notify} />} />
            <Route path="/profile" element={<Profile notify={notify} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        )}

        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
