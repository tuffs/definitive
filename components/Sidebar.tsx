import AvatarContainer from '@/components/AvatarContainer';
import SidebarNav from '@/components/SidebarNav';

export async function Sidebar() {
  return (
    <aside className="w-64 bg-background p-4 flex flex-col shrink-0">
      <AvatarContainer />
      <SidebarNav />
    </aside >
  );
};
