import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0B1F2E",
        color: "#B0C4D4",
        pt: 8,
        pb: 4,
      }}
    >
      <Grid container sx={{ maxWidth: '1500px' }} className=' flex justify-between mx-auto' spacing={6}>

        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{ color: "#6EC1FF", mb: 2, fontWeight: 600 }}
          >
            Ýerinde
          </Typography>
          <Typography variant="body2">
            Häzirki zaman HR we işgärleriň iş  <br /> tertibini dolandyrmak platformasy.
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{ color: "#6EC1FF", mb: 2, fontWeight: 600 }}
          >
            Çözgütler
          </Typography>
          <FooterLink text="HR dolandyryş" />
          <FooterLink text="Iş tertibi we gatnaşyk" />
          <FooterLink text="Rugsatlar" />
          <FooterLink text="Hasabatlar" />
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{ color: "#6EC1FF", mb: 2, fontWeight: 600 }}
          >
            Kompaniýa
          </Typography>
          <FooterLink text="Biz barada" />
          <FooterLink text="Karýera" />
          <FooterLink text="Habarlar" />
          <FooterLink text="Habarlaşmak" />
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            sx={{ color: "#6EC1FF", mb: 2, fontWeight: 600 }}
          >
            Goldaw
          </Typography>
          <FooterLink text="Kömek merkezi" />
          <FooterLink text="Dokumentasiýa" />
          <FooterLink text="Gizlinlik syýasaty" />
        </Grid>

      </Grid>

      <Divider sx={{ my: 6, borderColor: "#1E3A4C" }} />

      <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
        © {new Date().getFullYear()} Yerinde. All rights reserved.
      </Typography>
    </Box>
  );
};

const FooterLink = ({ text }) => (
  <Link
    href="#"
    underline="none"
    display="block"
    sx={{
      mb: 1,
      color: "#B0C4D4",
      fontSize: 14,
      "&:hover": {
        color: "#6EC1FF"
      }
    }}
  >
    {text}
  </Link>
);

export default Footer;