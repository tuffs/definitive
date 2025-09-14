'use server';

import { prisma } from '@/prisma/database';

export async function createUnit(name: string) {
  try {
    const unit = await prisma.unit.create({
      data: { name },
    });
    return { success: true, unit };
  } catch (error) {
    return { success: false, error: 'Failed to create unit' };
  }
}
