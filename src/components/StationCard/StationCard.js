import React from 'react';
import { Card, CardContent } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';
import faacLogo from '../../assets/images/FAACLogo.svg'

const StationCard = ({stationId}) => {
const subtitle = `Charging Station ${stationId}`

  return (
    <Card>
      <CardContent>
        <CardHeader
          icon={<img src={faacLogo} alt="TIBA Logo" />}
          title="Central Parking"
          subtitle={subtitle}
          price="$0.50"
        />
      </CardContent>
    </Card>
  );
};

export default StationCard;
