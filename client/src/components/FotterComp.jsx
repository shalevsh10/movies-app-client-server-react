import { Typography, IconButton, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <footer
      sx={{
        color: "white",
        padding: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} shalev sharabi
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
          <IconButton
            sx={{ marginRight: 1 }}
            href="https://www.linkedin.com/in/shalev-sharon-b53b82280"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{ marginRight: 1 }}
            href="https://github.com/shalevsh10"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://wa.me/972528786377">
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
