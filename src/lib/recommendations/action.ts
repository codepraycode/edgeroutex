import { Recommendation } from './types';

export async function getRecommendations(): Promise<Recommendation[]> {
  return [
      {
        id: "edge-ai-001",
        title: "Edge AI for Real-time Processing",
        description: "Implement edge AI nodes for processing camera and sensor data locally to reduce latency.",
        priority: "high",
        implementationSteps: [
          "Assess current sensor suite",
          "Select edge hardware with NPU support",
          "Develop lightweight ML models",
          "Deploy to pilot vehicles"
        ],
        estimatedImpact: "Reduce latency by 70-90% for real-time decisions",
        costEstimate: "high"
      },
      {
        id: "data-filter-002",
        title: "Edge-based Data Filtering",
        description: "Use edge nodes to filter and preprocess data before cloud transmission.",
        priority: "medium",
        implementationSteps: [
          "Identify high-volume data sources",
          "Implement filtering algorithms",
          "Establish data retention policies"
        ],
        estimatedImpact: "Reduce cloud storage costs by 40-60%",
        costEstimate: "medium"
      }
    ];
}