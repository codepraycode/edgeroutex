
export interface IndustrySummary {
  slug: string;
  title: string;
  subtitle: string;
  heroStats: { label: string; value: string }[];
  tags: string[];
  updatedAt: string; // ISO
}

export interface BenchmarkRow {
  metric: string;
  yourOrg: number;
  industryAvg: number;
  topQuartile: number;
  unit?: string;
}

export interface Vendor {
  name: string;
  category: string; // e.g., "Edge HW", "Platforms", "Connectivity"
  strengths: string[];
  cautions?: string[];
  website?: string;
}

export interface IndustryReport {
  summary: IndustrySummary;
  executiveSummary: string;
  trends: { title: string; description: string }[];
  benchmarks: BenchmarkRow[];
  vendors: Vendor[];
  notes?: string;
}
