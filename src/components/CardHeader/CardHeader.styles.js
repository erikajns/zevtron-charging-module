import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CardHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  marginRight: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

export const HeaderContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));
