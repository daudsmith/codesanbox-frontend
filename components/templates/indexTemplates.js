import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IndexOrganism from '../organisms/indexOrganism'
import Grid from '@mui/material/Grid';

const IndexTemplates = () => {

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <IndexOrganism/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <style jsx global>
                    {`
                        .card-layout {
                            position: relative;
                            max-width: 544px;
                            min-height: 470px;
                            box-shadow: 0px 4px 16px rgba(11, 17, 52, 0.2);
                            border-radius: 4px;
                            margin: 0 auto;
                            top: 17%;
                        }
                        .image-layout {
                            height: 272px;
                            background: linear-gradient(270deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 16.21%), 
                            linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 17.97%), 
                            linear-gradient(1.28deg, rgba(0, 0, 0, 0.5) 1.09%, rgba(0, 0, 0, 0) 50.29%);
                            border-radius: 4px 4px 0px 0px;
                            
                        }
                        .image-layout img {
                            -webkit-transition: .5s ease-in-out;
                            transition: .5s ease-in-out;
                        }
                        .image-layout:hover img {
                            opacity: .6;
                        }
                        .flag-layout {
                            width: 134px;
                            height: 25px;
                            margin-top: -98%;
                            margin-left: -2px;
                            z-index: 1;
                        }
                        .carousel-layout {
                            height: 272px;
                        }
                        .icon-layout {
                            height: 40px;
                            width: 40px;
                        }
                        .property-name {
                            margin-top: -9%;
                            margin-left: 10%;
                            font-family: AvenirNextRegular;
                            font-weight: 600;
                            font-style: normal;
                            font-size: 23px;
                            line-height: 31px;
                            color: #1A2258;
                        }
                        .property-address {
                            margin-left: 10%;
                            font-family: AvenirNextRegular;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 19px;
                            color: #787D9C;
                        }
                        .property-prices {
                            margin-top: -9%;
                            font-family: AvenirNextRegular;
                            font-weight: 600;
                            font-style: normal;
                            font-size: 19px;
                            line-height: 26px;
                            color: #1A2258;
                            text-align: right;
                        }
                        .property-subprices {
                            font-family: AvenirNextRegular;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 19px;
                            text-align: right;
                            color: #787D9C;
                        }
                        .property-additional {
                            margin-top: 2%;
                            font-family: AvenirNextRegular;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 22px;
                            color: #1A2258;
                        }
                        .property-subadditional {
                            font-family: AvenirNextRegular;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 22px;
                            color: #1A2258;
                        }
                        .description-button {
                            padding-left: 75%;
                            font-family: AvenirNextRegular;
                            font-style: normal;
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 22px;
                            color: #1757D7;
                            text-transform: capitalize;
                        }
                        @media (max-width: 435px) {
                            .property-name {
                                margin-left: 13%;
                                margin-top: -11%;
                                font-family: AvenirNextRegular;
                                font-weight: 600;
                                font-style: normal;
                                font-size: 16px;
                                line-height: 22px;
                                color: #1A2258;
                            }
                            .property-address {
                                margin-left: 13%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 12px;
                                line-height: 16px;
                                color: #787D9C;
                            }
                            .property-additional {
                                margin-top: -22%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1A2258;
                            }
                            .property-subadditional {
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1A2258;
                            }
                            .property-prices {
                                margin-top: 17%;
                                font-family: AvenirNextRegular;
                                font-weight: 600;
                                font-style: normal;
                                font-size: 16px;
                                line-height: 22px;
                                color: #1A2258;
                                text-align: left;
                            }
                            .property-subprices {
                                margin-top: -7%;
                                margin-left: 47%;
                                font-family: AvenirNextRegular;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 14px;
                                line-height: 29px;
                                color: #787D9C;
                                text-align: left;
                            }
                            .description-button {
                                margin-top: 6%;
                                margin-left: 17%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 600;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1757D7;
                                text-transform: capitalize;
                                padding-left: 52%;
                            }
                            .flag-layout {
                                width: 134px;
                                height: 25px;
                                margin-top: -135%;
                                margin-left: -2px;
                                z-index: 1;
                            }
                        }
                        @media (max-width: 380px) {
                            .property-name {
                                margin-left: 15%;
                                margin-top: -12%;
                                font-family: AvenirNextRegular;
                                font-weight: 600;
                                font-style: normal;
                                font-size: 16px;
                                line-height: 22px;
                                color: #1A2258;
                            }
                            .property-address {
                                margin-left: 15%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 12px;
                                line-height: 16px;
                                color: #787D9C;
                            }
                            .property-additional {
                                margin-top: -25%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1A2258;
                            }
                            .property-subadditional {
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1A2258;
                            }
                            .property-prices {
                                margin-top: 17%;
                                font-family: AvenirNextRegular;
                                font-weight: 600;
                                font-style: normal;
                                font-size: 16px;
                                line-height: 22px;
                                color: #1A2258;
                                text-align: left;
                            }
                            .property-subprices {
                                margin-top: -8%;
                                margin-left: 49%;
                                font-family: AvenirNextRegular;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 14px;
                                line-height: 29px;
                                color: #787D9C;
                                text-align: left;
                            }
                            .description-button {
                                margin-top: 6%;
                                margin-left: 13%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 600;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1757D7;
                                text-transform: capitalize;
                                padding-left: 50%;
                            }
                            .flag-layout {
                                width: 134px;
                                height: 25px;
                                margin-top: -155%;
                                margin-left: -2px;
                                z-index: 1;
                            }
                        }
                        
                        @media (max-width: 330px) {
                            .property-name {
                                margin-left: 18%;
                                margin-top: -15%;
                                font-family: AvenirNextRegular;
                                font-weight: 600;
                                font-style: normal;
                                font-size: 16px;
                                line-height: 22px;
                                color: #1A2258;
                            }
                            .property-address {
                                margin-left: 18%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 12px;
                                line-height: 16px;
                                color: #787D9C;
                            }
                            .property-additional {
                                margin-top: -27%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1A2258;
                            }
                            .property-subadditional {
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1A2258;
                            }
                            .property-prices {
                                margin-top: 25%;
                                font-family: AvenirNextRegular;
                                font-weight: 600;
                                font-style: normal;
                                font-size: 14px;
                                line-height: 22px;
                                color: #1A2258;
                                text-align: left;
                            }
                            .property-subprices {
                                margin-top: -10%;
                                margin-left: 53%;
                                font-family: AvenirNextRegular;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 12px;
                                line-height: 29px;
                                color: #787D9C;
                                text-align: left;
                            }
                            .description-button {
                                margin-top: 6%;
                                margin-left: 10%;
                                font-family: AvenirNextRegular;
                                font-style: normal;
                                font-weight: 600;
                                font-size: 14px;
                                line-height: 19px;
                                color: #1757D7;
                                text-transform: capitalize;
                                padding-left: 45%;
                            }
                            .flag-layout {
                                width: 134px;
                                height: 25px;
                                margin-top: -186%;
                                margin-left: -2px;
                                z-index: 1;
                            }
                        }
                    `}
                </style>
        </>
      );
    };

  
export default IndexTemplates;