import { RecommendationItem } from "@/types";

export const trafficFlowRecommendations: RecommendationItem[] = [
  {
    category: "Edge Devices",
    details: "Deploy edge signal controllers at intersections for real-time (<1s) adjustments.",
    estimatedBudget: "Medium",
    deploymentComplexity: "High",
  },
  {
    category: "Deployment Model",
    details: "Use Edge–Cloud Hybrid: edge for local optimization, cloud for city-wide policy.",
    estimatedBudget: "Medium",
    deploymentComplexity: "Medium",
  },
  {
    category: "Fleet Integration",
    details: "Connect bus GPS trackers to signal controllers for green-wave routing.",
    estimatedBudget: "Medium",
    deploymentComplexity: "Medium",
  },
  {
    category: "Roadmap",
    details: "Prototype in one corridor → expand to city center → roll out network-wide.",
    estimatedBudget: "Medium",
    deploymentComplexity: "High",
  },
];


export const safetyRecommendations: RecommendationItem[] = [
  {
    category: "Onboard Edge Analytics",
    details: "Run lightweight AI on dashcams for near-crash detection & unsafe driving behavior.",
    estimatedBudget: "Low",
    deploymentComplexity: "Medium",
  },
  {
    category: "Data Handling",
    details: "Send metadata (event ID, GPS, time) to cloud, keep personal data local for GDPR.",
    estimatedBudget: "Low",
    deploymentComplexity: "Low",
  },
  {
    category: "Connectivity",
    details: "Store alerts locally when offline; auto-sync in rural low-connectivity zones.",
    estimatedBudget: "Low",
    deploymentComplexity: "Medium",
  },
  {
    category: "Roadmap",
    details: "Pilot on 10 vehicles → expand to 50 → integrate with regional safety authority.",
    estimatedBudget: "Low",
    deploymentComplexity: "Medium",
  },
];


export const predictiveMaintenanceRecommendations: RecommendationItem[] = [
  {
    category: "Edge Servers",
    details: "Deploy depot edge servers and onboard train nodes to process IoT sensor data.",
    estimatedBudget: "High",
    deploymentComplexity: "High",
  },
  {
    category: "Analytics",
    details: "Use AI/ML models to detect anomalies (brakes, vibration, HVAC) for predictive scheduling.",
    estimatedBudget: "High",
    deploymentComplexity: "High",
  },
  {
    category: "Storage",
    details: "Hybrid storage: local logs for compliance, non-sensitive data uploaded to dashboards.",
    estimatedBudget: "High",
    deploymentComplexity: "Medium",
  },
  {
    category: "Roadmap",
    details: "Phase 1: Brakes → Phase 2: Engines & HVAC → Phase 3: Full metro system.",
    estimatedBudget: "High",
    deploymentComplexity: "High",
  },
];

