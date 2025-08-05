
import { NextRequest, NextResponse } from 'next/server';
import { generateRecommendations } from '@/lib/recommendation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const recommendations = generateRecommendations(body);
    return NextResponse.json({ recommendations });
  } catch (e) {
    console.error("Error Occured", e);
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
}
