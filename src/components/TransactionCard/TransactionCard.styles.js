import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(1),
}));

export const CardIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const CardInfo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

export const CardAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));
