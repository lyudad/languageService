import styled from "styled-components";
import { Menu } from "antd";

import { EditProfile } from "Components/Blocks/ProfilePage/Blocks/EditProfile";
import { AboutUser as AboutUserComponent } from "Components/Blocks/ProfilePage/Blocks/AboutUser";

// menu component START -------------------------------
export const MenuComponent = styled(Menu)`
  margin: 10px;
  font-size: 18px;
`;
// menu component END -------------------------------

// user component START -------------------------------
export const ProfileWrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 350px;
  min-width: 320px;
  border: 1px solid grey;
  margin: 10px;
  padding: 10px;
`;
export const AboutUser = styled(AboutUserComponent)`
  border: 1px solid grey;
`;
export const EditProfileFormContainer = styled(EditProfile)`
  min-width: 350px;
  min-height: 450px;
`;
export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserInformation = styled.div``;
export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 15px;
  min-width: 160px;
`;
export const ProfileTitle = styled.p`
  font-size: 36px;
  margin-bottom: 0px;
`;
export const UserData = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #595959;
`;
export const ErrorEditProfileParagraph = styled.p`
  font-weight: bold;
  color: red;
`;
// user component END --------------------------------
