import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Card, Stack, Typography , Button , List, ListItem, ListItemIcon, ListItemText , CardMedia , useTheme } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export const Secondsection = (props) => {
    const theme = useTheme();
    const secondsection = theme.palette.Home.secondsection;

    const contentList = [
        { id: 1, title: 'Click the Select a file button above, or drag and drop a file into the drop zone.' },
        { id: 2, title: 'Select the PDF you want to convert to the DOCX file format.' },
        { id: 3, title: 'Watch Acrobat automatically convert the file from PDF to an editable Word document.' },
        { id: 4, title: 'Download your file. If you use the tool again, you may be asked to sign in to download it.' },
      ];
   
  return (
    <>
    
    <Grid container p={4} sx={secondsection}>
       <Grid item lg={6}  order={{ md: 2, lg: 2 }}>
        <CardMedia
          component="img"
          alt="Image Description"
         sx={secondsection.image}
          image="https://www.pdfsmart.com/img/home/feature.png"
          />
        </Grid>
        <Grid item lg={6} order={{ md: 1, lg: 1 }}>
            <Box sx={secondsection.MainCard}>
            <Typography variant='h4' fontWeight={600}  data-aos="fade-up" data-aos-container=".my-scroll-container">
                How to convert PDFs to Word
            </Typography>
            <Typography variant='h6'>
                Follow these easy steps to turn a PDF into a Microsoft Word document:
            </Typography>
            <hr />
            {contentList.map((item) => (
                <>
            <ListItem sx={{paddingTop:'0px'}} key={item.id}>
                 <ListItemIcon>
                    {item.id}
                 </ListItemIcon>
                 <ListItemText primary={item.title} />
            </ListItem>
                 <hr />
            </>
            ))}
            </Box>
        </Grid>
       
    </Grid>
        
    <Grid container p={4} sx={secondsection}>
       
    <Grid item lg={6}>
        
        <CardMedia
          component="img"
          alt="Image Description"
         sx={secondsection.image}
          image="https://www.pdfsmart.com/img/home/mobile.webp"
        />
        </Grid>
        <Grid item lg={6}>
            <Box sx={secondsection.MainCard}>
            <Typography variant='h4' fontWeight={600}  data-aos="fade-up" data-aos-container=".my-scroll-container">
                    Edit your PDFs from your Smartphone
            </Typography>
            <Typography variant='p'>
                   With PDF Smart, you can use your online PDF tools from your Smartphone.
            </Typography>
            <br />
            <Typography variant='p'>
                Ideal for modifying, converting, signing or protecting files at your fingertips – even when you’re on the move.
            </Typography>
            </Box>
        </Grid>
       
    </Grid>

    <Grid container p={4} sx={secondsection}>
       <Grid item lg={12} >
          <Box sx={secondsection.banner}>
        <CardMedia
          component="img"
          alt="Image Description"
         sx={secondsection.banner.image}
          image="https://www.pdfsmart.com/img/home/try-background1.png"
          />
            <Card sx={secondsection.banner.card}>
            <Typography variant='h3' sx={secondsection.banner.card.h3}>
            Start your free trial now Try PDF Smart free of charge
            </Typography>
            <Typography variant='p' sx={secondsection.banner.card.p}>
                Our 7-day free trial gives you unlimited access to all our tools for managing your PDF files more easily. Try it out today!
            </Typography>
            <br />
            <Button sx={secondsection.banner.card.h3}>
                Start your free trial now
            </Button>

            </Card>

          </Box>

        </Grid>
       
       
    </Grid>
    </>
  )
}