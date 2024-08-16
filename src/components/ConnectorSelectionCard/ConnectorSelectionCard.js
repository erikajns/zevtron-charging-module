import React, { useState, useEffect } from 'react';
import { Card, CardContent, Box, Button } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import { ConnectorButton } from './ConnectorSelectionCard.styles';

const ConnectorSelectionCard = ({ selectedConnector, onConnectorSelect, hasTwoConnectors }) => {
  const [title, setTitle] = useState('Plug In Connector');
  const [subtitle, setSubtitle] = useState(hasTwoConnectors ? 'Select which side' : '');

  useEffect(() => {
    if (selectedConnector) {
      setTimeout(() => {
        setTitle('Connector Selected');
        setSubtitle('');
      }, 1000); // Simulate a delay for connector selection
    }
  }, [selectedConnector]);

  return (
    <Card>
      <CardContent>
        <CardHeader
          icon={<PowerOutlinedIcon />}
          title={title}
          subtitle={subtitle}
        />
        {hasTwoConnectors ? (
          <Box display="flex" justifyContent="space-around">
            <ConnectorButton
              selected={selectedConnector === 'left'}
              onClick={() => onConnectorSelect('left')}
              borderRadius="15px 0 0 15px"
            >
              1 (Left)
            </ConnectorButton>
            <ConnectorButton
              selected={selectedConnector === 'right'}
              onClick={() => onConnectorSelect('right')}
              borderRadius="0 15px 15px 0"
            >
              (Right) 2
            </ConnectorButton>
          </Box>
        ) : (
          <Box display="flex" justifyContent="center">
            <Button
              variant="outlined"
              onClick={() => onConnectorSelect('single')}
              sx={{ width: '80%' }}
            >
              Select to Confirm You're Plugged In
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ConnectorSelectionCard;
