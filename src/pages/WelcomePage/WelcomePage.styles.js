import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',
  padding: theme.spacing(2),
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
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

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
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

export const GuestText = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  position: 'absolute',
  bottom: theme.spacing(2),
  textDecoration: 'none',
  fontFamily: 'Inter'
}));
