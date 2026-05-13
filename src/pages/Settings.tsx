import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Switch, FormControlLabel } from '@mui/material';

const Settings: React.FC = () => {
  return (
    <Box className="p-8">
      <Box className="mb-8">
        <Typography variant="h4" component="h1" className="text-gray-800 font-bold mb-2">
          Settings
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Manage your account and application settings.
        </Typography>
      </Box>

      <Box className="max-w-2xl space-y-6">
        <Card>
          <CardContent>
            <Typography variant="h6" className="mb-4">
              Account Settings
            </Typography>
            <Box className="space-y-4">
              <TextField
                fullWidth
                label="Account Name"
                defaultValue="Web1 Project"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                defaultValue="admin@web1project.com"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Organization"
                defaultValue="Web1 Inc."
                variant="outlined"
              />
              <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
                Save Changes
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" className="mb-4">
              Notifications
            </Typography>
            <Box className="space-y-3">
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Email Notifications"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="System Alerts"
              />
              <FormControlLabel
                control={<Switch />}
                label="Weekly Reports"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Login Alerts"
              />
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" className="mb-4">
              Security
            </Typography>
            <Box className="space-y-3">
              <Button fullWidth variant="outlined" className="border-gray-300 text-gray-700">
                Change Password
              </Button>
              <Button fullWidth variant="outlined" className="border-gray-300 text-gray-700">
                Two-Factor Authentication
              </Button>
              <Button fullWidth variant="outlined" color="error">
                Sign Out All Sessions
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Settings;
