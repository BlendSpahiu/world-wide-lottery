import { ReactElement } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { UserProps } from "./User.props";
import { getGender } from "@utils";
import { useUsers } from "@hooks";
import { useLocation } from "react-router-dom";
import { If } from "@atoms";

export const User = ({ user, className }: UserProps): ReactElement => {
  // hooks
  const { deleteUsers } = useUsers();
  const { pathname } = useLocation();

  return (
    <Card className={className} sx={{ maxWidth: 345, marginTop: "40px" }}>
      <CardMedia
        component="img"
        height="140"
        image={user?.picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user?.fullName} <span className="text-sm">{user?.email}</span>
        </Typography>
        <Typography className="font-medium text-sm">
          <span className="font-semibold">Age:</span> {user?.age}
        </Typography>
        <Typography className="font-medium text-sm">
          <span className="font-semibold">Gender:</span>{" "}
          {getGender(user?.gender)}
        </Typography>
        <Box className="flex flex-col">
          <Typography>
            <span className="font-semibold">Phone: </span> {user?.phone}
          </Typography>
          <Typography>
            <span className="font-semibold">Cell:</span> {user?.cell}
          </Typography>
        </Box>
        <Typography>
          <span className="font-semibold">Location: </span> {user?.location}
        </Typography>
        <Typography>
          <span className="font-semibold">Nationality: </span>
          {user?.nat}
        </Typography>
      </CardContent>
      <CardActions>
        <If condition={!pathname.includes("session-players")}>
          <Button onClick={deleteUsers} variant="contained" size="small">
            Clear Session
          </Button>
        </If>
      </CardActions>
    </Card>
  );
};
