import { Route, Routes } from "react-router";
import "./App.css";
import NewQuiz from "./Components/NewQuiz";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./State/store";
import "bootstrap/dist/css/bootstrap.min.css";
import MyQuiz from "./Components/MyQuiz";
import Authentication from "./Components/Authentication";
import PlayQuiz from "./Components/PlayQuiz";
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="new_quiz" element={<NewQuiz />} />
        <Route path="my_quiz" element={<MyQuiz />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="play_quiz" element={<PlayQuiz />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
