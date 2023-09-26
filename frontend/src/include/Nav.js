import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const appBarStyle = {
  height: '45px',
};

const linkStyle = {
  color: 'white', // 모든 글씨를 흰색으로 변경
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'normal',
};

const separatorStyle = {
  margin: '0 8px',
  color: 'white', // 모든 글씨를 흰색으로 변경
  fontWeight: 'normal',
};

export default function Nav() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" sx={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
            <a href="/" style={linkStyle}>MiniHomeP</a>
          </Typography>
          <Typography noWrap component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
            <a href="/home_p" style={linkStyle}>내 미니홈피</a>
            <span style={separatorStyle}>|</span>
            <a href="/member/signout" style={linkStyle}>로그아웃</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
