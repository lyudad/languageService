import React from "react";
import { Select } from "antd";

const { Option } = Select;

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
