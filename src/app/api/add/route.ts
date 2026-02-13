import { NextRequest, NextResponse } from 'next/server';
import { add } from '../../../lib/calculate';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { a, b } = body;

    const result = add(a, b);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 }
    );
  }
}
