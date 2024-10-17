import React from "react";
import { Button } from "@mui/material";
import theme from "../../theme";

function MyButton({ title }) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50px",
        backgroundColor: theme.palette.s_white.main,
        color: theme.palette.s_black.main,
        fontWeight: "bold",
        ...theme.typography.raleway,
        width: "fit-content",
        padding: "8px 20px",
        textTransform: "capitalize",
      }}
    >
      {title}
    </Button>
  );
}

export default MyButton;
