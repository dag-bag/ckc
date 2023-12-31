import useQuizSession from "@/hooks/use-quiz-session";
import { Slide } from "../../../../types/quiz";
import { Button } from "../main";

interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
  wrongAnswerAlert: any;
}

const Select = ({
  action,
  answer,
  isLastQuestion,
  wrongAnswerAlert,
}: SelectProps) => {
  const { saveResponse } = useQuizSession();
  const validateClickInteraction = (value: string | string[]) => {
    if (value !== answer) {
      wrongAnswerAlert(value, isLastQuestion);
    } else {
      saveResponse(value, isLastQuestion);
    }
  };
  return (
    <section className="grid max-h-full overflow-y-scroll md:overflow-hidden rounded-xl">
      <div className="grid md:grid-cols-4 md:flex-row md:gap-4 gap-2">
        {action.options?.map((option, index) => (
          <Button
            {...option}
            index={index}
            key={option.name}
            onClick={() => validateClickInteraction(option.value)}
          />
        ))}
      </div>
    </section>
  );
};

export default Select;
