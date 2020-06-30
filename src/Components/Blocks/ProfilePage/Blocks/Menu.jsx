import React from "react";
import { MenuComponent } from "Components/Blocks/ProfilePage/styles";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";

export const Menu = () => {
  return (
    <MenuComponent
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="light"
    >
      <MenuComponent.Item key="1" icon={<UserOutlined />}>
        Profile
      </MenuComponent.Item>
      <MenuComponent.Item key="2" icon={<SettingOutlined spin={true} />}>
        Settings
      </MenuComponent.Item>
    </MenuComponent>
  );
};