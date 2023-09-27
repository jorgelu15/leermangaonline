import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function TermsAccordion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1. Personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For the purpose of the Policy, personal information is defined as information about an individual that the Company collects in accordance with the Policy when the User uses the Service, and information that can identify the specific individual contained in the information (excluding personal identification codes). The term personal information refers to information about individuals that the Company collects based on the Policy when Users use the Service, and that can be used to identify specific individuals (excluding personal identification codes, but including information that can be easily cross-checked with other information to identify specific individuals). The term personal information refers to information about a user that is collected by the Company.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2. Intended use of personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. The Company collect and process personal information only for the purposes described below:
          </Typography>
          <Typography>
            2. The Company may obtain information from third party tools about advertisements clicked on prior to visiting the Company’s website (time and date of click, website serving the advertisement, etc.) and may associate this data with order information to measure the effectiveness of the advertisement.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3. Limitations of use</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. The Company shall not use personal information obtained by users through the use of the Service beyond the scope necessary to achieve the above purposes of use
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>4. Implementation of appropriate security management measures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. The Company shall implement necessary and appropriate security management measures with respect to personal information held by the Company to prevent unauthorized access, falsification, data leakage, loss or damage, etc. These measures include establishing a person in charge of personal information management, organizing internal discipline, training employees, monitoring access to the company, restricting equipment brought in, restricting access to information, preventing unauthorized access, etc. Please contact the address given in Section 13 for any inquiries regarding safety management measures.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>5. Retention period of personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Personal information processed by the Company will be stored by the Company for the period necessary to achieve the purposes set forth in the Policy and to fulfill the obligations under laws and regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>6. Outsourcing the management of personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. In the event that the Company consigns the handling of acquired personal information to a third party, the Company will enter into a necessary agreement with the consignor regarding the handling of personal information and supervise the consignor to ensure that the consignor manages the personal information appropriately.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>7. Provision of personal information to third parties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. The Company will not provide personal information to third parties without the consent of the user, except when permitted by law. However, this does not apply to some cases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>8. Provision to third parties abroad</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. When providing personal information to third parties in foreign countries, the Company will take necessary measures in accordance with the provisions of laws and regulations, such as providing information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>9. Anonymized or pseudonymized personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. The Company shall handle anonymized or pseudonymized personal information (referring to “anonymized personal information” and “pseudonymized personal information” as defined in the Act on the Protection of Personal Information) in accordance with the provisions of laws and regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{backgroundColor: 'rgb(46, 46, 46)', color: '#fff'}} id='accordionbottom'>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>10. Requests for disclosure and correction of personal information, etc., and users rights regarding personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. When users make requests based on the Act on the Protection of Personal Information regarding the personal data of such users that the Company holds, requests for notification of the purpose of use, disclosure (including disclosure of records of provision/receipt of personal data to/from third parties), correction, addition, deletion, suspension of use/erasure or cessation of provision to third parties (hereinafter referred to them as “disclosure, etc.”), the Company shall respond to the users in accordance with the Act after confirming that the request is made by the users themselves. To make such a request, please contact the address given in Section 13.
          </Typography>
          <Typography>
            2. Users may withdraw their consent to the Policy at any time. Withdrawal will not, however, affect the legality of any use based on the agreement prior to withdrawal.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}