import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
  mr: 7,
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

export default function HomeP() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Box sx={{ ...homeStyles, borderRadius: '13px' }}>
          <Box sx={{ ...profileStyles, borderRadius: '13px' }}>
            <Box sx={{ ...todayFeelStyles, borderRadius: '13px' }} />
            <Box sx={{ ...profileImageStyles, borderRadius: '13px' }} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ ...homeStyles, borderRadius: '13px' }}>
          <Box sx={{ ...homePTitleStyles, borderRadius: '13px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight="bold">
              난 코ㄷ6 할 ㄸh 눈물을 흘ㄹLㄷr...
            </Typography>
          </Box>
          <Box sx={{ ...homePStyles, borderRadius: '13px' }}></Box>
        </Box>
      </Grid>
    </Grid>
  );
}
