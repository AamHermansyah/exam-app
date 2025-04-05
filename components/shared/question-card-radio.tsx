'use client'

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils";
import React from "react";

export type Answer = {
  id: string;
  text: string;
};

type QuestionCardRadioProps = {
  question?: string;
  answers: Answer[];
  selectedAnswer?: string;
  readOnly?: boolean;
  onSelectAnswer?: (id: string) => void;
  correctAnswer?: string;
  /** For custom question */
  children?: React.ReactNode;
};

const QuestionCardRadio: React.FC<QuestionCardRadioProps> = ({
  question,
  answers,
  selectedAnswer,
  onSelectAnswer,
  correctAnswer,
  children
}) => {
  return (
    <div className="space-y-2 text-sm sm:text-base">
      {!!children ? children : (
        <p className="font-medium">
          {question || 'Question is empty'}
        </p>
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
                  'block flex-1 text-sm cursor-pointer',
                  selectedAnswer === ans.id && !correctAnswer && 'font-semibold'
                )}
              >
                {ans.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuestionCardRadio;
