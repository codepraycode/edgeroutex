import { LucideIcon } from "lucide-react";
import { ChangeEvent, MouseEvent, ReactNode } from "react";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface BaseFormProps {
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export interface FormSelectProps extends BaseFormProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: (string | SelectOption)[];
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export interface FormTextareaProps extends BaseFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  disabled?: boolean;
  name?: string;
  id?: string;
  showCharacterCount?: boolean;
}

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormRadioGroupProps extends BaseFormProps {
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: (string | RadioOption)[];
  disabled?: boolean;
  layout?: 'vertical' | 'horizontal';
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';

export interface FormButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  className?: string;
  fullWidth?: boolean;
}

export interface FormInputProps extends BaseFormProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
}


export interface Step {
  id: number | string;
  title: string;
  completed?: boolean;
  active?: boolean;
  disabled?: boolean;
}


export interface StepIndicatorProps {
  steps: Step[];
  currentStep: number | string;
  onStepClick?: (stepId: number | string) => void;
  className?: string;
  variant?: 'default' | 'minimal' | 'numbered';
  orientation?: 'horizontal' | 'vertical';
  showConnector?: boolean;
}

export interface SlideProps<T = any> {
  formData: T;
  errors: Partial<T>;
  onDataChange: <K extends keyof T>(field: K, value: T[K]) => void;
  onNext: () => void;
  onBack: () => void;
  isLoading?: boolean;
  isLastStep?: boolean;
  isFirstStep?: boolean;
}

export interface SlideConfig {
  id: number;
  title: string;
  component: React.ComponentType<SlideProps>;
  validationRules?: ValidationRule[];
}

export interface ValidationRule {
  field: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any, formData: any) => string | undefined;
  message?: string;
}


export type FormData = any;



// Types for the table data
export interface RecommendationItem {
  category: string;              // e.g., "Edge Devices", "Deployment Model"
  details: string;               // recommendation description
  estimatedBudget: 'Low' | 'Medium' | 'High';
  deploymentComplexity: 'Low' | 'Medium' | 'High';
}

export interface RecommendationTableProps {
  data: RecommendationItem[];
  className?: string;
}


export interface RoadmapPhase {
  id: number;
  title: string;
  duration: string; // e.g. "3 months"
  status: "completed" | "in-progress" | "upcoming";
  icon: React.ComponentType<any>; // Lucide icon component
  details?: string;
}

export interface RoadmapProps {
  phases: RoadmapPhase[];
  architectureDiagramUrl?: string;
  className?: string;
}

export interface CheckboxOption {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface FormCheckboxGroupProps {
    label?: string;
    name: string;
    values: string[]; // list of selected values
    onChange: (values: string[]) => void;
    options: (string | CheckboxOption)[];
    required?: boolean;
    error?: string;
    disabled?: boolean;
    className?: string;
    layout?: "vertical" | "horizontal";
}
