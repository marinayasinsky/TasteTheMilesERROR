import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
   
    <Stack gap="40px" sx={{ alignItems: 'center', justifyContent: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <a href="https://www.linkedin.com/in/marinayasinsky/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://www.instagram.com/marinnka/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </Stack>
  </Box>
);

export default Footer;
