import React from "react";
import CustomInput from "../form-elements/CustomInput";
import { Search } from "@/assets/icons";

function SearchIcon() {
  return <CustomInput iconSrc={Search} placeholder="Search ..." />;
}

export default SearchIcon;
