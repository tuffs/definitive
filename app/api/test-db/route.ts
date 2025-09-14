import { prisma } from '@/prisma/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await prisma.$connect();
    return NextResponse.json({ message: 'Database connected successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Database connection failed' }, {
      status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
