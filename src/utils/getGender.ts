import { GenderEnums } from "enums";

export const getGender = (gender: GenderEnums | undefined): string => {
  if (gender === "male") {
    return "M";
  } else {
    return "F";
  }

  return "";
};
