import {
  trafficFlowRecommendations,
  safetyRecommendations,
  predictiveMaintenanceRecommendations,
} from "@/data/recommendations";
import { predictiveMaintenanceRoadmap, safetyRoadmap, trafficFlowRoadmap } from "@/data/roadmap";
import { FormData, RecommendationFormData, RecommendationItem } from "@/types/form.types";

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


export function getStrategyOutputs(formData: RecommendationFormData) {
  // Collect matches (in case multiple objectives apply)
  const outputs: {
    recommendations: any[];
    roadmap: any[];
  }[] = [];

  if (
    formData.primaryObjectives.includes(
      "Improve traffic flow and congestion management"
    )
  ) {
    outputs.push({
      recommendations: trafficFlowRecommendations,
      roadmap: trafficFlowRoadmap,
    });
  }

  if (
    formData.primaryObjectives.includes(
      "Enhance passenger/road user safety"
    )
  ) {
    outputs.push({
      recommendations: safetyRecommendations,
      roadmap: safetyRoadmap,
    });
  }

  if (
    formData.primaryObjectives.includes(
      "Enable predictive maintenance for vehicles/assets"
    )
  ) {
    outputs.push({
      recommendations: predictiveMaintenanceRecommendations,
      roadmap: predictiveMaintenanceRoadmap,
    });
  }

  // Merge if multiple apply
  const merged = {
    recommendations: outputs.flatMap((o) => o.recommendations),
    roadmap: outputs.flatMap((o) => o.roadmap),
  };

  return merged;
}