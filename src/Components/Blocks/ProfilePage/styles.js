import styled from "styled-components";
import { Menu, Input } from "antd";

import {
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

// menu component START -------------------------------
export const MenuComponent = styled(Menu)`
  font-size: 18px;
`;
// menu component END -------------------------------

// user component START -------------------------------
export const ProfileWrraper = styled.div`
  height: 800px;
`;
export const ProfileTitle = styled.p`
  font-size: 24px;
`;
export const UserInformation = styled.div`
  font-size: 24px;
`;
export const UserName = styled.div`
  font-size: 24px;
`;
export const UserData = styled.p`
  font-size: 14px;
`;
export const Edit = styled(EditOutlined)`
  cursor: pointer;
`;
export const EditField = styled(Input)`
  display: flex;
  height: 24px;
  width: 240px;
`;
export const AceptButton = styled(CheckCircleOutlined)`
  cursor: pointer;
`;
export const CloseButton = styled(CloseCircleOutlined)`
  cursor: pointer;
`;

// user component END --------------------------------
