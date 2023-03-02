import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
  totalsteps: number,
  currentStep?: number
}

export function MultiStep({ totalsteps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>Passo {currentStep} de {totalsteps}</Label>

      <Steps css={{ '--total-steps': totalsteps }}>
        {Array.from({ length: totalsteps }, (_, i) => i + 1).map(step => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>

  )
}

MultiStep.displayName = 'MultiStep'