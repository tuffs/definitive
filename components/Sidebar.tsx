import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
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

export async function Sidebar() {
  const units: Unit[] = await getUnits();
  return (
    <aside className="w-[15vw] border-r bg-background p-4 flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" width={'175px'} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">John Doe</p>
          <p className="text-sm text-muted-foreground">
            john@example.net
          </p>
        </div>
      </div>
      <nav className="flex-1 space-y-2">
        {units.length > 0 ? (
          units.map((unit) => (
            <Link key={unit.id} href={`/unit/${unit.id}`}>
              <Button variant="ghost" className="w-full justify-start">
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
    </aside>
  );
};
