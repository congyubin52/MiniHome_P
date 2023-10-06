import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
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
  borderColor: 'text.primary',
  border: 1,
  ml: 4,
  mr: 4,
  mt: 4,
  height: '2rem',
};
const pageBtn = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  border: 1,
  mr: 1,
  mt: 3,
  height: '2rem',
};

export default function HomePEdit() {
  const navigate = useNavigate();

  const boardButtonClick = () => {
    navigate('/home_p/board');
  };

  const homePButtonClick = () => {
    navigate('/home_p');
  }

  const [feel, setFeel] = React.useState('');

  const handleChange = (event) => {
    setFeel(event.target.value);
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[50]
    };

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );

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
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ ...homeStyles, borderRadius: '13px' }}>
          {/* 홈피 제목 */}
          <Box sx={{ ...homePTitleStyles, display: 'flex', alignItems: 'center' }}>
            <TextField fullWidth label="fullWidth" id="fullWidth"/>
          </Box>
          <Grid container>
          <Grid item xs={11}>
            <Box sx={{ ...homePStyles, borderRadius: '13px' }}>
              <Box>
                <StyledTextarea
                aria-label="minimum height"
                minRows={3}
                placeholder="내용을 입력하세요."
                sx={{margin:1}}/>
                <Button variant="contained" size="small"  sx={{ backgroundColor: 'black' , margin: 1}} /*onClick={saveButtonClick}*/>
                저장
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} sx={{marginTop: 4}}>
          <Button variant="contained" size="small" sx={{ backgroundColor: 'black' }} onClick={homePButtonClick}>
              메인
            </Button>
            <Button variant="contained" size="small" sx={{ backgroundColor: 'black' , marginTop: 1}} onClick={boardButtonClick}>
              게시글
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
