import React from 'react';
import { Card, CardContent, Button, Box, Typography, IconButton } from '@mui/material';
import CardHeader from '../CardHeader/CardHeader';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const NotificationCard = ({ notify, notificationInfo, onNotifySelect, onEditNotifications }) => {
  const title = notify ? "Selected Notifications" : "Set Up Notifications";
  const subtitle = notify ? "" : "Get charging updates and receipts";

  return (
    <Card>
      <CardContent>
        <CardHeader
          icon={<NotificationsNoneIcon />}
          title={title}
          subtitle={subtitle}
        />
        {notify ? (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" border="0.5px solid grey" borderRadius={1} p={2} marginBottom={1}>
              <Box textAlign="left" flex={1} ml={2}>
                <Typography variant="body2"><strong>SMS/Text</strong></Typography>
                <Typography variant="body2">{notificationInfo.phone}</Typography>
                <Typography variant="body2">
                  {notificationInfo.receiveUpdates ? 'Charging Updates' : 'Not Used'}
                </Typography>
              </Box>
              <IconButton onClick={onEditNotifications}>
                <EditNoteOutlinedIcon />
              </IconButton>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" border="0.5px solid grey" borderRadius={1} p={2}>
              <Box textAlign="left" flex={1} ml={2}>
                <Typography variant="body2"><strong>Email</strong></Typography>
                <Typography variant="body2">{notificationInfo.email}</Typography>
                <Typography variant="body2">Receipts</Typography>
                <Typography variant="body2">Charging Updates</Typography>
              </Box>
              <IconButton onClick={onEditNotifications}>
                <EditNoteOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" gap={2}>
            <Button
              variant="outlined"
              onClick={onNotifySelect}
            >
              Set up Notifications
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
