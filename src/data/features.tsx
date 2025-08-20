import { 
  TrafficCone,
  ShieldAlert,
  Gauge,
  Zap,
  Network,
  TrendingUp
} from "lucide-react";

export const features = [
    {
        id: "1",
        title: "Real-Time Traffic Optimization",
        description: "Leverage edge analytics at intersections and vehicles to process live traffic data, enabling adaptive signal control and reducing congestion by up to 20%.",
        icon: <TrafficCone size={24} />,
    },
    {
        id: "2",
        title: "AI-Powered Safety Detection",
        description: "Onboard edge AI processes dashcam feeds in real-time to identify near-crash incidents and unsafe driving, with over 90% accuracy and alert times under 2 seconds.",
        icon: <ShieldAlert size={24} />,
    },
    {
        id: "3",
        title: "Predictive Maintenance Analytics",
        description: "Edge processing of vibration, temperature, and current data enables early fault detection with 7+ days warning, reducing unplanned downtime by 15-20%.",
        icon: <Gauge size={24} />,
    },
    {
        id: "4",
        title: "Live Data Integration",
        description: "Seamlessly process diverse transport data streams including traffic sensors, GPS, and IoT devices with lab latency under 150ms and throughput of 5k+ messages/second.",
        icon: <Zap size={24} />,
    },
    {
        id: "5",
        title: "Scalable Edge Architecture",
        description: "Deploy across 300+ intersections and 600+ vehicles with 99.9% availability, supporting multi-tenant APIs and enterprise-grade security hardening.",
        icon: <Network size={24} />,
    },
    {
        id: "6",
        title: "Continuous Optimization",
        description: "A/B testing, model drift monitoring, and digital-twin simulations ensure sustained performance improvements and year-on-year congestion reduction.",
        icon: <TrendingUp size={24} />,
    }
];