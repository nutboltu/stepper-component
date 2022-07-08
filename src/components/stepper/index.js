import React from "react";
import clsx from "clsx";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const StepperIndex = ({ value, isActive }) => (
  <div
    className={clsx(
      "h-10 w-10 rounded-full flex items-center justify-center",
      { "bg-secondary": !isActive },
      { "bg-white": isActive }
    )}
  >
    <span
      className={clsx(
        "font-bold",
        { "text-white": !isActive },
        { "text-secondary": isActive }
      )}
    >
      {value}
    </span>
  </div>
);

const StepperName = ({ name, isActive }) => (
  <span
    className={clsx(
      "text-xl font-bold",
      { "text-secondary": !isActive },
      { "text-white": isActive }
    )}
  >
    {name}
  </span>
);

export const Stepper = ({ steps, activeStep, gotoStep }) => {
  if (!steps.length) {
    return <p>No steps found!</p>;
  }
  return (
    <>
      <div className="bg-primary p-12 rounded-xl justify-center hidden laptop:flex">
        {steps.map((stepName, index) => {
          const isActive = index === activeStep;
          return (
            <div className="flex items-center space-x-4 mr-4" role="button" onClick={() => gotoStep(index)}>
              <StepperIndex value={index + 1} isActive={isActive} />
              <StepperName name={stepName} isActive={isActive} />
              {index + 1 === steps.length ? null : (
                <span className="border-2 border-secondary w-16"></span>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-primary text-secondary p-12 flex justify-center items-center flex-col rounded-bl-3xl rounded-br-3xl laptop:hidden">
        {activeStep === 0 ? null : (
          <ArrowLeftIcon
            className="text-white w-5 h-5 absolute left-2 top-10 cursor-pointer"
            onClick={() => gotoStep(activeStep - 1)}
          />
        )}
        <div className="font-bold text-2xl leading-relaxed mb-5">ZOKU</div>
        <div className="flex flex-row space-x-4 items-center">
          <StepperIndex value={activeStep + 1} isActive={false} />
          <div className="flex flex-col">
            <StepperName name={steps[activeStep]} isActive={false} />
            <span className="text-white text-xs">
              Step {activeStep + 1} / {steps.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
