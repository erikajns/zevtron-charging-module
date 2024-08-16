import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(7),
}));

export const Logo = styled('img')({
  maxWidth: '300px'
});

export const Address = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  textAlign: 'center',
}));

export const AnimationContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const AnimatedIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '100px',
  marginBottom: theme.spacing(2),
  animation: 'spin 2s linear infinite',
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
}));

export const Phrase = styled(Box)(({ theme }) => ({
  animation: 'fadeInOut 3s infinite',
  '@keyframes fadeInOut': {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

export const AlertContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: theme.zIndex.tooltip,
  }));
