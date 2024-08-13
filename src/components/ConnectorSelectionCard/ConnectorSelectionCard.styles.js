import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ConnectorButton = styled(Button)(({ theme, selected, borderRadius }) => ({
  textTransform: 'none',
  width: '45%',
  border: '0.5px solid rgba(73, 69, 79, 0.5)',
  borderRadius: borderRadius,
  backgroundColor: selected ? theme.palette.primary.main : '#FFFFFF',
  color: selected ? '#FFFFFF' : theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.main : theme.palette.action.hover,
    color: selected ? '#FFFFFF' : theme.palette.primary.main,
  },
}));
