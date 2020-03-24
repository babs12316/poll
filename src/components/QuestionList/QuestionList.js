import React,{useState,useEffect} from 'react';
const QuestionList = () => {
 const[questions,setQuestions]=useState([]);
    useEffect(() => {
        async function fetchData() {
          const res = await fetch("http://polls.apiblueprint.org/questions");
          const data = await res.json();
          console.log("data is"+ JSON.stringify(data));
          setQuestions(data);
       console.log("data is"+questions);
        }
      fetchData();
      // eslint-disable-next-line 
      }, []); // passed empty array so that data is fetched only once
    
    return ( 
       <div className="row">
        {
            questions.map((question, index)=>
            <div key={index} className="col-xs-12 col-md-4">
                <div><span className="title">Question:</span> <span className="question">{question.question}</span></div>
                <div><span className="title">Published at:</span> {question.published_at}</div>
                <div><span className="title">Number of choices:</span> {question.choices.length} </div>
                        
                </div>)
        }
        </div>
        
     );
}
 
export default QuestionList;