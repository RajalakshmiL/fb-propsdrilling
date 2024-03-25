import Headers from "./components/Headers";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/Feedback";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      // console.log("button is clicked from App:", id);
      const filteredFB = feedback.filter((item) => item.id !== id);
      setFeedback(filteredFB);
    }
  };
  const FeedbackAdd = (newFeedback) => {
    const id = uuidv4();
    newFeedback = { id, ...newFeedback };
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Headers />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={FeedbackAdd}></FeedbackForm>
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/post/:id/:name" element={<Post></Post>}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
