import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function onQuestionDeleted(deletedQuestion){
    const newQuestions = questions.filter((question) => deletedQuestion.id != question.id)
    setQuestions(newQuestions);
  }

  function onQuestionUpdated(updatedQuestion){
    const newQuestions = questions.map((question) => {
      if(updatedQuestion.id == question.id){
        return updatedQuestion;
      }

      return question;
    })
    setQuestions(newQuestions);
  }

  const question_list = questions.map((question) => {
    return <QuestionItem
      key={question.id}
      question={question}
      onQuestionDeleted={onQuestionDeleted}
      onQuestionUpdated={onQuestionUpdated}
      />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question_list}</ul>
    </section>
  );
}

export default QuestionList;
