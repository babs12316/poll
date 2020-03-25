import React, { useState, useEffect } from "react";
import "./QuestionList.css";
const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://polls.apiblueprint.org/questions?1");
      const data = await res.json();
       setQuestions(data);
    }
    fetchData();
    // eslint-disable-next-line
  }, []); // passed empty array so that data is fetched only once

  return (
    <div className="row">
      <h2 className="col-md-12">Questions</h2>
      {questions.map((question, index) => (
        <a
          href={question.url}
          className="col-xs-12 col-md-4"
          key={index}
          title="Click to see detail view"
        >
          <div>
            <span className="title">Question:</span>{" "}
            <span className="question">{question.question}</span>
          </div>
          <div>
            <span className="title">Published at:</span> {question.published_at}
          </div>
          <div>
            <span className="title">Number of choices:</span>{" "}
            {question.choices.length}{" "}
          </div>
        </a>
      ))}
    </div>
  );
};

export default QuestionList;
