import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import Container from 'components/Container';
import Typewriter from 'Typewriter/typewriter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const mock = [
  {
    name: 'SKILLS:',
    title: 'HTML - CSS - JavaScript - React - NodeJS - Python - Mongo - Postgresql - AWS Cloud Services - Unit Testing - CI/CD',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
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
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <Box
                  component={CardContent}
                  bgcolor={'transparent'}
                  marginTop={-5}
                >
                  <Box component={Card}>
                    <CardContent>
                      <ListItemText
                        primary={item.name}
                        secondary={item.title}
                      />
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
              <Typography variant='h5'><PermContactCalendarIcon/>Contact</Typography>
              <br/>
              
              <p style={{ textAlign: 'center'}}>
                <b><LocalPhoneIcon/> </b> (916) 707-4373
                <br/>
                <br/>
                <b><LocalPostOfficeIcon/> </b> codesmithr@outlook.com
                <br/>
                <br/>
                <b><AccountTreeIcon/> </b>Portfolio: <a href='https://www.codesmithr.com' target="_blank" rel="noopener noreferrer">www.codesmithr.com</a>
                <br/>
                <br/>
                <a href='https://www.github.com/rlondon3' target='_blank' rel='noopener noreferrer' ><GitHubIcon /></a>
                <a href='https://www.linkedin.com/in/raphael-smith-b91a65206/' target='_blank' rel='noopener noreferrer'><LinkedInIcon /></a>
                <a href='https://programmingthestreets.hashnode.dev/' target='_blank' rel='noopener noreferrer'><RssFeedIcon /></a>
              </p>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeadShot;
