import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';

export const PaymentInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  border: '0.5px solid grey',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  alignItems: 'center',
}));

export const PaymentInfoImage = styled('img')({
  width: '40px',
});

export const EditIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& svg': {
    fontSize: '2rem',
  },
}));
