import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Reports: React.FC = () => {
  return (
    <Box className="p-8">
      <Box className="mb-8">
        <Typography variant="h4" component="h1" className="text-gray-800 font-bold mb-2">
          Reports
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          View detailed reports and analytics.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="mb-4">
                Monthly Revenue
              </Typography>
              <Box className="h-80 bg-gray-50 rounded flex items-center justify-center">
                <Typography className="text-gray-500">
                  Chart placeholder - Integrate with charting library (e.g., Recharts)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="mb-4">
                User Growth
              </Typography>
              <Box className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">January</span>
                  <span className="font-semibold">500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">February</span>
                  <span className="font-semibold">650</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">March</span>
                  <span className="font-semibold">800</span>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="mb-4">
                Conversion Rate
              </Typography>
              <Box className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Website</span>
                  <span className="font-semibold">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mobile App</span>
                  <span className="font-semibold">5.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email</span>
                  <span className="font-semibold">7.8%</span>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;
