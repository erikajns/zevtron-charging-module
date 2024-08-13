import React from 'react';
import { Card, CardContent } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';

const StationCard = () => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          icon={<img src="https://www.netcloud.co.il/wp-content/uploads/2019/11/TIBA-Logo.png" alt="TIBA Logo" />}
          title="Tiba Lot A"
          subtitle="Charging Station 30111"
          price="$0.42"
        />
      </CardContent>
    </Card>
  );
};

export default StationCard;
