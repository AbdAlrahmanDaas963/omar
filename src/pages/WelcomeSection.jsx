import { Stack, Box, Typography, Button } from "@mui/material";
import MyButton from "../components/common/MyButton";
import theme from "../theme";

function WelcomeSection() {
  return (
    <Stack
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
      sx={{
        padding: {
          lg: "50px 100px",
          md: "50px 50px",
          sm: "100px 0 0 0",
          xs: "80px 0 0 0",
        },
        justifyContent: {
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        },
        alignItems: "center",
        height: "fit-content",
        minHeight: "100vh",
        maxWidth: "1500px",
        margin: "auto",
        position: "relative",
        border: "2px dotted blue",
      }}
    >
      <Box sx={{ backgroundColor: "#DADEDE", width: "240px", height: "300px" }}>
        left pic
      </Box>
      <Stack
        direction={"column"}
        sx={{ border: "0px solid white", height: "300px" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Typography sx={{ fontSize: "60px", textAlign: "center" }}>
          Explore Architectural
          <br /> Excellence with me!
        </Typography>
        <Typography
          sx={{ color: theme.palette.s_white.main, textAlign: "center" }}
        >
          Discover inspired Architectural Solutions Tailored
          <br /> to your unique Style and Needs.
        </Typography>
        <MyButton title={"Get Started"} />
      </Stack>
      <Box
        sx={{
          width: "240px",
          height: "300px",
          backgroundColor: "#DADEDE",
        }}
      >
        right pic
      </Box>
    </Stack>
  );
}

export default WelcomeSection;
