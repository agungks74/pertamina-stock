import { NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET() {
  try {
    const regions = await storage.getRegionStatuses();
    return NextResponse.json(regions);
  } catch (error) {
    console.error('Failed to fetch region statuses:', error);
    return NextResponse.json(
      { message: 'Failed to fetch region statuses' },
      { status: 500 }
    );
  }
}