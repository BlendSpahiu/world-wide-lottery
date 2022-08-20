import { ReactElement, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { getNumberOfPlayersByNationality } from "@utils";
import { StatsProps } from "./Stats.props";

export const Stats = ({ users }: StatsProps): ReactElement => {
  // locat state
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [filteredNationalities, setFilteredNationalities] = useState<string[]>(
    users
      ?.filter(
        ({ nat }, index) =>
          !users?.map(({ nat }) => nat)?.includes(nat, index + 1)
      )
      .map(({ nat }) => nat)
      .sort()
  );

  // handlers
  const handleChangeOrder = () => {
    setIsReverse(!isReverse);
    setFilteredNationalities(
      isReverse ? filteredNationalities.reverse() : filteredNationalities.sort()
    );
  };

  return (
    <>
      <Button onClick={handleChangeOrder} variant="contained">
        Change Order
      </Button>
      <div className="grid grid-cols-3 gap-5">
        {filteredNationalities?.map((nat) => (
          <Card key={Math.random()} sx={{ maxWidth: 345, marginTop: "40px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="font-semibold">Nationality: </span> {nat}
              </Typography>
              <Typography className="font-medium text-sm">
                <span className="font-semibold">Number of players: </span>
                {getNumberOfPlayersByNationality(users || [], nat)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
