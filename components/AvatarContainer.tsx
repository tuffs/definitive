import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarContainer() {
  return (
    <>

      <div className="w-[15vw] items-center space-x-2 mb-6">
        <div className="mt-24">
          <div className="flex">
            <div className="flex flex-col">
              <Avatar style={{ width: '50px', height: '50px' }}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <div className="items-center justify-items-center" style={{ fontSize: "11px", paddingTop: "12px", paddingLeft: "5px" }}>John Doe<br />
                john@example.net
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};