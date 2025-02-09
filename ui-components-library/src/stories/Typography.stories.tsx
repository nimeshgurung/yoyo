import React from 'react';
import { ThemeProvider, Box, Typography } from '@mui/material';
import { theme } from '../theme/theme';

export default {
  title: 'Design/Typography',
};

const TypographyStory: React.FC = () => {
  // List the typography variants used in your theme
  const variants: Array<{ variant: string; label: string }> = [
    { variant: 'subtitle2', label: 'Subtitle2' },
    { variant: 'overline', label: 'Overline' },
    { variant: 'caption', label: 'Caption' },
    { variant: 'button', label: 'Button' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2 }}>
        {variants.map(({ variant, label }) => (
          <Box key={variant} sx={{ mb: 2 }}>
            <Typography variant={variant as any}>
              {label}: The quick brown fox jumps over the lazy dog.
            </Typography>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export const TypographyVariants = TypographyStory;