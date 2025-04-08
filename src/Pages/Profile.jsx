import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import useSingleUserData from "../Hooks/useSingleUserData";
import { FaUserCircle } from "react-icons/fa";
import { format } from "date-fns";

const Profile = () => {
  const { userData } = useSingleUserData();
  const { name, email, role, photo, createdAt } = userData || {};

  return (
    <div className="min-h-screen bg-background p-4 md:p-10">
      <header className="mb-8">
        <SectionTitle heading="My Profile" subHeading="View your account details" />
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-teal">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
            ) : (
              <FaUserCircle size={128} className="text-teal" />
            )}
          </div>

          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-semibold text-primary">{name || "User Name"}</h2>
            <p className="text-text"><strong>Email:</strong> {email}</p>
            <p className="text-text"><strong>Role:</strong> <span className="capitalize">{role}</span></p>
            <p className="text-text"><strong>Joined:</strong>   {createdAt && !isNaN(new Date(createdAt)) ? format(new Date(createdAt), "Pp") : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
