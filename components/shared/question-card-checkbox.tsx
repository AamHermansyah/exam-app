'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Answer } from "@/lib/generated/prisma";
import { cn } from "@/lib/utils";
import React from "react";

type QuestionCardCheckboxProps = {
  question?: string;
  answers: Answer[];
  selectedAnswers?: string[];
  readOnly?: boolean;
  onSelectAnswer?: (id: string) => void;
  correctAnswers?: string[];
  imageUrl?: string | null;
  imageLabel?: string | null;
  /** For custom question */
  children?: React.ReactNode;
};

const QuestionCardCheckbox: React.FC<QuestionCardCheckboxProps> = ({
  question,
  answers,
  selectedAnswers = [],
  onSelectAnswer,
  correctAnswers = [],
  imageUrl,
  imageLabel,
  children
}) => {
  return (
    <div className="space-y-2 text-sm sm:text-base">
      {children ? (
        children
      ) : (
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
        {answers.map((ans) => {
          const isSelected = selectedAnswers.some((id) => id === ans.id);
          const isCorrect = correctAnswers.some((id) => id === ans.id);
          const isWrongSelection = correctAnswers.length > 0 && isSelected && !isCorrect;
          const isIncorrect = !correctAnswers.every((id) => {
            return selectedAnswers.some((selectedId) => selectedId === id);
          });

          return (
            <label
              key={`cbx-${ans.id}`}
              className={cn(
                'rounded-md border p-2 flex items-center cursor-pointer',
                isCorrect ? 'bg-emerald-100 border-emerald-500' : 'bg-pure-white hover:bg-gray-50',
                isWrongSelection && 'bg-red-100 border-red-500 hover:bg-red-100',
                isSelected && !correctAnswers.length && 'border-primary bg-primary/10 hover:bg-primary/20'
              )}
            >
              <Checkbox
                name={`cbx-${ans.id}`}
                className={cn(
                  'mr-2 disabled:cursor-default disabled:opacity-100',
                  isCorrect && '!bg-emerald-500 !border-emerald-500',
                  isSelected && isIncorrect && '!bg-red-500 !border-red-500'
                )}
                checked={isSelected || isCorrect}
                disabled={!!correctAnswers.length}
                onCheckedChange={() => onSelectAnswer && onSelectAnswer(ans.id)}
              />
              <span className={cn(
                'text-sm',
                isSelected && 'font-semibold'
              )}>
                {ans.answerText}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCardCheckbox;
