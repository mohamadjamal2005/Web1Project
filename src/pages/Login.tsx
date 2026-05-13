import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Alert,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Simulated login - in a real app, you'd call an API
    console.log('Login attempt:', { email, password });
    login();
    navigate('/dashboard');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="space-y-6">
      <Box className="text-center">
        <Typography
          variant="h4"
          component="h1"
          className="text-gray-800 font-bold mb-2"
        >
          Welcome Back
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Sign in to your account
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Email className="text-gray-400" />
                </InputAdornment>
              ),
            },
          }}
          className="mb-4"
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Lock className="text-gray-400" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          className="mb-6"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
          sx={{
            backgroundColor: '#2563eb',
            '&:hover': {
              backgroundColor: '#1d4ed8',
            },
          }}
        >
          Sign In
        </Button>
      </Box>

      <Box className="text-center">
        <Typography variant="body2" className="text-gray-600">
          Don't have an account?{' '}
          <Link
            component="button"
            onClick={(e) => {
              e.preventDefault();
              // This will be handled by AuthLayout tab switching
            }}
            className="text-blue-600 hover:text-blue-800 font-semibold"
            sx={{
              color: '#2563eb',
              textDecoration: 'none',
              '&:hover': {
                color: '#1d4ed8',
              },
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;