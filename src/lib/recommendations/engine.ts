
type TransportationContext = {
  fleetSize: number;
  vehicleType: 'mixed' | 'trucks' | 'buses' | 'emergency';
  dataNeeds: ('real-time' | 'predictive' | 'historical')[];
  environment: 'urban' | 'rural' | 'highway';
  currentInfra: 'cloud' | 'on-prem' | 'hybrid' | 'none';
  latencySensitivity: 'high' | 'medium' | 'low';
  budget: 'low' | 'medium' | 'high';
};

type Recommendation = {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  implementationSteps: string[];
  estimatedImpact: string;
  costEstimate: 'low' | 'medium' | 'high';
  compatibility: number; // 0-1 score
};

export function generateRecommendations(input: TransportationContext): Recommendation[] {
  const baseRecommendations: Recommendation[] = [];
  
  // Edge AI recommendation (conditionally added)
  if (input.dataNeeds.includes('real-time') && input.latencySensitivity === 'high') {
    baseRecommendations.push({
      id: 'edge-ai',
      title: 'Edge AI for Real-time Processing',
      description: 'Implement edge AI nodes for processing camera and sensor data locally to reduce latency.',
      priority: 'high',
      implementationSteps: [
        'Assess current sensor suite',
        'Select edge hardware with NPU support',
        'Develop lightweight ML models',
        'Deploy to pilot vehicles'
      ],
      estimatedImpact: 'Reduce latency by 70-90% for real-time decisions',
      costEstimate: input.budget === 'low' ? 'medium' : 'high',
      compatibility: 0.9
    });
  }

  // Data filtering recommendation
  if (input.fleetSize > 50 || input.dataNeeds.includes('historical')) {
    baseRecommendations.push({
      id: 'data-filtering',
      title: 'Edge-based Data Filtering',
      description: 'Use edge nodes to filter and preprocess data before cloud transmission.',
      priority: input.fleetSize > 100 ? 'high' : 'medium',
      implementationSteps: [
        'Identify high-volume data sources',
        'Implement filtering algorithms',
        'Establish data retention policies'
      ],
      estimatedImpact: 'Reduce cloud storage costs by 40-60%',
      costEstimate: 'low',
      compatibility: 0.8
    });
  }

  // Connectivity recommendation for rural areas
  if (input.environment === 'rural') {
    baseRecommendations.push({
      id: 'offline-capable',
      title: 'Offline-capable Edge Nodes',
      description: 'Implement solutions that can operate without constant cloud connection.',
      priority: 'high',
      implementationSteps: [
        'Select hardware with local storage',
        'Implement data synchronization protocols',
        'Test in disconnected scenarios'
      ],
      estimatedImpact: 'Maintain 95% functionality during connectivity outages',
      costEstimate: 'medium',
      compatibility: 0.85
    });
  }

  // Sort by priority and compatibility
  return baseRecommendations.sort((a, b) => {
    if (a.priority === b.priority) {
      return b.compatibility - a.compatibility;
    }
    return a.priority === 'high' ? -1 : b.priority === 'high' ? 1 : a.priority === 'medium' ? -1 : 1;
  });
}