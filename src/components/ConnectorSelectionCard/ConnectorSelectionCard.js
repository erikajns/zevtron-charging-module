import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import { ConnectorButton } from './ConnectorSelectionCard.styles';

const ConnectorSelectionCard = ({ selectedConnector, onConnectorSelect }) => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          icon={<PowerOutlinedIcon />}
          title="Choose Connector"
          subtitle="Select one connector"
        />
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
      </CardContent>
    </Card>
  );
};

export default ConnectorSelectionCard;
