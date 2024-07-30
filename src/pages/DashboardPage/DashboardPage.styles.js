import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '90vh',
  padding: theme.spacing(2),
  maxWidth: '100vw',
  overflowX: 'hidden',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: theme.spacing(3),
    },
  }));

export const CustomButton = styled(Button)(({ theme }) => ({
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  }));

export const Logo = styled('img')(({ theme }) => ({
    width: '80%',
    maxWidth: '300px',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  }));
