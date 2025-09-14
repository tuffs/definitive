'use client';

import { useState } from 'react';
import { createUnit } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CreateUnitForm() {
  const [createUnitNotice, setCreateUnitNotice] = useState<string | null>(null);
  const [unit, setUnit] = useState('');

  const handleSubmit = async () => {
    const result = await createUnit(unit);

    if (result.success) {

      // Show success notification atop the form.
      setCreateUnitNotice(`Created ${result.unit?.name} for words!`);

      // Clear inputs for new form submission
      setUnit('');

    } else {
      // Alert the user with notification unit not stored.
      setCreateUnitNotice(`Your unit was not saved. Please try again.`);
    }
  }

  return (
    <>
      <div className="p-4">
        <h1
          className="text-3xl font-bold text-gray-800 mb-3"
        >Create New Unit</h1>
        <hr />

        {createUnitNotice ? (
          <>
            <p className="text-red-400">{createUnitNotice}</p>
          </>
        ) : ('')}

        <Input
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="Unit Name"
        />

        <Button
          onClick={handleSubmit}
          className="mt-2"
        >
          Create Unit
        </Button>
      </div>
    </>
  );
};