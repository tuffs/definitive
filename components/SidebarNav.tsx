import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Unit } from '@/types/Unit';
import { prisma } from '@/prisma/database';

async function getUnits(): Promise<Unit[]> {
  try {
    return await prisma.unit.findMany();
  } catch (error) {
    console.error('Failed to fetch units: ', error);
    return [];
  }
}

export default async function SidebarNav() {
  const units: Unit[] = await getUnits();

  return (
    <>
      <nav className="flex-1 space-y-2">
        {units.length > 0 ? (
          units.map((unit) => (
            <Link key={unit.id} href={`/unit/${unit.id}`}>
              <Button variant="link" className="w-full justify-start">
                {unit.name}
              </Button>
            </Link>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No units available</p>
        )}
        <Button variant="ghost" className="w-full justify-start">
          Progress
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Scores
        </Button>
      </nav>
    </>
  );
};