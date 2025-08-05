// src/lib/recommendations/actions.ts
import api from '../api/client';
import { Recommendation } from './types';


const API_URL = 'http://localhost:3001';

export async function getRecommendations(userId: string): Promise<Recommendation[]> {
  try {
    // First get user's scenario data from JSON Server
    const userResponse = await api.get(`${API_URL}/users/${userId}`);
    const userScenario = userResponse.data.scenario; // Assuming scenario data is stored in user object
    
    // Then get recommendations based on scenario
    const response = await api.get(`${API_URL}/recommendations`, {
      params: {
        environment: userScenario.environment,
        vehicleType: userScenario.vehicleType,
        dataNeeds: userScenario.dataNeeds.join(',')
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    
    // Fallback to mock data if JSON Server fails
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
}