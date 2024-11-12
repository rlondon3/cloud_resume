import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const mock = [
  {
    comapny: 'AWS Cloud Resume Challenge',
    position_dates: [
      'S3 | CloudFront | Route 53 | Lambda | Dynamo DB | Github Actions | Terraform | React | Python',
    ],
    project_overview:
      'Published by Forrest Brazeal, this is a multiple-step project that upon completion demonstrates IaC, CI/CD, Source Control, Fullstack Development, DNS, and the implementation of AWS Cloud Services.',
    accomplishments: [
      'Created "cloud user" in AWS IAM with permissions to create, read, update, and delete AWS cloud services and policies for this project.',
      'Developed the UI in React with stateless functional components, and a Lambda function in Python which retrieves data from a table created in Dynamo DB.',
      'Developed Github actions workflow for CI/CD with the React Frontend and AWS S3. Implemented Terraform for IaC architecture of Lambda API.',
    ],
  },
  {
    comapny: [
      'Pandas - Jupyter Notebooks',
      ' ',
      <a
        href="https://github.com/rlondon3/Data-Analysis-w-Pandas-1"
        style={{ fontSize: '1.2rem' }}
      >
        View Source Code
      </a>,
    ],
    position_dates: ['Python | Pandas | PowerBI | Jupter Notebooks'],
    project_overview:
      'A project to analyze the Wind Speed of varioius weather conditions using Pandas library.',
    accomplishments: [
      'Created dataframes and interviewed data for candidacy for data analysis.',
      'Transformed datatypes and cleaned data.',
      'Found mean, average, standard deviation, and other metrics for understanding the meaning of Wind Speed data as it relates to weather conditions.',
      'Created PowerBI visualizations from Pandas metrics.',
    ],
  },
  {
    comapny: [
      'NY Times Bestsellers Frontend',
      ' ',
      <a href="https://alluring-bears.surge.sh/" style={{ fontSize: '1.2rem' }}>
        View Site
      </a>,
    ],
    position_dates: [
      'React | Material UI | Context API | React Hooks | Joi Validation',
    ],
    project_overview:
      'This is a ReactJS Frontend that calls the New York Times Best Sellers API and renders the top 15 best sellers in a table.',
    accomplishments: [
      'Implemented a Context API for state management over React components.',
      'Dynamically render components based on data received from API.',
      'Created multiple reusable components with a well organized file system.',
    ],
  },
  {
    comapny: [
      'User Authentication Backend',
      ' ',
      <a
        href="https://github.com/rlondon3/authenticate-user"
        style={{ fontSize: '1.2rem' }}
      >
        View Source Code
      </a>,
    ],
    position_dates: [
      'Node.js | Express | Jasmine | MongoDB | Mongoose | Docker | JSON Webtoken | Bcrypt | Unit Testing | Joi',
    ],
    project_overview:
      'This is a NodeJS server with a user model and route, and authentication middleware that generates JWTs. This application has a CI/CD pipeline through CircleCI that serves the application to a Docker image if all the spec tests pass.',
    accomplishments: [
      'Created a Mongoose Schema that uses the Joi library to validate user submitted data.',
      'Used Express for communication between the client and server, and for delivery of the JWTs.',
      'Defined spec tests using the Jasmine library for the user schema, routes, and authentication middleware.',
      'CircleCI workflow for CI/CD with Docker Image.',
    ],
  },
];

const Projects = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  return (
    <Box bgcolor="alternate.main">
      <Container>
        <Typography
          variant="h5"
          style={{
            fontWeight: 700,
            paddingTop: '20px',
            textAlign: !isSm ? 'start' : '',
            paddingLeft: !isSm ? '30px' : '',
          }}
        >
          TECHNICAL PROJECTS
        </Typography>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 0,
          }}
        >
          {mock.map((item, i) => (
            <ListItem sx={{ alignItems: 'unset' }} key={i}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              ></Box>
              <Box marginLeft={2}>
                <ListItemText
                  primary={item.comapny}
                  secondary={item.position_dates}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    fontSize: '1.8rem',
                  }}
                  secondaryTypographyProps={{ fontSize: '1.2rem' }}
                />
                <Box marginTop={2}>
                  <Typography
                    variant={'subtitle2'}
                    style={{ fontSize: '1rem', fontWeight: '700' }}
                  >
                    {item.project_overview}
                  </Typography>
                </Box>
                <Box>
                  {item.accomplishments.map((item, i) => (
                    <Container key={i}>
                      <Typography margin={1}> &nbsp; &bull; {item}</Typography>
                    </Container>
                  ))}
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Projects;
