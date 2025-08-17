import { RecommendationItem, RoadmapPhase, SelectOption } from "@/types/form.types";
import { Link2, Settings, Zap } from "lucide-react";

export const deviceOptions = [
    { label: "<10", value: "<10" },
    { label: "<20", value: "<20" },
    { label: "25-50", value: "25-50" },
    { label: ">50", value: ">50" },
];


export  const infrastructureOptions: SelectOption[] = [
    { label: "Cloud only", value: "cloud" },
    { label: "On-premises only", value: "onprem" },
    { label: "Hybrid cloud", value: "hybrid" },
    { label: "Multi-cloud", value: "multicloud" },
];


export const sampleData: RecommendationItem[] = [
    {
      category: "Hardware",
      details: "Robust edge device for data processing.",
      estimatedBudget: "$5000-$7000",
      deploymentComplexity: "Medium"
    },
    {
      category: "Software stack",
      details: "Optimized software for real-time analytics.",
      estimatedBudget: "$2000-$9000",
      deploymentComplexity: "Low"
    },
    {
      category: "Network Infrastructure",
      details: "High-bandwidth connectivity solutions for edge locations.",
      estimatedBudget: "$3000-$5000",
      deploymentComplexity: "High"
    },
    {
      category: "Security Framework",
      details: "Comprehensive security protocols for edge computing environment.",
      estimatedBudget: "$1500-$4000",
      deploymentComplexity: "Medium"
    }
  ];


export const roadmapPhases: RoadmapPhase[] = [
    {
      id: 1,
      title: "Phase 1 Setup",
      duration: "2 weeks",
      status: "completed",
      icon: Settings
    },
    {
      id: 2,
      title: "Phase 2 Integration",
      duration: "4 weeks",
      status: "in-progress",
      icon: Link2
    },
    {
      id: 3,
      title: "Phase 3 Optimization",
      duration: "Ongoing",
      status: "upcoming",
      icon: Zap
    }
  ];