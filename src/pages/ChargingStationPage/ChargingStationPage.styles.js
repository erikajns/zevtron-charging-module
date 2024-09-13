import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  minHeight: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
  overflow: 'hidden',
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '90%',
  textTransform: 'none',
  [theme.breakpoints.up('sm')]: {
    width: '60%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    border: 'none'
  },
  '&:not(.Mui-disabled)': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '500px',
}));

export const Logo = styled('img')(({ theme }) => ({
  width: '80%',
  maxWidth: '300px',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    width: '60%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

export const BackButtonContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

export const NotificationBar = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));
