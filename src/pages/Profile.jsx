import React from "react";
import { ProfileCard } from "../components";

const Profile = () => {
    return (
        <div className="min-h-screen block mx-auto">
            <div className="h-full mt-5 flex items-center justify-center">
                <ProfileCard
                    name="Ashraful Alam"
                    designation="Software Engineer"
                />
            </div>
        </div>
    );
};

export default Profile;
