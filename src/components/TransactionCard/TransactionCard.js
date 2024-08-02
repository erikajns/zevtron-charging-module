import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelIcon from '@mui/icons-material/Cancel';
import { CardContainer, CardIcon, CardInfo, CardAction } from './TransactionCard.styles';

const TransactionCard = ({ icon, title, subtitle, description, onCancel, isActive }) => {
  return (
    <CardContainer>
      <CardIcon>{icon}</CardIcon>
      <CardInfo>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{subtitle}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </CardInfo>
      <CardAction>
        {isActive ? (
          <IconButton onClick={onCancel}>
            <CancelIcon color="error" />
          </IconButton>
        ) : (
          <ArrowForwardIosIcon color="action" />
        )}
      </CardAction>
    </CardContainer>
  );
};

export default TransactionCard;
