export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswer: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await await (await fetch(endpoint)).json();
  console.log(data);
};

//https://www.youtube.com/watch?v=F2JCjVSZlG0 left off on 34:46
