'use client'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Answer } from "@/lib/generated/prisma";
import { cn } from "@/lib/utils";
import React from "react";

type QuestionCardRadioProps = {
  question?: string;
  answers: Answer[];
  selectedAnswer?: string;
  readOnly?: boolean;
  onSelectAnswer?: (id: string) => void;
  correctAnswer?: string;
  imageUrl?: string | null;
  imageLabel?: string | null;
  /** For custom question */
  children?: React.ReactNode;
};

const QuestionCardRadio: React.FC<QuestionCardRadioProps> = ({
  question,
  answers,
  selectedAnswer,
  onSelectAnswer,
  correctAnswer,
  imageUrl,
  imageLabel,
  children
}) => {
  return (
    <div className="space-y-2 text-sm sm:text-base">
      {!!children ? children : (
        <div>
          {!!imageUrl && (
            <div className="pb-2 space-y-1.5">
              <img
                src={imageUrl}
                alt="image-question"
                className="object-contain mx-auto"
              />
              {imageLabel && <p className="text-center text-xs text-muted-foreground">{imageLabel}</p>}
            </div>
          )}
          <p className="text-justify">
            {(question || 'Question is empty')
              .split('\n')
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </div>
      )}
      <div className="space-y-2">
        <RadioGroup
          value={selectedAnswer}
          onValueChange={(value) => {
            if (onSelectAnswer) onSelectAnswer(value);
          }}
        >
          {answers.map((ans) => (
            <div
              key={ans.id}
              className={cn(
                'w-full rounded-md border p-2 cursor-pointer flex space-x-2 items-center',
                correctAnswer === ans.id
                  ? 'bg-emerald-100 border-emerald-500'
                  : 'bg-pure-white hover:bg-gray-50',
                !!correctAnswer &&
                correctAnswer !== selectedAnswer &&
                selectedAnswer === ans.id &&
                'bg-red-100 border-red-500 hover:bg-red-100',
                selectedAnswer === ans.id && !correctAnswer && 'border-primary bg-primary/10 hover:bg-primary/20'
              )}
            >
              <RadioGroupItem
                value={ans.id}
                id={ans.id === correctAnswer ? `c-a-${correctAnswer}` : `q-${ans.id}`}
                checked={selectedAnswer === ans.id || correctAnswer === ans.id}
              />
              <Label
                htmlFor={`q-${ans.id}`}
                className={cn(
                  'block flex-1 text-sm cursor-pointer font-normal',
                  selectedAnswer === ans.id && 'font-semibold'
                )}
              >
                {ans.answerText}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuestionCardRadio;
