// src/components/recommendations/RoadmapGenerator.tsx
"use client";

import { Recommendation } from "@/lib/recommendations/types";
import { saveAs } from "file-saver";
import { useState } from "react";

type RoadmapGeneratorProps = {
    recommendations: Recommendation[];
};

type Format = "text" | "markdown" | "html";

export default function RoadmapGenerator({
    recommendations,
}: RoadmapGeneratorProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [format, setFormat] = useState<Format>("text");

    const generateRoadmap = () => {
        setIsGenerating(true);
        const now = new Date();
        const dateString = now.toISOString().split("T")[0];

        let content = "";
        let extension = ".txt";
        let mimeType = "text/plain;charset=utf-8";

        // Format-specific content generation
        if (format === "markdown") {
            content = generateMarkdownContent(dateString);
            extension = ".md";
        } else if (format === "html") {
            content = generateHTMLContent(dateString);
            extension = ".html";
            mimeType = "text/html;charset=utf-8";
        } else {
            content = generateTextContent(dateString);
        }

        const blob = new Blob([content], { type: mimeType });
        saveAs(blob, `edge-computing-roadmap-${dateString}${extension}`);
        setIsGenerating(false);
    };

    const generateTextContent = (dateString: string) => {
        let content = `EDGE COMPUTING IMPLEMENTATION ROADMAP\n`;
        content += `Generated on: ${dateString}\n`;
        content += `====================================\n\n`;
        content += `RECOMMENDATIONS\n\n`;

        recommendations.forEach((rec, index) => {
            content += `${index + 1}. ${rec.title.toUpperCase()}\n`;
            content += `   Priority: ${rec.priority.toUpperCase()}\n`;
            content += `   Impact: ${rec.estimatedImpact}\n`;
            content += `   Cost: ${rec.costEstimate.toUpperCase()}\n\n`;
            content += `   IMPLEMENTATION STEPS:\n`;

            rec.implementationSteps.forEach((step, i) => {
                content += `   ${i + 1}. ${step}\n`;
            });

            content += `\n`;
        });

        content += `TIMELINE\n\n`;
        content += `Month 1-2: Initial assessment and pilot planning\n`;
        content += `Month 3-4: Hardware procurement and testing\n`;
        content += `Month 5-6: Pilot implementation and evaluation\n`;
        content += `Month 7+: Full deployment and optimization\n`;

        return content;
    };

    const generateMarkdownContent = (dateString: string) => {
        let content = `# Edge Computing Implementation Roadmap\n\n`;
        content += `**Generated on:** ${dateString}\n\n`;
        content += `## Recommendations\n\n`;

        recommendations.forEach((rec, index) => {
            content += `### ${index + 1}. ${rec.title}\n\n`;
            content += `- **Priority:** ${rec.priority}\n`;
            content += `- **Impact:** ${rec.estimatedImpact}\n`;
            content += `- **Cost:** ${rec.costEstimate}\n\n`;
            content += `#### Implementation Steps:\n\n`;

            rec.implementationSteps.forEach((step, i) => {
                content += `${i + 1}. ${step}\n`;
            });

            content += `\n`;
        });

        content += `## Suggested Timeline\n\n`;
        content += `1. **Month 1-2:** Initial assessment and pilot planning\n`;
        content += `2. **Month 3-4:** Hardware procurement and testing\n`;
        content += `3. **Month 5-6:** Pilot implementation and evaluation\n`;
        content += `4. **Month 7+:** Full deployment and optimization\n`;

        return content;
    };

    const generateHTMLContent = (dateString: string) => {
        let content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edge Computing Roadmap</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
    h2 { color: #2980b9; margin-top: 30px; }
    h3 { color: #16a085; }
    .recommendation { margin-bottom: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; }
    .priority-high { border-left: 4px solid #e74c3c; }
    .priority-medium { border-left: 4px solid #f39c12; }
    .priority-low { border-left: 4px solid #2ecc71; }
    .timeline { margin-top: 40px; }
    .footer { margin-top: 40px; font-size: 0.9em; color: #7f8c8d; text-align: center; }
  </style>
</head>
<body>
  <h1>Edge Computing Implementation Roadmap</h1>
  <p><strong>Generated on:</strong> ${dateString}</p>
  
  <h2>Recommendations</h2>`;

        recommendations.forEach((rec, index) => {
            content += `
  <div class="recommendation priority-${rec.priority}">
    <h3>${index + 1}. ${rec.title}</h3>
    <ul>
      <li><strong>Priority:</strong> ${rec.priority}</li>
      <li><strong>Impact:</strong> ${rec.estimatedImpact}</li>
      <li><strong>Cost:</strong> ${rec.costEstimate}</li>
    </ul>
    
    <h4>Implementation Steps:</h4>
    <ol>`;

            rec.implementationSteps.forEach((step) => {
                content += `\n      <li>${step}</li>`;
            });

            content += `
    </ol>
  </div>`;
        });

        content += `
  <div class="timeline">
    <h2>Suggested Timeline</h2>
    <ol>
      <li><strong>Month 1-2:</strong> Initial assessment and pilot planning</li>
      <li><strong>Month 3-4:</strong> Hardware procurement and testing</li>
      <li><strong>Month 5-6:</strong> Pilot implementation and evaluation</li>
      <li><strong>Month 7+:</strong> Full deployment and optimization</li>
    </ol>
  </div>
  
  <div class="footer">
    <p>Generated by Edge Computing Advisory Tool</p>
  </div>
</body>
</html>`;

        return content;
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
                <button
                    onClick={generateRoadmap}
                    disabled={isGenerating}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition disabled:opacity-50"
                >
                    {isGenerating ? "Generating..." : "Download Roadmap"}
                </button>

                <div className="flex items-center space-x-2">
                    <label
                        htmlFor="format"
                        className="text-sm font-medium text-gray-700"
                    >
                        Format:
                    </label>
                    <select
                        id="format"
                        value={format}
                        onChange={(e) => setFormat(e.target.value as Format)}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                    >
                        <option value="text">Plain Text</option>
                        <option value="markdown">Markdown</option>
                        <option value="html">HTML</option>
                    </select>
                </div>
            </div>

            {isGenerating && (
                <div className="text-sm text-gray-500 flex items-center">
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Preparing your roadmap...
                </div>
            )}
        </div>
    );
}
