// src/lib/case-studies/data.ts
import api from '@/lib/api/client';

export type CaseStudy = {
  id: number;
  title: string;
  description: string;
  environment: 'urban' | 'rural' | 'highway';
  vehicleType: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
};

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await api.get('/caseStudies');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch case studies:', error);
    return [];
  }
}

export async function getCaseStudyById(id: number): Promise<CaseStudy | null> {
  try {
    const response = await api.get(`/caseStudies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch case study ${id}:`, error);
    return null;
  }
}

export async function createCaseStudy(data: Omit<CaseStudy, 'id'>): Promise<CaseStudy | null> {
  try {
    const response = await api.post('/caseStudies', data);
    return response.data;
  } catch (error) {
    console.error('Failed to create case study:', error);
    return null;
  }
}

export async function updateCaseStudy(id: number, data: Partial<CaseStudy>): Promise<CaseStudy | null> {
  try {
    const response = await api.patch(`/caseStudies/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to update case study ${id}:`, error);
    return null;
  }
}

export async function deleteCaseStudy(id: number): Promise<boolean> {
  try {
    await api.delete(`/caseStudies/${id}`);
    return true;
  } catch (error) {
    console.error(`Failed to delete case study ${id}:`, error);
    return false;
  }
}