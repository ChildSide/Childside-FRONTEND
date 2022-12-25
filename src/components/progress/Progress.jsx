import React from 'react'
import './progress.scss';

export default function Progress() {
  const step1Content = <h1>Complaint is filed</h1>;
  const step2Content = <h1>Action is being taken</h1>;
  const step3Content = <h1>Child Recovered</h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      {/* <StepProgressBar
        startingStep={2}
        steps={[
          {
            label: "Briefing",
            name: "Briefing",
            content: step1Content,
            buttonWrapperClass:'sad'
          },
          {
            label: "Image-Acquisition",
            name: "Image-Acquisition",
            content: step2Content
          },
          {
            label: "Image-processing",
            name: "Image Processing",
            content: step3Content,
            validator: step2Validator
          },
          {
            label: "Image-processing",
            name: "Image Processing",
            content: step3Content,
            validator: step2Validator
          },
          {
            label: "Finish",
            name: "Finish",
            content: step3Content
          }
        ]}
      /> */}
    </div>
  );
}
