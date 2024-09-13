import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '97vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  overflow: 'hidden',
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '500px',
  padding: theme.spacing(2),
}));

export const MapImage = styled('img')(({ theme }) => ({
  width: '100vw',
  height: 'auto',
  borderRadius: '8px',
  [theme.breakpoints.up('sm')]: {
    width: '110%'
  },
}));

export const DetailsCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  width: 'calc(100% - 32px)',
  marginTop: theme.spacing(-8),
}));

export const InfoSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const IconSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const Logo = styled('img')(({ theme }) => ({
    width: '80%',
    maxWidth: '300px',
    marginBottom: theme.spacing(3),
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
  
