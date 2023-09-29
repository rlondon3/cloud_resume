import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    title: 'CERTIFICATIONS',
    subtitle: null,
    field: 'AWS:',
    field2: 'EDB:',
    description:
    'Certified Cloud Practitioner, On-going',
    description2: 
    'PostgreSQL 12 Associate Certification, On-going'
  },
];

const Education_training = () => {
  return (
    <Box bgcolor="alternate.main">
      <Container>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            paddingLeft: 2,
            paddingRight: 2
          }}
        >
          {mock.map((item, i) => (
            <ListItem sx={{ alignItems: 'unset', justifyContent: 'center' }} key={i}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
              </Box>
              <Box marginLeft={2}>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{ fontWeight: 700, fontSize: '1.5rem' }}
                  secondaryTypographyProps={{ fontSize: '16px' }}
                />
                <Box marginTop={2}>
                  {item.field}
                  <Typography variant={'subtitle2'} style={{ fontSize: '16px'}}>
                  &nbsp; &bull; {item.description}
                    <br/>
                    <br/>
                    {item.field2}
                    <br/>
                  &nbsp; &bull; {item.description2}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Education_training;
