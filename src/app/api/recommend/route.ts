import { generateRecommendations } from '@/lib/recommendations/engine';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const inputData = await request.json();
    const recommendations = generateRecommendations(inputData);
    
    return NextResponse.json({ recommendations }, { status: 200 });
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}