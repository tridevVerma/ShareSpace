import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './';
import { Home, Signin, Page404 } from '../pages';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin notify={notify} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
