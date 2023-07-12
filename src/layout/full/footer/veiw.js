import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Typography , useTheme , ListItem , ListItemText , List , Stack , Box } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction';

export const Footer = (props) => {
  const theme = useTheme();
  const getfooter = theme.palette.Footersection;

  const contentList = [
    { id: 1, title: 'Edit to Pdf' },
    { id: 2, title: 'Merge Pdfs files online' },
    { id: 3, title: 'Splite a pdf file online' },
    { id: 3, title: 'Compress a PDf file' },
    { id: 3, title: 'Rotate a PDf ' },
  ];
  const fourtime = [
    {id:'1'},
    {id:'2'},
    {id:'3'},
    {id:'4'},
  ];

  return (
    
      <Stack sx={getfooter}>
        <Grid container sx={getfooter.box}>
{
        fourtime.map((item , ind)=>
        <Grid item lg={3}>
          <Typography variant='h5' sx={getfooter.heading} fontWeight={600}>
            <ConstructionIcon sx={getfooter.icons} />Tools
          </Typography>
        <List>
          {contentList.map((item) => (
            <ListItem sx={{paddingTop:'0px'}} key={item.id}>

            {/* <ListItemIcon>
            <EditIcon sx={iconsstyle} />
           </ListItemIcon> */}
          <ListItemText primary={item.title} />
        </ListItem>
       ))}
         </List>
        </Grid>
        )
}
        </Grid>
      </Stack>
      
  )
}

Footer.propTypes = {}