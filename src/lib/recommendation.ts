
export type SimulationInput = {
  fleetSize: number;
  useCase: string;
  concerns: string[];
};

export function generateRecommendations({ fleetSize, useCase, concerns }: SimulationInput): string[] {
  const recs: string[] = [];

  if (fleetSize > 50) recs.push("[Scalability] Consider distributed edge nodes to handle large data loads.");
  if (concerns.includes("Low latency")) recs.push("[Performance] Deploy edge gateways close to vehicles.");
  if (concerns.includes("Unstable connectivity")) recs.push("[Reliability] Implement offline-first strategies and local caching.");
  if (concerns.includes("Limited power")) recs.push("[Efficiency] Use energy-efficient edge devices like NVIDIA Jetson or Raspberry Pi.");
  if (concerns.includes("Data privacy")) recs.push("[Security] Process sensitive data locally before syncing to the cloud.");

  switch (useCase) {
    case "crash_detection":
      recs.push("[Safety] Use edge AI for real-time crash prediction and instant alerts.");
      break;
    case "route_optimization":
      recs.push("[Mobility] Analyze traffic patterns at the edge to dynamically reroute vehicles.");
      break;
    case "predictive_maintenance":
      recs.push("[Operations] Stream sensor data to edge nodes for real-time equipment health checks.");
      break;
  }

  return recs;
}