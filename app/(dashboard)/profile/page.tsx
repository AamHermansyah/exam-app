import React from "react";
import ProfilDetail from "./_layouts/profile-detail";
import ChangePassword from "./_layouts/change-password";

function MyAccountPage() {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <ProfilDetail />
      <ChangePassword />
    </div>
  );
}

export default MyAccountPage;
