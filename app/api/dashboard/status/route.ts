import { NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET() {
  try {
    const statuses = await storage.getDashboardStatuses();
    return NextResponse.json(statuses);
  } catch (error) {
    console.error('Failed to fetch dashboard statuses:', error);
    return NextResponse.json(
      { message: 'Failed to fetch dashboard statuses' },
      { status: 500 }
    );
  }
}