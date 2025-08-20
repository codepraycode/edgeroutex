import {
  trafficFlowRecommendations,
  safetyRecommendations,
  predictiveMaintenanceRecommendations,
} from "@/data/recommendations";
import { predictiveMaintenanceRoadmap, safetyRoadmap, trafficFlowRoadmap } from "@/data/roadmap";
import { FormData, RecommendationItem } from "@/types/form.types";

export function getRecommendations(formData: FormData): RecommendationItem[] {
  // Match by primary objective
  if (formData.primaryObjectives.includes("Improve traffic flow and congestion management")) {
    return trafficFlowRecommendations;
  }

  if (formData.primaryObjectives.includes("Enhance passenger/road user safety")) {
    return safetyRecommendations;
  }

  if (formData.primaryObjectives.includes("Enable predictive maintenance for vehicles/assets")) {
    return predictiveMaintenanceRecommendations;
  }

  // Default: empty list
  return [];
}


export function getStrategyOutputs(formData: FormData) {
  if (formData.primaryObjectives.includes("Improve traffic flow and congestion management")) {
    return {
      recommendations: trafficFlowRecommendations,
      roadmap: trafficFlowRoadmap,
    };
  }

  if (formData.primaryObjectives.includes("Enhance passenger/road user safety")) {
    return {
      recommendations: safetyRecommendations,
      roadmap: safetyRoadmap,
    };
  }

  if (formData.primaryObjectives.includes("Enable predictive maintenance for vehicles/assets")) {
    return {
      recommendations: predictiveMaintenanceRecommendations,
      roadmap: predictiveMaintenanceRoadmap,
    };
  }

  return { recommendations: [], roadmap: [] };
}