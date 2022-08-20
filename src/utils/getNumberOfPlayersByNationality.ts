import { UserModel } from "@interfaces";

export const getNumberOfPlayersByNationality = (
  arr: UserModel[],
  nationality: string
): number => {
  const filteredArray = arr
    .map(({ nat }) => nat)
    .filter((nat) => nat === nationality);

  return filteredArray.length;
};
