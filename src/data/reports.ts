import { IndustryReport } from "@/types/report.types";

export const reports: IndustryReport[] = [
  {
    summary: {
      slug: "urban-mobility",
      title: "Urban Mobility & Transit",
      subtitle: "Edge, AI, and resilient networks for next-gen transport.",
      heroStats: [
        { label: "Avg. Latency Target", value: "< 100ms" },
        { label: "Typical Fleet Size", value: "250–2,000 vehicles" },
        { label: "CapEx Window", value: "6–24 months" },
      ],
      tags: ["Edge", "Smart Cities", "5G", "AI"],
      updatedAt: "2025-08-01",
    },
    executiveSummary:
      "Urban mobility operators are shifting to edge-first architectures to reduce latency for safety, traffic flow optimization, and predictive maintenance. Hybrid models dominate, with privacy-preserving analytics on-vehicle and policy orchestration in cloud.",
    trends: [
      { title: "Edge-first safety analytics", description: "Near-crash detection, behavior scoring, and policy triggers executed on-device for sub-100ms actions." },
      { title: "Hybrid inference lifecycle", description: "Model training & MLOps in cloud, distillation to edge, and periodic on-vehicle updates." },
      { title: "Multi-access connectivity", description: "Seamless failover between 5G, LTE, and Wi-Fi mesh with store-and-forward buffers." },
    ],
    benchmarks: [
      { metric: "Event-to-Alert Latency", yourOrg: 120, industryAvg: 160, topQuartile: 80, unit: "ms" },
      { metric: "Uptime (Depot Edge)", yourOrg: 99.3, industryAvg: 98.7, topQuartile: 99.8, unit: "%" },
      { metric: "On-vehicle CPU Utilization @ peak", yourOrg: 68, industryAvg: 74, topQuartile: 55, unit: "%" },
      { metric: "Video Retention Local", yourOrg: 72, industryAvg: 48, topQuartile: 96, unit: "hours" },
    ],
    vendors: [
      { name: "Advantech", category: "Edge HW", strengths: ["Ruggedized SKUs", "Wide temp range"] },
      { name: "NVIDIA", category: "Edge HW", strengths: ["GPU acceleration", "Rich SDK (Jetson)"] },
      { name: "Azure IoT Edge", category: "Platforms", strengths: ["Device twin", "DPS provisioning"] },
      { name: "EMQX", category: "Connectivity", strengths: ["MQTT at scale", "Bridge to Kafka"] },
    ],
  },
];
