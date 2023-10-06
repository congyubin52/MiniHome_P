import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
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
  borderColor: 'text.primary',
  border: 1,
  ml: 4,
  mr: 4,
  mt: 4,
  height: '2rem',
};

const rows = [
  {
    id: 1,
    username: '@MUI',
    age: 20,
  },
];

const introStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  border: 1,
  ml: 4,
  mr: 4,
  mt: 1,
  height: '8rem',
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
};

export default function HomeP() {
  const navigate = useNavigate();

  const homePButtonClick = () => {
    navigate('/home_p');
  }

  const [feel, setFeel] = React.useState('');

  const handleChange = (event) => {
    setFeel(event.target.value);
  };
  
  const profileEditButtonClick = () => {
    navigate('/home_p/profile_edit');
  }

  const surfingButtonClick = () => {
    navigate('/home_p/surfing');
  }

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
              소개글
            </Box>
            <Button variant="contained" size="small"  sx={{ backgroundColor: 'black' , mt: 1, ml: 4 }} onClick={profileEditButtonClick}>
                편집
            </Button>
            <Box sx={{ ...todayFeelStyles }}>
              <Button variant="contained" size="small" sx={{ backgroundColor: 'black', pl: '70px', pr: '70px' }} onClick={surfingButtonClick}>
                  파도타기
              </Button>
            </Box>
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
                <div style={{ height: 530, width: '100%' }}>
                  <DataGrid
                    columns={[
                      {
                        field: 'id', 
                        headerName: '제목',
                        flex: 1,
                        minWidth: 150,
                      },
                      {
                        field: 'username', 
                        headerName: '글쓴이',
                        width: 200,
                      },
                      {
                        field: 'age', 
                        headerName: '날짜', 
                        flex: 0.3,
                        minWidth: 50,
                      },
                    ]}
                    rows={rows}
                  sx={{margin: 1}}/>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} sx={{marginTop: 4}}>
            <Button variant="contained" size="small" sx={{ backgroundColor: 'black' }} onClick={homePButtonClick}>
              메인
            </Button>
            <Button variant="contained" size="small" disabled sx={{ backgroundColor: 'black' , marginTop: 1}}>
              게시글
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
