import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

export const ScannerView = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '500px',
  border: '1px solid #ccc',
  marginBottom: theme.spacing(2),
}));

export const BackButtonContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

export const AlertContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
}));
