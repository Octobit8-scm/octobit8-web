import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error('Razorpay API keys are not configured');
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request: Request) {
  try {
    const { amount, courseName } = await request.json();

    if (!amount || !courseName) {
      return NextResponse.json(
        { error: 'Amount and course name are required' },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        courseName,
      },
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { 
        error: 'Error creating order',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 