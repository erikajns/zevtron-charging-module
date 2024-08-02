import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
}));

export const Logo = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '80%',
  maxWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    width: '60%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
}));
