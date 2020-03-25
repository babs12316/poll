import React,{useEffect,useState} from 'react';
import './QuestionDetail.css';
const QuestionDetail = (props) => {
  const[questionDetail,setQuestionDetail]=useState([]);
    const[choices,setChoices]=useState([]);
    useEffect(() => {
        async function fetchData() {
          const res = await fetch("http://polls.apiblueprint.org/questions/"+props.match.params.id);
          const data = await res.json();
          setQuestionDetail(data);
          setChoices(data.choices);
     }
      fetchData();
      // eslint-disable-next-line 
      }, []); 
 


return (
<div className="row">
    <h2 className="col-md-12">Questions Detail</h2>
    <div className="col-md-12 headline">Question: <b> {questionDetail.question}</b></div>
    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">Choice</th>
      <th scope="col">Votes</th>
      </tr>
    </thead>
    <tbody>
     {choices.map((choice,index)=><tr key={index}><td>{choice.choice}</td><td>{choice.votes}</td></tr>)}
    </tbody>
    </table>

</div>  );
}


 

export default QuestionDetail;