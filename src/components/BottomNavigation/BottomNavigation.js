import React from 'react';
import { BottomNavigationAction } from '@mui/material';
import { BottomNavContainer, CustomBottomNavigation } from './BottomNavigation.styles';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import TransactionsIcon from '@mui/icons-material/Sync';
import MoreIcon from '@mui/icons-material/MoreHoriz';

const BottomNavigation = ({ value, onChange }) => {
  return (
    <BottomNavContainer>
      <CustomBottomNavigation
        value={value}
        onChange={onChange}
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
