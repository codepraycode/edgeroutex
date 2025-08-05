
export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  implementationSteps: string[];
  estimatedImpact: string;
  costEstimate: 'low' | 'medium' | 'high';
  compatibility?: number; // Optional 0-1 score
  technicalComplexity?: 'low' | 'medium' | 'high'; // Optional technical difficulty
  timeToImplement?: string; // Optional estimated timeline (e.g., "2-4 weeks")
  requiredResources?: {
    hardware?: string[];
    software?: string[];
    expertise?: string[];
  };
  relatedCaseStudies?: string[]; // Array of case study IDs
  regulatoryConsiderations?: string[];
  riskFactors?: {
    description: string;
    mitigation: string;
  }[];
}