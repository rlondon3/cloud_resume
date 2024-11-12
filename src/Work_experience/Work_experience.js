/* eslint-disable quotes */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { Divider } from '@mui/material';

const mock = [
  {
    comapny: 'CatapultK12',
    position_dates: [
      'Front-end Developer',
      <Typography style={{ float: 'right', fontSize: '1.2rem' }}>
        1/2024 - Present
      </Typography>,
    ],
    position_overview:
      'Build custom components for content management system using React and Jquery. Tier 2 Esculation for tech support.',
    accomplishments: [
      // eslint-disable-next-line quotes
      'CMS Development: Developed custom components for the CMS using React and TypeScript, ensuring data consistency and type integrity. This led to improved client-specific feature implementation.',
      "Optimization: Improved the CMS editor's performance by creating a React loader application to be used inside of aspx files. This dramatically improved the UX by eliminatimg reload on edit.",
      'UX Collaboration: Collaborated with designers on UX mockups and transformed designs into functional CMS components for newly acquired customers.',
      'Debugging: Troubleshoot system errors and bugs reported by support.',
      'Git Version Control: Managed version control for support tickets and feature development using Git, including branch creation, merges, and code reviews.',
    ],
  },
  {
    comapny: 'ion Software Group',
    position_dates: [
      'Fullstack Software Engineer',
      <Typography style={{ float: 'right', fontSize: '1.2rem' }}>
        01/2022 - 1/2024
      </Typography>,
    ],
    position_overview:
      'Develop, maintain, and test student centric data features using JavaScript frameworks/libraries, and Visual Basic. Support the entire application and over 500 end-users.',
    accomplishments: [
      'Data Optimization: Reduced data loading times from 20 seconds to under 5 seconds in integral parts of the software by optimizing database interactions and leveraging React’s state management.',
      'API Integration: Implemented internal company-specific APIs, handling all CRUD operations and ensuring seamless integration with the existing frontend system.',
      'Legacy Code Refactor: Refactored legacy code by creating helper utility files to streamline modernization without disrupting the codebase, ensuring compatibility with modern development standards.',
      'Git for Team Collaboration: Used Git and version control systems to manage code repositories, enabling efficient collaboration, code tracking, and version history management for features, bug fixes, and new development projects.',
    ],
  },
];

const Work_experience = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  return (
    <Box bgcolor="alternate.main">
      <Container>
        <Divider />
        <Typography
          variant="h5"
          style={{
            fontWeight: 700,
            paddingTop: '20px',
            textAlign: !isSm ? 'start' : '',
            paddingLeft: !isSm ? '30px' : '',
          }}
        >
          PROFESSIONAL EXPERIENCE
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
                    {item.position_overview}
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

export default Work_experience;
