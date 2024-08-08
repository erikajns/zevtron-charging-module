import React from 'react';
import { Typography, Box } from '@mui/material';
import { CardHeaderContainer, IconContainer, HeaderContent } from './CardHeader.styles';

const CardHeader = ({ icon, title, subtitle, price }) => {
  return (
    <CardHeaderContainer>
      <IconContainer>
        {icon}
      </IconContainer>
      <HeaderContent>
        <Typography variant="h6">{title}</Typography>
        {subtitle && <Typography variant="body2">{subtitle}</Typography>}
      </HeaderContent>
      {price && <Typography variant="body2" sx={{ marginLeft: 'auto' }}>{price} <br /> kWh</Typography>}
    </CardHeaderContainer>
  );
};

export default CardHeader;
