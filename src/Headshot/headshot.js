import React from 'react';
import Box from '@mui/material/Box';
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
import avatar from '../assets/avatar.png';

const mock = [
  {
    name: 'SKILLS:',
    tags: ['HTML', 'CSS', 'JavaScript', 'React',  'NodeJS', 'Python', 'Mongo', 'Postgresql', 'AWS Cloud Services', 'Unit Testing', 'CI/CD', 'Power BI'],
    avatar: avatar
  },
];

const HeadShot= () => {
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          < Typography fontWeight={700} variant={'h4'} align={'center'}>
            Raphael Smith
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
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={8} md={8} lg={6} key={i}>
              <Card
                sx={{
                  boxShadow: 0,
                  background: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <Box
                  component={Avatar}
                  width={{ xs: 280, sm: 280, md: 320 }}
                  height={{ xs: 280, sm: 280, md: 320 }}
                  src={item.avatar}
                />
                <Box
                  component={CardContent}
                  bgcolor={'transparent'}
                  marginTop={-5}
                >
                  <Box component={Card} paddingTop={3}>
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
                    <CardContent>
                      {item.tags.map((item) => (
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
                </Box>
              </Card>
            </Grid>
          ))}
          <Grid p={5} xs={12} sm={8} md={8} lg={6} style={{alignSelf: 'center'}} >
            <Card sx={{
              boxShadow: 0,
              background: 'transparent',
              backgroundImage: 'none',
            }}>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeadShot;
