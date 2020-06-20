import React from "react";
import { Input } from "antd";

export const CustomInput = (placeholder) => {
  return <Input placeholder={placeholder} style={{ width: 240 }} />;
};
