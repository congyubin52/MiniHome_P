import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home'; // 집 모양 아이콘 추가
import { Container, Grid } from '@mui/material';

function Login() {
  const [id, setID] = useState('');
  const [pw, setPw] = useState('');

  const linkStyle = {
    color: 'black', 
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'normal',
  };

  const linkContainerStyle = {
    display: 'flex',
    marginTop: '1rem', // 위쪽 여백을 추가할 수도 있습니다.
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '15rem' }}>
      <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <HomeIcon sx={{ fontSize: 48, color: 'black' }} /> {/* 집 모양 아이콘 */}
        <Typography variant="h5" component="h1" style={{ marginTop: 6 }}>
          MiniHomeP
        </Typography>
        <div style={linkContainerStyle}>
          <a href="/member/signin" style={linkStyle}>로그인</a>
          <div style={{ margin: '0 1rem' }}>or</div>
          <a href="/member/signup" style={linkStyle}>회원가입</a>
        </div>
      </Paper>
    </Container>
  );
}

export default Login;
