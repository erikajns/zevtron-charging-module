import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';

export const BottomNavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  zIndex: theme.zIndex.appBar,
}));

export const CustomBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  '& .Mui-selected': {
    color: theme.palette.secondary.main,
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: 700,
  },
}));
