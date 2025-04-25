import React from "react";
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import tack_img from "../../assets/PNG/tack_img.png"
import faqs_ellips from "../../assets/PNG/faqs_ellips.png"

const FAQs = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return <>
        <div className="relative">
            <img className="absolute top-0 right-[54px] hidden lg:block" src={tack_img} alt="img" />
            <img className="absolute bottom-[-2%] left-[39px] hidden lg:block" src={tack_img} alt="img" />
            <img className="absolute top-0 right-0 hidden lg:block -z-40" src={faqs_ellips} alt="ellips" />
            <div className="max-w-[1360px] px-3 mx-auto  lg:mt-[130px] sm:mt-[80px] mt-[60px]">
                <p className="font-semibold md:text-[40px] sm:text-[34px] text-[25px] leading-[56px] font_poppins text-white text-center">
                    FAQ<span className="clr_linear_yellow">s</span>
                </p>
                <div className="lg:w-[796px] md:w-[98%] mx-auto lg:mt-[60px] mt-[30px]">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%' }}>
                                <p className="lg:text-[24px] md:text-[20px] text-[16px] sm:text-[18px] !text-[white]" >Q1. Fermentum in hac mattis viverra orem commodo?</p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="md:text-[16px] sm:text-[14px] text-[12px]">
                                    Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="md:mt-[30px] sm:mt-[24px] mt-[18px]" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%' }}>
                                <p className="lg:text-[24px] md:text-[20px] text-[16px] sm:text-[18px]">Q2. Viverra ipsum gravida etiam sem iaculis?</p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="md:text-[16px] sm:text-[14px] text-[12px]">
                                    Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="md:mt-[30px] sm:mt-[24px] mt-[18px]" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%' }}>
                                <p className="lg:text-[24px] md:text-[20px] text-[16px] sm:text-[18px]">
                                    Q3. Morbi curabitur suscipit id posuere?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="md:text-[16px] sm:text-[14px] text-[12px]">
                                    Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="md:mt-[30px] sm:mt-[24px] mt-[18px]" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%' }}>
                                <p className="lg:text-[24px] md:text-[20px] text-[16px] sm:text-[18px]">
                                    Q4. Cursus sit sit velsem accumsan varius sed auris?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="md:text-[16px] sm:text-[14px] text-[12px]">
                                    Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="md:mt-[30px] sm:mt-[24px] mt-[18px]" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%' }}>
                                <p className="lg:text-[24px] md:text-[20px] text-[16px] sm:text-[18px]">
                                    Q5. Dui tincidunt sed eu convallis quis ultrices?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="md:text-[16px] sm:text-[14px] text-[12px]">
                                    Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="md:mt-[30px] sm:mt-[24px] mt-[18px]" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5bh-content"
                            id="panel5bh-header"
                        >
                            <Typography sx={{ width: '100%' }}>
                                <p className="lg:text-[24px] md:text-[20px] text-[16px] sm:text-[18px]">
                                    Q6. Arcu lorem faucibus eu integer orci pretium faucibus?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="md:text-[16px] sm:text-[14px] text-[12px]">
                                    Mknki consequat sagittis elementum tincidunt sed quis dictum tiam arcu tempor pulvinar volutpat massa eget praesent.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    </>;
};

export default FAQs;
