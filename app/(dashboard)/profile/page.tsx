import React from "react";
import ProfileDetail from "./_layouts/profile-detail";
import { cookies } from "next/headers";
import { getUserByToken } from "@/data/user";

async function MyAccountPage() {
  const token = (await cookies()).get('token');

  const user = await getUserByToken(token?.value!);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-xl mx-auto space-y-4">
        <ProfileDetail user={user!} token={token?.value!} />
      </div>
    </div>
  );
}

export default MyAccountPage;
