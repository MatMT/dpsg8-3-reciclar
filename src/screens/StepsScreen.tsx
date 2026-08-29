import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import StepScreen from './StepScreen';

interface Step {
  step: number;
  description: string;
}

interface StepsScreenProps {
  steps: Step[];
  navigation: NavigationProp<ParamListBase>;
}

const StepsScreen = ({ steps, navigation }: StepsScreenProps) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Si estamos en el último paso, podemos navegar a otra pantalla o reiniciar los pasos
      setCurrentStep(0); // Reiniciamos los pasos en lugar de navegar a una pantalla que no existe
    }
  };

  return (
    <StepScreen
      step={steps[currentStep].step}
      description={steps[currentStep].description}
      onNextStep={handleNextStep}
    />
  );
};

export default StepsScreen;
