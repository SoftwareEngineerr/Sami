import React, { useState } from 'react';
import { 
        FormControl,
        InputLabel, 
        MenuItem, 
        Select,
        useTheme ,
        Grid, 
        Box,
        Input,
        Card,
        Stack,
        Typography ,
        Button , 
        List, 
        ListItem, 
        ListItemIcon,
        ListItemText , 
        CardMedia 
      } from '@mui/material';
import { PDFDocument } from 'pdf-lib';

export const UploadBox = () => {

  
  const theme = useTheme();
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionOption, setConversionOption] = useState('');
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConversionOptionChange = (event) => {
    setConversionOption(event.target.value);
  };

  const handleConvert = async () => {
    if (selectedFile && conversionOption) {
      try {
        const pdfBytes = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(pdfBytes);

        let result;

        if (conversionOption === 'wordpad') {
          const bytes = await pdfDoc.save();
          const uint8Array = new Uint8Array(bytes);
          result = arrayBufferToBase64(uint8Array.buffer);
          console.log('Converted to WordPad:', result);
        } else if (conversionOption === 'powerpoint') {
          // Perform PowerPoint conversion logic here
          console.log('PowerPoint conversion logic goes here');
        }

        // Handle the converted result accordingly (e.g., download, display, etc.)
        setConvertedFile(result);
      } catch (error) {
        console.log('Error occurred during conversion:', error);
      }
    } else {
      console.log('Please select a file and conversion option.');
    }
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleDownload = () => {
    if (convertedFile) {
      const link = document.createElement('a');
      link.href = `data:application/octet-stream;base64,${convertedFile}`;
      link.download = 'converted-file';
      link.click();
    }
  };

  return (
    <div>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Select Conversion Option</InputLabel>
        <Select value={conversionOption} onChange={handleConversionOptionChange}>
          <MenuItem value="wordpad">WordPad</MenuItem>
          <MenuItem value="powerpoint">PowerPoint</MenuItem>
        </Select>
      </FormControl>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <Button variant="contained" onClick={handleConvert}>Convert</Button>
      {convertedFile && (
        <Button variant="contained" onClick={handleDownload}>Download Converted File</Button>
      )} */}


<Box
        sx={theme.palette.Home.box.box}
    >
        <Stack sx={{
                maxWidth: "600px"
            }}>
                <Card sx={theme.palette.Home.box.maincard}>
                            <CardMedia
                                component="img"
                                alt="Image Description"
                                sx={{
                                    maxHeight:'200px',
                                    width:'auto'
                                }}
                                image="https://www.pdfsmart.com/img/home/main-picture.png"
                            />
                            <Typography variant='p' fontSize={20} fontWeight={600}>
                            Drop your PDF file
                            </Typography>
                            <br />

                            <Grid container lg={12}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <Button  type="file" accept=".pdf" onChange={handleFileChange} 
                                  sx={theme.palette.Home.box.uploadbutn}
                              >
                                  Upload Pdf
                                  <Input type="file" accept=".pdf" onChange={handleFileChange} sx={{opacity:'0' , position:"absolute"}} />
                              </Button>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <FormControl sx={theme.palette.Home.box.selectoption}>
                                  <InputLabel>Select Conversion Option</InputLabel>
                                  <Select value={conversionOption} onChange={handleConversionOptionChange}>
                                  <MenuItem value="wordpad">WordPad</MenuItem>
                                  <MenuItem value="powerpoint">PowerPoint</MenuItem>
                                  </Select>
                              </FormControl>
                            </Grid>


                            <Grid item lg={6} md={6} sm={6} xs={12} mt={1}>
                            <Button variant="contained" sx={theme.palette.Home.box.butn} onClick={handleConvert}>Convert</Button>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12} mt={1}>
                            {convertedFile && (
                              <Button variant="contained" sx={theme.palette.Home.box.butn}  onClick={handleDownload}>Download File</Button>
                            )}
                            </Grid>
                          </Grid>
                            
                </Card>
            </Stack>

    </Box>
    </div>
  );
};