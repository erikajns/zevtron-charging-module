import React from 'react';
import { BottomNavigationAction } from '@mui/material';
import { BottomNavContainer, CustomBottomNavigation } from './BottomNavigation.styles';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import TransactionsIcon from '@mui/icons-material/Sync';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = ({ value }) => {
  const navigate = useNavigate();

  const handleNavChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/dashboard');
        break;
      case 1:
        // Navigate to the payment page if implemented
        break;
      case 2:
        navigate('/transactions');
        break;
      case 3:
        // Navigate to the more options page if implemented
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavContainer>
      <CustomBottomNavigation
        value={value}
        onChange={handleNavChange}
        showLabels
      >
        <BottomNavigationAction label="Charge" icon={<BoltRoundedIcon />} />
        <BottomNavigationAction label="Payment" icon={<AttachMoneyRoundedIcon />} />
        <BottomNavigationAction label="Transactions" icon={<TransactionsIcon />} />
        <BottomNavigationAction label="More" icon={<MoreIcon />} />
      </CustomBottomNavigation>
    </BottomNavContainer>
  );
};

export default BottomNavigation;
