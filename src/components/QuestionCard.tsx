import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

/**
 * answers in Props is going to be an array of strings
 * QuestionCard is a functional component (a type from React itself)
 * Props is an argument of this functional component
 */
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => {
          <div>
            <button disabled={userAnswer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
