import { styled } from "@mui/material/styles";
import { ListItem, ListItemProps } from "@mui/material";

export const HoverListItem = styled(ListItem)<ListItemProps>(({theme}) => ({
    transition:"0.5s",
    "&:hover":{
        backgroundColor:"#eae6e6",
    }
  }));