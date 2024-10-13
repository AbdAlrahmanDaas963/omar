import { Stack, Box, Typography, Button } from "@mui/material";

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
        minHeight: "500px",
        maxWidth: "1500px",
        margin: "auto",
        position: "relative",
        border: "2px dotted blue",
      }}
    >
      <Box sx={{ border: "1px solid white", width: "300px", height: "300px" }}>
        left pic
      </Box>
      <Stack
        direction={"column"}
        sx={{ border: "1px solid white", width: "300px", height: "300px" }}
      >
        <Typography>Explore Architectural Excellence!</Typography>
        <Typography>
          Discover inspired Architectural Solutions Tailored to your unique
          Style and Needs.
        </Typography>
        <Button>Get Started</Button>
      </Stack>
      <Box sx={{ border: "1px solid white", width: "300px", height: "300px" }}>
        right pic
      </Box>
    </Stack>
  );
}

export default WelcomeSection;
