export const dynamic = 'force-dynamic';
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import SubmitButton from "@/components/form/SubmitButton";
import { fetchProfile, updateProfileAction, updateProfileImageAction } from "@/utils/actions";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const profile = await fetchProfile();

  if (!profile) {
    redirect("/profile/create");
  }
  return (
    <div>
      <h2 className="text-2xl capitalize font-semibold m-6">New User</h2>
    <ImageInputContainer image={profile.profileImage} name={profile.username} action={updateProfileImageAction} text="Update Profile Image" />
      <div className="rounded-md shadow-md">
        <FormContainer action={updateProfileAction}>
          <div className="border p-8 rounded-md shadow-md grid gap-2 md:grid-cols-2">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              defaultValue={profile.firstName}
            />

            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              defaultValue={profile.lastName}
            />

            <FormInput
              name="username"
              type="text"
              label="User Name"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Create Profile" classNames="mt-4 w-full" />
        </FormContainer>
      </div>
    </div>
  );
};

export default ProfilePage;
