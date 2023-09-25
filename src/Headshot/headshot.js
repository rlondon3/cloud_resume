import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar, Chip, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'components/Container';
import Typewriter from 'Typewriter/typewriter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Box from '@mui/material/Box';
import avatar from '../assets/avatar.png';


const mock = [
  {
    name: 'SKILLS:',
    tags: ['HTML', 'CSS', 'JavaScript', 'React',  'NodeJS', 'Python', 'No SQL', 
      'SQL', 'AWS Cloud Services', 'Unit Testing', 'CI/CD', 
      'Power BI', 'Jupyter Notebook', 'Visual Studio', 'Visual Studio Code',
      'Business Metrics/Data', 'Self-Starter', 'Creative Problem Solver'],
    avatar: avatar
  },
];

const HeadShot= () => {
  const theme = useTheme();
  
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Box>
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
            <Typewriter text="Full-stack Software Engineer | Junior Data Scientist" delay={100} />
          </Typography>
          <Divider />
          <p style={{ textAlign: 'center'}}>
            <b><LocalPhoneIcon/> </b> (916) 707-4373{' '} | {' '} 
            <b><LocalPostOfficeIcon/> </b> codesmithr@outlook.com{' '} | {' '} 
            <b><AccountTreeIcon/> </b>Portfolio: <a href='https://www.codesmithr.com' target="_blank" rel="noopener noreferrer">www.codesmithr.com</a>{' '} | {' '} 
            <a href='https://www.github.com/rlondon3' target='_blank' rel='noopener noreferrer' ><GitHubIcon /></a>
            <a href='https://www.linkedin.com/in/raphael-smith-b91a65206/' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
            <a href='https://programmingthestreets.hashnode.dev/' target='_blank' rel='noopener noreferrer'><RssFeedIcon /></a>
          </p>
        </Box>
        <br />
        <Grid container spacing={2} >
          {mock.map((item, i) => (
            <Grid item xs={12} md={6} key={i} >
              <Card sx={{
                boxShadow: 0,
                background: 'transparent',
                backgroundImage: 'none',
              }}>
                <Box padding={5} xs={12} md={6}
                  component={Avatar}
                  width={{ xs: 320, sm: 440, md: 320 }}
                  height={{ xs: 320, sm: 440, md: 320 }}
                  left={(isXs ? 60 : '')}
                  src={item.avatar}
                />
              </Card>
            </Grid>
          ))}
          <Grid paddingTop={5} xs={12} md={6} style={{alignSelf: 'center'}} >
            <Card sx={{
              boxShadow: 0,
              background: 'transparent',
              backgroundImage: 'none',
            }}>
              <Box component={Card}>
                <Typography variant='h5'><b>Summary</b></Typography>
                <p>Proven developer with a trackable interest in data science and 3 years of experience building software to solve business
                  problems. Detailed, thorough, and reliably meet deadlines in demanding and fast paced environments. Quick learner, energetic 
                  collaborator, and advocate of fun and hardwork on the job. 
                </p>
                <Typography variant='h5'><b>Skills</b></Typography>
                <CardContent>
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
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeadShot;
