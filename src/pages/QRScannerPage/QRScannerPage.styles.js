import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const ScannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  backgroundColor: '#000',
}));

export const CameraIcon = styled(CameraAltIcon)(({ theme }) => ({
  fontSize: '48px',
  color: theme.palette.grey[600],
}));


export const BackButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', 
  width: '100%',
  padding: theme.spacing(1, 2),
}));
