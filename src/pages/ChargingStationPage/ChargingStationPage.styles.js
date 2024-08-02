import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '500px',
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
}));

export const ConnectorButton = styled(Button)(({ theme, selected }) => ({
  textTransform: 'none',
  width: '45%',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: selected ? theme.palette.secondary.main : '#FFFFFF',
  color: selected ? '#FFFFFF' : theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: '#FFFFFF',
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


  export const RatesLink = styled('a')(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 700,
  }));

  export const BackButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: '100%',
    padding: theme.spacing(1, 2),
  }));