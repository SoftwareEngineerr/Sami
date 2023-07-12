import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Card, Stack, Typography , Button , List, ListItem, ListItemIcon, ListItemText , CardMedia , useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import { UploadBox } from './box';


export const Firstsection = (props) => {
    const theme = useTheme();
    const firstsection = theme.palette.Home.firstsection;

    const contentList = [
        { id: 1, title: 'Edit the content of your PDF quickly' },
        { id: 2, title: 'Keep the layout of your PDF' },
        { id: 3, title: 'Quickly sign your PDF' },
      ];
      const iconsstyle = {
        padding: "5px",
        background: "#05be7c",
        borderRadius: "50%",
      };


  return (
    <>
    <Grid item lg={7}>
        <Stack sx={firstsection.MainCard}
        >
            <Box 
                sx={firstsection.box}
                >
                <Card
                    sx={firstsection.firstcard}
                >
                    <Typography variant='h3' fontWeight={600} sx={firstsection.h3}>
                        The simple way to manage and modify your PDF files
                    </Typography>
                    <Typography variant='h5' fontWeight={600} mt={1} sx={firstsection.p}>
                        Convert, Edit, Compress. Manage your PDF files the smart way, with PDF Smart.
                    </Typography>

                    <Box mt={1}>
                        <List>
                            {contentList.map((item) => (
                                <ListItem sx={{paddingTop:'0px'}} key={item.id}>
                                <ListItemIcon>
                                    <EditIcon sx={iconsstyle} />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Card>
            </Box>
        </Stack>
    </Grid>
    <Grid item lg={5} md={12} sm={12} xs={12} sx={firstsection.cardcenterposition}>
        <UploadBox />
        <Card sx={firstsection.stylebackground}></Card>

    </Grid>
</>
  )
}