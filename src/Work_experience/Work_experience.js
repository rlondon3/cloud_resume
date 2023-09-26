import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const mock = [
  {
    comapny: 'ion Software Group',
    position_dates: ['Fullstack Software Engineer', <Typography style={{ float: 'right', fontSize: '1.2rem'}}>01/2022 - Present</Typography>],
    position_overview:
     'Develop, maintain, and test student centric data features using JavaScript frameworks/libraries, and Visual Basic. Support the entire application and over 500 end-users.',
    accomplishments: [
      'Utilize jquery, handlebars, and other JavaScript libraries to revamp the user interface of student portfolio data; resulting in an increase in user retention and a 15% decrease in customer support inquiries, as the intuitive and responsive design improved the overall user experience and reduced friction in accessing educational resources.',
      'Collaborated with Senior Developer and built a custom student behavior dashboard to provide behavior analysis and data-driven insights on students. Feedback from teachers was overwhelmingly positive: the dashboard has become a valuable artifact for principals and administration when presenting data findings to their district leaders.',
      'Collaborated closely with our data analyst team to streamline and clean raw data sets, ensuring the accuracy and reliability of the information used for our analytics.'
    ]
  },
  {
    comapny: 'Beijing SMIC School',
    position_dates: ['ELA Teacher', <Typography style={{ float: 'right', fontSize: '1.2rem'}}>08/2020 - 08/2021</Typography>],
    position_overview:
    'Strengthened the English track literature department, post-covid, by providing staff training on how to teach ELA to ESOL learners. Taught and mentored two 4 grade classes.',
    accomplishments: [
      'Jointly prepared curriculums, benchmark testing, and extra-curriculuar activities for 4 grade English immersion cohort; which allowed for data tracking of the academic and emotional progress of students returning to school after months of home schooling.',
      'Participated in the "Responsible Leaders" committee; and aided in improving communication between teachers and administration',
    ]
  },
  {
    comapny: 'China Agricultural University',
    position_dates: ['Adjunct Lecturer', <Typography style={{ float: 'right', fontSize: '1.2rem'}}>08/2017 - 08/2020</Typography>],
    position_overview:
    'Managed, coordinated, and taught Content-based ESL for the International College Beijing(ICB). Responsible for supporting over 200 students within the college.',
    accomplishments: [
      'Managed 12 writing lab instructors by providing educational resources and culturally relavant professional development; which resulted in foreign(non-Chinese) lecturer retention.',
      'Liaisoned for visiting scholars from University of Colorado Denver; which contributed to cultural research necessary for research in the field of communications.',
      'Implemented the Content-based ESL curriculum; which allowed for the college to successfully hire foreign talents and meet departmental staffing goals.',
    ]
  },
];

const Work_experience = () => {
  return (
    <Box bgcolor="alternate.main">
      <Container>
        <Typography variant='h5' style={{fontWeight: 700}}>PROFESSIONAL EXPERIENCE</Typography>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            padding: 2,
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
