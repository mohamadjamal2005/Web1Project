import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Tabs, Tab } from '@mui/material';
import Login from '../pages/Login';
import Register from '../pages/Register';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const AuthLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
        sx={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
        }}
      >
        <Box
          className="w-full max-w-md bg-white rounded-lg shadow-lg"
          sx={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          }}
        >
          <Box className="border-b">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="auth tabs"
              className="w-full"
              sx={{
                '& .MuiTab-root': {
                  flex: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                },
              }}
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>
          </Box>
          <Box className="p-8">
            {activeTab === 0 && <Login />}
            {activeTab === 1 && <Register />}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AuthLayout;