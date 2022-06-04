import { styled } from "@mui/material/styles";
import {
  TextField,
  TextFieldProps,
  BoxProps,
  Box,
  Avatar,
  AvatarProps,
} from "@mui/material";

export const SearchBox = styled(Box)<BoxProps>(({ theme }) => ({
  border: "2px solid black",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  height: "30px",
  padding: "5px 10px",
}));

export const SearchInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  border: "none",
  color: "action.active",
  mr: 1,
  my: 0.5,
  fieldset: {
    border: "none",
  },
}));

export const AddButton = styled(Avatar)<AvatarProps>(({ theme }) => ({
  backgroundColor: "lightgray",
  transition: "0.5s",
  "&:hover": {
    transform: "rotateZ(180deg)",
  },
}));
