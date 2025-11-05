import { auth } from "@/lib/auth";
import Image from "next/image";

async function UserInfo() {
  const session = await auth();

  return (
    <div className="flex gap-2">
      <Image
        height={80}
        width={80}
        alt="userImage"
        src={session?.user?.image as string}
      />
      <div className="flex flex-col ga-2">
        <h1>Name {session?.user?.name}</h1>
        <h2>Email {session?.user?.email}</h2>
        <h3>id {session?.user?.id}</h3>
      </div>
    </div>
  );
}

export default UserInfo
