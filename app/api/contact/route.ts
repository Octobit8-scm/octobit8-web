import { NextResponse } from 'next/server';
import { appendToSheet } from '@/app/services/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, course } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const values = [
      timestamp,
      name,
      email,
      phone || '',
      message,
      course || '',
    ];

    // Append to Google Sheet
    await appendToSheet(values);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 