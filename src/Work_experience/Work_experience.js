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
    comapny: 'ion Software Group',
    position_dates: ['Fullstack Software Engineer', <Typography style={{ float: 'right', fontSize: '1.2rem'}}>01/2022 - Present</Typography>],
    position_overview:
     'Develop, maintain, and test student centric data features using JavaScript frameworks/libraries, and Visual Basic. Support the entire application and over 500 end-users.',
    accomplishments: [
      'Utilize JavaScript libraries to revamp the user interface of student portfolio data; resulting in an increase in user retention and a 15% decrease in customer support inquiries, as the intuitive and responsive design improved the overall user experience and reduced friction in accessing educational resources.',
      'Collaborated with Senior Developer and built a custom student behavior dashboard to provide behavior analysis and data-driven insights on students. Feedback from teachers was overwhelmingly positive: the dashboard has become a valuable artifact for principals and administration when presenting data findings to their district leaders.',
      'Refactored core UI from aspx and vanilla JavaScript into React functional components with hooks; dramatically improving the programming logic used to mimic a dynamic web application by eliminating jquery show/hide functions, window.reload, and aspx files.'
    ]
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
        <Typography variant='h5' style={{fontWeight: 700, paddingTop: '20px', textAlign: !isSm ? 'start' : '', paddingLeft: !isSm ? '30px' : ''}}>PROFESSIONAL EXPERIENCE</Typography>
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
              >
              </Box>
              <Box marginLeft={2}>
                <ListItemText
                  primary={item.comapny}
                  secondary={item.position_dates}
                  primaryTypographyProps={{ fontWeight: 700, fontSize:'1.8rem' }}
                  secondaryTypographyProps={{ fontSize: '1.2rem'}}
                />
                <Box marginTop={2}>
                  <Typography variant={'subtitle2'} style={{ fontSize: '1rem', fontWeight: '700'}}>
                    {item.position_overview}
                  </Typography>
                </Box>
                <Box>
                  {item.accomplishments.map((item, i) => (
                    <Container key={i}>
                      <Typography margin={1} > &nbsp; &bull; {item}</Typography>
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
