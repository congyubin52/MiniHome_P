import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const homeStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  border: 1,
  height: '40rem',
};
const profileStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  border: 1,
  mr: 1,
  ml: 2,
  mt: 10,
  mb: 2,
  height: '34rem',
};
const homePTitleStyles = {
  bgcolor: 'background.paper',
  mt: 3,
  ml: 1,
  mr: 7,
  height: '3rem',
};
const homePStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  border: 1,
  ml: 1,
  mt: 1,
  mb: 2,
  height: '34rem',
};
const profileImageStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  border: 1,
  ml: 4,
  mr: 4,
  mt: 1,
  height: '11rem',
};
const todayFeelStyles = {
  bgcolor: 'background.paper',
  ml: 4,
  mr: 4,
  mt: 4,
  height: '2rem',
};
const introStyles = {
  bgcolor: 'background.paper',
  ml: 4,
  mr: 4,
  mt: 1,
  height: '8rem',
  display: 'flex', // Flexbox 사용
  justifyContent: 'center', // 텍스트를 가운데 정렬
  alignItems: 'center',
};


export default function ProfileEdit() {
  const navigate = useNavigate();

  const homePButtonClick = () => {
    navigate('/home_p');
  }

  const boardButtonClick = () => {
    navigate('/home_p/board');
  };

  const saveButtonClick = () => {
    navigate('/home_p/profile_edit');
  }

  const [feel, setFeel] = React.useState('');

  const handleChange = (event) => {
    setFeel(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <Box sx={{ ...homeStyles, borderRadius: '13px' }}>
          <Box sx={{ ...profileStyles, borderRadius: '13px' }}>
            <Box sx={{ ...todayFeelStyles, borderRadius: '13px' }} >
              <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">오늘의 기분</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={feel}
                    label="오늘의 기분"
                    onChange={handleChange}
                    sx={{ height: '2rem', borderRadius: '13px' }}
                    >
                    <MenuItem value={'행복'}>
                        <LocalFloristIcon />
                        행복
                    </MenuItem>
                    <MenuItem value={'맑음'}>
                        <WbSunnyIcon />
                        맑음
                    </MenuItem>
                    <MenuItem value={'구름'}>
                        <CloudQueueIcon />
                        구름
                    </MenuItem>
                    <MenuItem value={'번개'}>
                        <ThunderstormIcon />
                        번개
                    </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ ...profileImageStyles, borderRadius: '13px' }} > 
            <div>
              <Avatar
                alt="Default Profile"
                src="./imgs/default_profile.png"
                sx={{ width: 195, height: 176, borderRadius: '13px' }} 
              />
            </div>
            </Box>
            <Box sx={{ ...introStyles, borderRadius: '13px' }} >
                <TextField fullWidth label="소개글을 입력하세요." id="fullWidth" />
            </Box>
            <Button variant="contained" size="small"  sx={{ backgroundColor: 'black' , mt: 1, ml: 4 }} onClick={saveButtonClick}>
                저장
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ ...homeStyles, borderRadius: '13px' }}>
          {/* 홈피 제목 */}
          <Box sx={{ ...homePTitleStyles, display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold">
              유빈님의 미니홈피
            </Typography>
          </Box>
          <Grid container>
          <Grid item xs={11}>
            <Box sx={{ ...homePStyles, borderRadius: '13px' }}>
              <Box>
                <div>
                  <Avatar
                    alt="Default Profile"
                    src="./imgs/default_home_p.jpg"
                    sx={{ width: 765, height: 350, borderRadius: '0px', margin: 1 }} // 이미지의 가로, 세로 크기와 borderRadius를 설정
                  />
                </div>
                <Typography sx={{margin: 2}}>
                  게시물을 작성해보세요.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} sx={{marginTop: 4}}>
            <Button variant="contained" size="small" sx={{ backgroundColor: 'black' }}  onClick={homePButtonClick}>
              메인
            </Button>
            <Button variant="contained" size="small"  sx={{ backgroundColor: 'black' , marginTop: 1}} onClick={boardButtonClick}>
              게시글
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
