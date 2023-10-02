import React from 'react';
import { Avatar, Chip, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';
import Typewriter from 'Typewriter/typewriter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import avatar from '../assets/avatar.png';


const mock = [
  {
    name: 'SKILLS:',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'NodeJS', 'Python', 'No SQL', 
      'SQL', 'AWS Cloud Services', 'Unit Testing', 'CI/CD', 
      'Power BI', 'Jupyter Notebook', 'Visual Studio', 'Visual Studio Code',
      'Business Metrics/Data Analysis', 'Self-Starter', 'Creative Problem Solver'],
    avatar: avatar
  },
];

const HeadShot= () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        < Typography fontWeight={700} variant={'h4'} align={'center'}>
          Raphael Smith
        </Typography>
        <Typography
          sx={{
            textTransform: 'uppercase',
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
          fontWeight={700}
        >
          <Typewriter text="Fullstack Software Engineer | Junior Data Scientist" delay={100} />
        </Typography>
        <Divider />
        <Typography style={{ textAlign: 'center' }}>
          <b><LocationOnIcon /></b> Shasta Lake, CA{' '} | {' '} 
          <b><LocalPhoneIcon/> </b> (916) 707-4373{' '} | {' '} 
          <b><LocalPostOfficeIcon/> </b> codesmithr@outlook.com{' '} | {' '} 
          <b><AccountTreeIcon/> </b>Portfolio: <a href='https://www.codesmithr.com' target="_blank" rel="noopener noreferrer">www.codesmithr.com</a>{' '} | {' '} 
          <a className='socials' style={{ color: 'black' }} href='https://www.github.com/rlondon3' target='_blank' rel='noopener noreferrer' ><GitHubIcon /></a> &nbsp; 
          <a className='socials' style={{ color: 'black' }} href='https://www.linkedin.com/in/raphael-smith-b91a65206/' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a> &nbsp; 
          <a className='socials' style={{ color: 'black' }} href='https://programmingthestreets.hashnode.dev/' target='_blank' rel='noopener noreferrer'><RssFeedIcon /></a> &nbsp; 
        </Typography>
      </Box>
      <br />
      <Grid container spacing={2} paddingTop={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={6} key={i} >
            <Box  align={'center'} sx={{
              boxShadow: 0,
              background: 'transparent',
              backgroundImage: 'none',
            }}>
              <Box padding={!isSm ? 2 : 5} xs={12} md={6}
                component={Avatar}
                width={{ xs: 320, sm: 500, md: 320 }}
                height={{ xs: 320, sm: 500, md: 320 }}

                src={item.avatar}
              />
            </Box>
          </Grid>
        ))}
        <Grid paddingTop={5} xs={12} md={6}>
          <Box sx={{
            boxShadow: 0,
            background: 'transparent',
            backgroundImage: 'none',
          }}>
            <Box>
              <Typography variant='h5' marginBottom={1}><b>SUMMARY</b></Typography>
              <Typography marginBottom={5}>Proven developer with a trackable interest in data science and 3 years of experience building software to solve business
                problems. Detailed, thorough, and reliably meet deadlines in demanding and fast paced environments. Quick learner, energetic 
                collaborator, and advocate of fun and hardwork on the job. 
              </Typography>
              <Typography variant='h5' marginBottom={1}><b>SKILLS</b></Typography>
              <Box>
                {mock[0].tags.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    component="a"
                    href=""
                    size={'small'}
                    sx={{ marginBottom: 1, marginRight: 1 }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
};

export default HeadShot;
