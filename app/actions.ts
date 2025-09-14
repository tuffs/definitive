"use server";

import { prisma } from "@/prisma/database";
import { Unit } from "@/types/Unit";
import { Word } from "@/types/Word";

export async function createWord(
  word: string,
  definition: string,
  unitId: number
) {
  // Ensure that a unitId is attached to the request, or return false with error
  if (!unitId) {
    return {
      success: false,
      error: "No Unit's ID was provided, cannot create Word without a UnitID.",
    };
  }

  try {
    const newWord: Word = await prisma.word.create({
      data: { word, definition, unitId },
    });
    return { success: true, word: newWord };
  } catch (error) {
    return {
      success: false,
      error: `Failed to create word with error: ${error}`,
    };
  }
}

export async function createUnit(name: string) {
  try {
    const unit: Unit = await prisma.unit.create({
      data: { name },
    });
    return { success: true, unit };
  } catch (error) {
    return {
      success: false,
      error: `Failed to create unit with error: ${error}`,
    };
  }
}
