import React from "react";
import { Input, Select, Checkbox } from "antd";

const { Option } = Select;

export const CustomInput = (placeholder) => {
  return <Input placeholder={placeholder} style={{ width: 240 }} />;
};

export const CustomSelect = (defaultValue, values) => {
  return (
    <Select defaultValue={defaultValue} style={{ width: 240 }}>
      {values.map((value, index) => {
        return (
          <Option value={value} key={index}>
            {value}
          </Option>
        );
      })}
    </Select>
  );
};

export const CustomCheckbox = () => {
  return <Checkbox defaultChecked />;
};
