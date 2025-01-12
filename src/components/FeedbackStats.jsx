import React from "react";

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average : {!isNaN(average) ? average : 0}</h4>
    </div>
  );
};

export default FeedbackStats;
