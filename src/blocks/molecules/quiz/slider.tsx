import Main from "./main";
import { useState } from "react";
import QuizHeader from "./header";
import { RewardConfig } from ".";
import { Modal } from "@mantine/core";
import { Quiz } from "../../../types/quiz";
import QuizResultPreviewer from "./result";
import { QuizResultMaker } from "./result";
import QuizAudioPlayer from "./audio-player";
import { BsArrowRight } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import { compareArrays } from "./actions/order";
import { validateArrays } from "./actions/multi";
import useQuizSession from "@/hooks/use-quiz-session";

interface Props {
  meta: Quiz;
  opened: boolean;
  close: () => void;
  RewardConfig: RewardConfig;
}

const QuizSlider: React.FC<Props> = ({ opened, close, meta, RewardConfig }) => {
  const [opened2, handlers] = useDisclosure(false);
  const { session, saveResponse } = useQuizSession();
  const [value, setValue] = useState<string | string[] | null>(null);
  const slideIndex = session?.state.index ?? 0;
  const slideInfo = meta.slides.at(slideIndex);
  const totalNumberOfQuestions = meta.slides.length;
  const isLastQuestion = meta.slides.length - 1 == slideIndex;
  const isAllQuestionAttemped =
    Object.keys(session?.responses as any)?.length == meta.slides.length;

  const wrongAnswerAlert = (value: any, isLastQuestion: any) => {
    handlers.open();
    const t = setTimeout(() => {
      handlers.close();
      clearTimeout(t);
      //@ts-ignore
      saveResponse(value, isLastQuestion);
      setValue(null);
    }, 800);
  };

  return (
    <Modal
      fullScreen
      opened={opened}
      onClose={close}
      withCloseButton={false}
      classNames={{
        content: "",
        body: "!p-0",
      }}
    >
      {!isAllQuestionAttemped ? (
        <>
          <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-200 ">
            <div className="w-full h-full bg-black/40--- grid grid-rows-2 gap-5 p-3 ">
              <Modal
                classNames={{
                  body: "!bg-red-50 !border-2 !border-red-500",
                }}
                centered
                opened={opened2}
                onClose={handlers.close}
                withCloseButton={false}
                transitionProps={{ transition: "rotate-left" }}
              >
                <div>
                  <h1 className="text-3xl text-center text-red-500 font-fun font-semibold">
                    Wrong Answer
                  </h1>
                </div>
              </Modal>

              <QuizHeader
                duration={slideInfo?.duration}
                text={slideInfo?.question.text}
                attempedQuestions={slideIndex + 1}
                imageUrl={slideInfo?.question.imageUrl}
                audioUrl={slideInfo?.question.audioUrl}
                totalQuestions={totalNumberOfQuestions}
              />
              <Main
                value={value}
                setValue={setValue}
                {...(slideInfo as any)}
                isLastQuestion={isLastQuestion}
                wrongAnswerAlert={wrongAnswerAlert}
              />
              <Footer
                //  for type:order;
                defaultOrderValues={
                  slideInfo?.action.type == "order"
                    ? slideInfo?.action.options?.map((opt) => opt.value)
                    : undefined
                }
                duration={slideInfo?.duration}
                value={value}
                wrongAnswerAlert={wrongAnswerAlert}
                setValue={setValue}
                answer={slideInfo?.answer}
                isLastQuestion={isLastQuestion}
                attempedQuestions={slideIndex + 1}
                actionType={slideInfo?.action.type}
                totalQuestions={meta.visible}
              />
            </div>
          </div>
        </>
      ) : (
        <QuizResultPreviewer
          RewardConfig={RewardConfig}
          result={QuizResultMaker(meta, session?.responses as any)}
        />
      )}
    </Modal>
  );
};

export default QuizSlider;
import Timer from "./timer";

const Footer = ({
  value,
  answer,
  duration,
  setValue,
  actionType,
  totalQuestions,
  isLastQuestion,
  wrongAnswerAlert,
  attempedQuestions,
  defaultOrderValues,
}: any) => {
  const { saveResponse } = useQuizSession();
  const saveWithCleanUp = (response: any, isLastQuestion: any) => {
    saveResponse(response, isLastQuestion);
    setValue(null);
  };

  const handleTimeoutSkip = () => {
    saveResponse("#", isLastQuestion);
  };

  const onSubmitHandler = () => {
    if (
      actionType == "multiselect" ||
      actionType == "textinput" ||
      actionType == "order"
    ) {
      if (actionType == "textinput") {
        if (value == null || value == "") {
          saveWithCleanUp("#", isLastQuestion);
        } else {
          if (value !== answer) {
            wrongAnswerAlert(value?.toLowerCase() ?? "", isLastQuestion);
          } else {
            saveWithCleanUp(value?.toLowerCase() ?? "", isLastQuestion);
          }
        }
      }

      if (actionType == "multiselect") {
        if (value == null || value.length == 0) {
          saveWithCleanUp("#", isLastQuestion);
        } else {
          if (!validateArrays(answer as string[], value as string[])) {
            wrongAnswerAlert(value, isLastQuestion);
          } else {
            saveWithCleanUp(value, isLastQuestion);
          }
        }
      }

      if (actionType == "order") {
        if (value == null || value.length == 0) {
          saveWithCleanUp("#", isLastQuestion);
        } else {
          if (!compareArrays(answer as string[], value as string[])) {
            wrongAnswerAlert(value ?? defaultOrderValues, isLastQuestion);
          } else {
            saveWithCleanUp(value ?? defaultOrderValues, isLastQuestion);
          }
        }
      }
    } else {
      saveWithCleanUp("#", isLastQuestion);
    }
  };

  return (
    <div className="bg-black-- md:h-[100px] h-[70px] rounded-xl md:grid md:grid-cols-2 flex px-5 gap-5 ">
      <div className="flex items-center gap-5">
        <p className="text-black text-xl md:w-[65px] md:h-[65px] w-[50px] h-[50px]  rounded-xl center font-semibold">
          {attempedQuestions}/{totalQuestions}
        </p>
        <QuizAudioPlayer />
        {duration !== 0 && duration !== null && (
          <Timer timeout={handleTimeoutSkip} duration={duration} />
        )}
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={onSubmitHandler}
          className="bg-black text-white md:px-20 md:h-[65px] h-[50px] text-md px-8 rounded-full md:text-xl center gap-3 font-semibold font-heading"
        >
          <span className="hidden md:inline-block">Next</span> <BsArrowRight />
        </button>
      </div>
    </div>
  );
};
