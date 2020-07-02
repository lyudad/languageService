import React, { useState } from "react";

import {
  ProfileWrraper,
  AboutUser,
  EditProfileFormContainer,
} from "Components/Blocks/ProfilePage/styles";

export const User = ({ user, editEmail, editUserName, editPassword }) => {
  console.log(`User Render`);
  const [isEditForm, setIsEditForm] = useState(false);
  const userName = user.username;
  const email = user.email;
  const gender = user.gender;
  const id = user.id;

  const handleEditProfile = () => setIsEditForm(!isEditForm);

  return isEditForm ? (
    <ProfileWrraper>
      <EditProfileFormContainer
        email={email}
        userName={userName}
        editEmail={editEmail}
        editUserName={editUserName}
        onclick={handleEditProfile}
        user={user}
      />
    </ProfileWrraper>
  ) : (
    <ProfileWrraper>
      <AboutUser
        onclick={handleEditProfile}
        userName={userName}
        email={email}
        gender={gender}
        id={id}
      />
    </ProfileWrraper>
  );
};
