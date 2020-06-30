import React, { useState } from "react";

import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import {
  UserData,
  Edit,
  EditField,
} from "Components/Blocks/ProfilePage/styles";

export const UserDataField = ({ title, ViewEditInput, edit, test, setTest }) => {
  console.log(`UserDataField Render`)
  const [isEdit, setIsEdit] = useState(false);
  const [changeInput, setChangeInput] = useState(ViewEditInput);  
  


  const headlerAcceptEditUserData = () => {
    setIsEdit(!isEdit);
    edit(changeInput);
    setTest(!test)
  };
  const headlerChangeField = () => {
    setIsEdit(!isEdit);
  };
  const ChangeValue = (event) => setChangeInput(event.target.value);

  return isEdit ? (
    <div>
      <EditField
        defaultValue={ViewEditInput}
        suffix={<CloseCircleOutlined onClick={headlerChangeField} />}
        addonAfter={<CheckCircleOutlined onClick={headlerAcceptEditUserData} />}
        onChange={ChangeValue}
      />
    </div>
  ) : (
    <UserData>
      {title}: {ViewEditInput}
      <Edit onClick={headlerChangeField} />
    </UserData>
  );
};
