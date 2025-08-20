import { RoadmapPhase } from "@/types/form.types";
import { Rocket, CheckCircle2, Cpu } from "lucide-react"; 

export const trafficFlowRoadmap: RoadmapPhase[] = [
  {
    id: 1,
    title: "Prototype in one corridor",
    duration: "3–6 months",
    status: "completed",
    icon: Cpu,
    details: "Deploy edge signal controllers in a limited area to test real-time optimizations.",
  },
  {
    id: 2,
    title: "Expand to city center",
    duration: "6–12 months",
    status: "in-progress",
    icon: Rocket,
    details: "Scale deployment to high-density intersections and integrate fleet GPS.",
  },
  {
    id: 3,
    title: "Network-wide rollout",
    duration: "12–24 months",
    status: "upcoming",
    icon: CheckCircle2,
    details: "Full-scale deployment across all transport corridors with cloud integration.",
  },
];

export const safetyRoadmap: RoadmapPhase[] = [
  {
    id: 1,
    title: "Pilot on 10 vehicles",
    duration: "3 months",
    status: "completed",
    icon: Cpu,
    details: "Test onboard AI analytics and local storage capabilities.",
  },
  {
    id: 2,
    title: "Expand to 50 vehicles",
    duration: "6 months",
    status: "in-progress",
    icon: Rocket,
    details: "Integrate dashcams and sensors into safety monitoring platform.",
  },
  {
    id: 3,
    title: "Integrate with authority",
    duration: "12 months",
    status: "upcoming",
    icon: CheckCircle2,
    details: "Link system to regional transport safety authority for compliance and oversight.",
  },
];

export const predictiveMaintenanceRoadmap: RoadmapPhase[] = [
  {
    id: 1,
    title: "Phase 1: Brakes Monitoring",
    duration: "6 months",
    status: "completed",
    icon: Cpu,
    details: "Deploy vibration sensors and ML models for early brake wear detection.",
  },
  {
    id: 2,
    title: "Phase 2: Engines & HVAC",
    duration: "12 months",
    status: "in-progress",
    icon: Rocket,
    details: "Expand ML-based predictive analytics to engines and climate systems.",
  },
  {
    id: 3,
    title: "Phase 3: Full metro system",
    duration: "24 months",
    status: "upcoming",
    icon: CheckCircle2,
    details: "Scale predictive maintenance across entire fleet with hybrid storage.",
  },
];
