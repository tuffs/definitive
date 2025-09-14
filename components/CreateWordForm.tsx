'use client';

import { useState } from 'react';
import { createWord } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CreateWordForm({ unitId }: { unitId: number }) {
  const [createWordNotice, setCreateWordNotice] = useState<string | null>(null);
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = async () => {
    const result = await createWord(word, definition, unitId);

    if (result.success) {

      // Show success notification atop the form.
      setCreateWordNotice(`Created ${result.word?.word} and definition!`);

      // Clear inputs for new form submission
      setWord('');
      setDefinition('');

    } else {
      // Alert the user with notification word not stored.
      setCreateWordNotice(`Your word and definition were not stored. Please try again.`);
    }
  }

  return (
    <>
      <div className="p-4">
        <h1
          className="text-3xl font-bold text-gray-800 mb-3"
        >Create New Word</h1>
        <hr />

        {createWordNotice ? (
          <>
            <p className="text-red-400">{createWordNotice}</p>
          </>
        ) : ('')}

        <Input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Word"
        />

        <Input
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          placeholder="Definition"
        />

        <Button
          onClick={handleSubmit}
          className="mt-2"
        >
          Add Word
        </Button>
      </div>
    </>
  );
};