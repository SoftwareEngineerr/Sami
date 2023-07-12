import image from '../assests/media/image/2779585.jpg'
import { createTheme, useTheme } from "@mui/material/styles";

const theme = createTheme();
const breakpoints = theme.breakpoints;


export const Home = {
    firstsection:{
        MainCard:{
            backgroundImage: `url(${image})`,
            transform: 'skewX(-9deg)',
            height: '100vh',
            width: "100%",
            backgroundSize:'100%',
            transformOrigin: 'top right',
            [breakpoints.down("sm")]: {
                transform: "skewX(0deg)", 
                // Minheight: '600px',
                // height: '600px'
              },
        },
        h3:{
            color: "#3566e0",
            [breakpoints.down("sm")]: {
                padding: "10px", 
                fontSize: '30px'
              },
        },
        p:{
            [breakpoints.down("sm")]: {
                padding: "0px 10px", 
              },
        },
        box:{
            background:'#ffffffba',
            height: '100%',
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        firstcard:{
            height: 'fit-content',
            width: "100%",
            maxWidth: '700px',
            paddingLeft: "50px",
            background: "transparent",
            border: 'none',
            boxShadow:'none',
            transform: "skewX(8deg)",
            [breakpoints.down("sm")]: {
                transform: "skewX(0deg)",
                paddingLeft:"0px"
              },
        },
        stylebackground:{
            backgroundImage: 'url(https://www.copart.com/content/images/floating-design-icons.svg)' ,
            height: "200px" ,
            width:'200px',
            backgroundPosition: "-403px 0",
            width: "145px",
            height: "200px",
            position: "absolute",
            boxShadow:'none',
            right: 0,
            top: "0",
            [breakpoints.down("sm")]: {
                display: "none", // Change textAlign to left for screens < 600px
              },
        },
        cardcenterposition:{
            display: "flex",
            // alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        }
    },
    box:{
        box:{
                display: "flex",
                height: '100%',
                flexDirection: "column",
                justifyContent: "center",
                overflow:'hidden',
                position: 'relative',
        },
        maincard:{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                boxShadow: "0 0 10px 0 #e4e4e4",
                marginLeft: "11px",
                [breakpoints.down("sm")]: {
                    boxShadow: '0 0 10px 0 #c7c7c7',
                    margin: "17px 14px"
                  },
        },
        uploadbutn:{ 
                backgroundColor: '#4CAF50',
                color: '#ffffff' ,
                position:"relative",
                overflow:'hidden',
                width: "90%",
                margin: "auto",
                display: "flex",
                padding: "14px",
                '&:hover': {
                backgroundColor: '#45A049',
                }, 
                [breakpoints.down("sm")]: {
                    paddingLeft: "0px", 
                  },
        },
        butn:{
            width: '100%',
            width: "90%",
            margin: "auto",
            display: "flex",
            padding: "14px",
        },
        selectoption:{
             m: 0, 
             width: "90%",
             margin: "auto",
             display: "flex",
        },
       
    },
    secondsection:{
        marginTop: "50px",
        alignItems: "center",
        [breakpoints.down("sm")]: {
            padding: "10px", 
          },
        MainCard:{
            maxWidth:"600px",
            display:'block',
            margin:'auto',
        },
        image:{
            maxWidth:'500px',
            width:"100%",
            margin:'auto',
            display:'block'
        },
        banner:{
            background: "#d5e1ff",
            margin: 'auto',
            marginTop: "100px",
            padding: "100px 20px",
            position: "relative",
            maxWidth:"1200px",
            overflow:'hidden',
            [breakpoints.down("sm")]: {
                padding: "30px 10px", 
              },


            card:{
                maxWidth:'700px',
                boxShadow: 'none',
                background: 'transparent',
                margin: "auto",
                textAlign: "center",

                h3:{
                    color: "#6490ff",
                    textAlign: "center",
                    fontWeight: "600",
                    [breakpoints.down("sm")]: {
                        fontSize: "23px", 
                      },
                },
                p:{
                    [breakpoints.down("sm")]: {
                        padding:'10px 1px'
                      },
                },
                button:{
                    background:'white',
                    color: 'black',
                    marginTop:'10px',
                    padding:"10px",
                    '&:hover': {
                        backgroundColor: 'white',
                        }, 
                    [breakpoints.down("sm")]: {
                        fontSize: "17px", 
                      },
                },
            },
            image:{
                position: 'absolute',
                maxWidth: '200px',
                left:'0',
                top: '30px'
            }
        }
    },
    thirdsection:{
        maxWidth: '1200px !important',
        margin: "auto",
        display: "block",
        marginTop: '50px',

        image:{
            maxHeigth: '50px',
            maxWidth: '70px',
            marginTop: '40px',
            marginBottom: '20px',
            [breakpoints.down("sm")]: {
                display: 'block',
                margin: 'auto',
                marginTop: '40px',
                marginBottom: '20px'
              },
        },
        h5:{
            [breakpoints.down("sm")]: {
                textAlign:'center'
              },
        },
        p:{
            [breakpoints.down("sm")]: {
                textAlign:'center'
              },
        }
    }
    
}