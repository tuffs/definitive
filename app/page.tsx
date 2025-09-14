import { Header } from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header/>
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Welcome to Vocab App</h2>
        <p>Main content area for units, exercises, and tests.</p>
      </div>
    </>
  );
};
