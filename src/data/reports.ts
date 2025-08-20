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
  {
    summary: {
      slug: "industrial-manufacturing",
      title: "Industrial Manufacturing 4.0",
      subtitle: "Edge computing for predictive maintenance and quality control.",
      heroStats: [
        { label: "Response Time", value: "< 50ms" },
        { label: "Typical Deployment", value: "50–500 nodes" },
        { label: "ROI Timeline", value: "3–12 months" },
      ],
      tags: ["IIoT", "Predictive Maintenance", "Quality Control", "Robotics"],
      updatedAt: "2025-07-15",
    },
    executiveSummary:
      "Manufacturing facilities are adopting edge computing to enable real-time quality control, predictive maintenance, and robotic coordination. Local processing reduces cloud dependency and ensures continuous operation during network outages.",
    trends: [
      { title: "Real-time quality inspection", description: "Computer vision systems detecting defects at production line speeds with 99.9% accuracy." },
      { title: "Predictive maintenance", description: "Vibration and thermal analysis predicting equipment failures 7-14 days in advance." },
      { title: "Edge-native robotics", description: "Distributed coordination between robotic cells without cloud dependency." },
    ],
    benchmarks: [
      { metric: "Defect Detection Accuracy", yourOrg: 98.5, industryAvg: 95.2, topQuartile: 99.3, unit: "%" },
      { metric: "Mean Time to Repair", yourOrg: 4.2, industryAvg: 8.7, topQuartile: 2.1, unit: "hours" },
      { metric: "Production Line Uptime", yourOrg: 96.8, industryAvg: 92.3, topQuartile: 98.5, unit: "%" },
      { metric: "Energy Consumption Reduction", yourOrg: 18, industryAvg: 12, topQuartile: 25, unit: "%" },
    ],
    vendors: [
      { name: "Siemens", category: "Industrial Edge", strengths: ["PLC integration", "TIA Portal compatibility"] },
      { name: "Rockwell Automation", category: "Control Systems", strengths: ["FactoryTalk", "Legacy system support"] },
      { name: "PTC", category: "Platforms", strengths: ["ThingWorx", "AR integration"] },
      { name: "Cisco", category: "Networking", strengths: ["Industrial Ethernet", "Cybersecurity"] },
    ],
  },
  {
    summary: {
      slug: "energy-utilities",
      title: "Energy & Utilities Grid Modernization",
      subtitle: "Edge intelligence for smart grid management and renewable integration.",
      heroStats: [
        { label: "Critical Response", value: "< 20ms" },
        { label: "Grid Nodes", value: "1,000–10,000+" },
        { label: "Compliance Requirements", value: "NERC CIP" },
      ],
      tags: ["Smart Grid", "Renewables", "SCADA", "Cybersecurity"],
      updatedAt: "2025-08-10",
    },
    executiveSummary:
      "Energy providers are deploying edge computing to manage grid stability, integrate renewable sources, and prevent cascading failures. Real-time analytics enable dynamic load balancing and fault detection across distributed energy resources.",
    trends: [
      { title: "Distributed energy resource management", description: "Real-time coordination of solar, wind, and storage assets across the grid." },
      { title: "Predictive grid analytics", description: "AI-driven forecasting of load patterns and potential failure points." },
      { title: "Cybersecurity hardening", description: "Zero-trust architectures for critical infrastructure protection." },
    ],
    benchmarks: [
      { metric: "Fault Detection Time", yourOrg: 0.8, industryAvg: 2.5, topQuartile: 0.3, unit: "seconds" },
      { metric: "Renewable Integration Capacity", yourOrg: 35, industryAvg: 28, topQuartile: 45, unit: "%" },
      { metric: "Grid Stability Index", yourOrg: 98.9, industryAvg: 96.4, topQuartile: 99.5, unit: "%" },
      { metric: "Cybersecurity Compliance", yourOrg: 92, industryAvg: 85, topQuartile: 98, unit: "%" },
    ],
    vendors: [
      { name: "Schneider Electric", category: "Grid Edge", strengths: ["EcoStruxure", "Microgrid control"] },
      { name: "ABB", category: "Automation", strengths: ["Ability platform", "Substation automation"] },
      { name: "OSIsoft", category: "Data Management", strengths: ["PI System", "Historical data analysis"] },
      { name: "Honeywell", category: "Control Systems", strengths: ["SCADA expertise", "Legacy integration"] },
    ],
  },
  {
    summary: {
      slug: "healthcare-iot",
      title: "Healthcare IoT & Telemedicine",
      subtitle: "Edge computing for real-time patient monitoring and medical device management.",
      heroStats: [
        { label: "Data Processing", value: "< 100ms" },
        { label: "Device Types", value: "20–200 types" },
        { label: "Regulatory Compliance", value: "HIPAA, FDA" },
      ],
      tags: ["IoMT", "Telehealth", "Patient Safety", "HIPAA"],
      updatedAt: "2025-07-28",
    },
    executiveSummary:
      "Healthcare organizations are leveraging edge computing to process sensitive patient data locally, ensuring privacy compliance while enabling real-time monitoring and AI-assisted diagnostics at the point of care.",
    trends: [
      { title: "Real-time patient monitoring", description: "Continuous vital sign analysis with immediate alerting for critical changes." },
      { title: "Medical device integration", description: "Seamless connectivity between diverse medical equipment and EHR systems." },
      { title: "Federated learning", description: "AI model training across institutions without sharing sensitive patient data." },
    ],
    benchmarks: [
      { metric: "Alert Response Time", yourOrg: 45, industryAvg: 120, topQuartile: 30, unit: "seconds" },
      { metric: "Data Privacy Compliance", yourOrg: 99.7, industryAvg: 95.8, topQuartile: 99.9, unit: "%" },
      { metric: "Device Interoperability", yourOrg: 88, industryAvg: 72, topQuartile: 95, unit: "%" },
      { metric: "Diagnostic Accuracy Improvement", yourOrg: 23, industryAvg: 15, topQuartile: 32, unit: "%" },
    ],
    vendors: [
      { name: "Medtronic", category: "Medical Devices", strengths: ["Device ecosystem", "Clinical expertise"] },
      { name: "Philips", category: "Healthcare IT", strengths: ["Patient monitoring", "EHR integration"] },
      { name: "GE Healthcare", category: "Imaging", strengths: ["Medical imaging", "AI diagnostics"] },
      { name: "Cisco", category: "Healthcare Networking", strengths: ["Secure connectivity", "Network segmentation"] },
    ],
  }
];