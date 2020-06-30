import React, { useState } from "react";

import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import {
  UserData,
  Edit,
  EditField,
} from "Components/Blocks/ProfilePage/styles";

export const UserDataField = ({ title, value, edit }) => {
  console.log(`UserDataField Render`)
  const [isEdit, setIsEdit] = useState(false);
  const [changeInput, setChangeInput] = useState(value);

  const headlerAcceptEditUserData = () => {
    setIsEdit(!isEdit);
    edit(changeInput);
  };
  const headlerChangeField = () => {
    setIsEdit(!isEdit);
  };
  const ChangeValue = (event) => setChangeInput(event.target.value);

  return isEdit ? (
    <div>
      <EditField
        defaultValue={value}
        suffix={<CloseCircleOutlined onClick={headlerChangeField} />}
        addonAfter={<CheckCircleOutlined onClick={headlerAcceptEditUserData} />}
        onChange={ChangeValue}
      />
    </div>
  ) : (
    <UserData>
      {value}
      <Edit onClick={headlerChangeField} />
    </UserData>
  );
};
