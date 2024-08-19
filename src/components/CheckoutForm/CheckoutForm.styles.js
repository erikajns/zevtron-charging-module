import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  margin: 'auto',
}));

export const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
}));


export const CustomButton = styled(Button)(({ theme, borderRadius }) => ({
    textTransform: 'none',
    width: '45%',
    border: '0.5px solid rgba(73, 69, 79, 0.5)',
    borderRadius: borderRadius,
    backgroundColor:theme.palette.primary.main,
      color: '#FFFFFF',
    borderColor: theme.palette.primary.main,
    marginTop: '16px'
  }));