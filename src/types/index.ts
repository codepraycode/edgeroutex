export * from "./form.types";

export interface CaseStudy {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: 'data-lake' | 'real-time-decision' | 'iot-analytics' | 'crash-detection' | 'traffic-optimization' | 'vehicle-communication';
  readMoreUrl?: string;
  tags: string[];
}