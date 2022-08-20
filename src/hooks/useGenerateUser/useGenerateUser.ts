import { useState } from "react";
import axios from "axios";
import { useUsers } from "../index";

export const useGenerateUser = () => {
  // local state
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  // hooks
  const { addUser } = useUsers();

  // handlers
  const generateRandomNumber = () =>
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  const handleGenerateUser = () => {
    generateRandomNumber();
    setIsLoading(true);
    axios
      .get("https://randomuser.me/api?page=%7BpageIndex%7D")
      .then(({ data }) => {
        if (data) {
          addUser({
            id: data.results[0].id.value,
            fullName: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
            age: data.results[0].dob.age,
            cell: data.results[0].cell,
            email: data.results[0].email,
            gender: data.results[0].gender,
            location: ` ${data.results[0].location.city}, ${data.results[0].location.country} ${data.results[0].location.postcode}`,
            phone: data.results[0].phone,
            isWinner: data.results[0].dob.age === randomNumber ? true : false,
            timesPlayed:
              data.results[0].timesPlayed === 1
                ? data.results[0].timesPlayed + 1
                : 1,
            nat: data.results[0].nat,
            picture: data.results[0].picture.medium,
            time: new Date().toISOString(),
          });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return {
    open,
    setOpen,
    isLoading,
    handleGenerateUser,
  };
};
