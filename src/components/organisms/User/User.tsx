import { ReactElement, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { UserProps } from "./User.props";
import { getGender } from "@utils";
import { useUsers } from "@hooks";
import { If } from "@atoms";
import { useForm } from "react-hook-form";
import { UserInputs } from "@interfaces";
import { UserValidatorSchema } from "@validators";
import { joiResolver } from "@hookform/resolvers/joi";
import { PencilIcon } from "@heroicons/react/solid";

export const User = ({ user, className }: UserProps): ReactElement => {
  // local state
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // hooks
  const { updateUser } = useUsers();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>({
    resolver: joiResolver(UserValidatorSchema()),
  });

  // handlers
  const handleEdit = () => setIsEditing(!isEditing);
  const handleUpdateEmail = ({ email }: UserInputs) => {
    updateUser(email);
    setIsEditing(false);
  };

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
          {user?.fullName}
          <If condition={!isEditing}>
            <div className="flex items-center space-x-4 py-3">
              <span className="text-sm">{user?.email}</span>
              <PencilIcon
                onClick={handleEdit}
                className="w-6 h-6 text-gray-400"
              />
            </div>
          </If>
        </Typography>
        <If condition={isEditing}>
          <form
            onSubmit={handleSubmit(handleUpdateEmail)}
            className="py-2 space-x-2"
          >
            <input
              id="email"
              className="border-0 py-2 rounded-md"
              defaultValue={user?.email}
              {...register("email")}
            />
            <Button type="submit" variant="text">
              Done
            </Button>
            {errors && (
              <Typography color="red">{errors.email?.message}</Typography>
            )}
          </form>
        </If>
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
    </Card>
  );
};
