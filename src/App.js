import { useState } from "react";
import clsx from "clsx";
import { Stepper } from "./components/stepper";
import "./App.css";

const steps = ["Details", "Payment", "Confirmation"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const gotoStep = (stepIndex) => {
    if (stepIndex === steps.length || stepIndex < 0) {
      return null;
    }
    setActiveStep(stepIndex)
  }

  return (
    <div className="p-0 laptop:p-12">
      <Stepper steps={steps} activeStep={activeStep} gotoStep={gotoStep} />
      <div className="p-12">
        <button
          className={clsx(
            "rounded-md text-white px-8 py-4",
            { "bg-primary": !isLastStep },
            { "bg-secondary": isLastStep }
          )}
          onClick={() => gotoStep(activeStep + 1)}
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
