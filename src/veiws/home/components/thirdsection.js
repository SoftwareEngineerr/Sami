import React from 'react'
import PropTypes from 'prop-types'
import { Box, CardMedia, Grid, Typography , useTheme} from '@mui/material'

export const Thirdsection = (props) => {
    const theme = useTheme();
    const thirdsection = theme.palette.Home.thirdsection;


    const list = [
        {image: "https://www.pdfsmart.com/img/home/why1.webp", heading:'An all-in-one tool' , para:`With PDF Smart, all tools are accessible via a single online interface. You can convert, modify, protect, resize, split and even sign any document, all in one place.`},
        {image:'https://www.pdfsmart.com/img/home/why2.webp' , heading:'Total compatibility' , para:`You can access PDF Smart's tools on all major browsers (Google Chrome, Mozilla Firefox, etc.) and operating systems (Windows, Apple, iOS, etc.), and apply PDF Smart tools to all the main file formats (PDF, DOC, PPT, JPG, ODT and TIFF).`},
        {image:'https://www.pdfsmart.com/img/home/why3.webp' , heading:'Popular software' , para:`Just like you, many users trust PDF Smart to modify, convert or protect their PDF files online.  Join a community that is constantly growing.  And to meet all of your file management needs, we are always innovating so that we can offer you more and more solutions.  Now there’s a winning duo!`},
        {image: "https://www.pdfsmart.com/img/home/why1.webp", heading:'An all-in-one tool' , para:`With PDF Smart, all tools are accessible via a single online interface. You can convert, modify, protect, resize, split and even sign any document, all in one place.`},
        {image:'https://www.pdfsmart.com/img/home/why2.webp' , heading:'Total compatibility' , para:`You can access PDF Smart's tools on all major browsers (Google Chrome, Mozilla Firefox, etc.) and operating systems (Windows, Apple, iOS, etc.), and apply PDF Smart tools to all the main file formats (PDF, DOC, PPT, JPG, ODT and TIFF).`},
        {image:'https://www.pdfsmart.com/img/home/why3.webp' , heading:'Popular software' , para:`Just like you, many users trust PDF Smart to modify, convert or protect their PDF files online.  Join a community that is constantly growing.  And to meet all of your file management needs, we are always innovating so that we can offer you more and more solutions.  Now there’s a winning duo!`},
        ]


  return (
    <Grid container  sx={thirdsection} >
        <Grid container lg={12}>
            <Grid item lg={12}   sx={thirdsection.para}>
                <Typography variant='h5' fontWeight={600}>
                     Enjoy all the benefits of PDF Smart
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            {
            list.map((item ,ind)=>
            <Grid item lg={4}>
                <Box>
                <CardMedia
                    component="img"
                    alt="Image Description"
                    sx={thirdsection.image}
                    image={item.image}
          />
                    <Typography variant='h5' sx={thirdsection.h5} fontWeight={600}>
                        {item.heading}
                    </Typography>
                    <Typography variant='p' sx={thirdsection.p} >
                    {item.para}
                    </Typography>
                </Box>
            </Grid>
            )
        }
        </Grid>
    </Grid>
  )
}