import { prisma } from '@/prisma/database';
import { Word } from '@/types/Word';
import { Header } from '@/components/Header';

export default async function UnitPage({ params }: { params: { id: string } }) {
  const unitId = parseInt(params.id);
  const words: Word[] = await prisma.word.findMany({
    where: { unitId },
  });
  return (
    <>
      <Header />
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Unit {params.id}</h2>
        {words.length > 0 ? (
          <ul>
            {words.map((word) => (
              <li key={word.id}>
                <strong>
                  {word.word}
                </strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>No words available</p>
        )}
      </div>
    </>
  );
};