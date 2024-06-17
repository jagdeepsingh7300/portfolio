import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: "500px",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "252px",
          overflow: "revert !important",
        }}
      >
        <Tab label="LN Webworks Private Limited" {...a11yProps(0)} />
        <Tab
          label="Kinex Media - Full-Service Digital Agency"
          {...a11yProps(1)}
        />
        <Tab label="C.S. Soft Solutions (India) Pvt Ltd" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography component="div">
          <ListItem>
            <span
              style={{
                content: "'\\2022'",
                color: "red",
                fontWeight: "bold",
                display: "inline-block",
                width: "1em",
                marginLeft: "-1em",
              }}
            ></span>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Increase the efficiency of the Websites by 50% by optimizing web pages and enhancing User experience"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Managed the cPanel of all the websites and system processes throughout the organization."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Worked on https://thedermreview.com/ and https://carrotstick.com brands of America using PHP, Reactjs, GitHub, HTML/CSS, SASS, GraphQl, WordPress, Responsive web design, MySQL, Jira, and Slack."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Allocated tasks to team members and assigned time frames to accomplish the task from requirement analysis, design, coding, testing, and deployment."
            />
          </ListItem>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="div">
          Worked on 30+ Canadian sites from scratch
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Used WooCommerce, php, JavaScript, Html, CSS, smtp mailer. Developed and maintain fully various functional web applications for employer's clients by specifications and current industry standards."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Worked on heart monitoring website. Configure the custom PayPal payment functionality to get IPN message in the URL of payment and then the user can be able to use the calculator."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Developed the Companies employee’s portal in which there is attendance, report system and schedule of all projects."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Partnered with frontend developers and Team members to Improve the speed and look of websites"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ listStyleType: "circle" }}
              primary="Developed the Optimized sites which helped the client to rank on google."
            />
          </ListItem>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="div">
          Developed movie app using IMDB Api using various layouts and
          functionality. Conducting thorough testing and debugging to ensure
          optimal app performance Using various tools such as Android Studio,
          Firebase, and Git to streamline the development process
        </Typography>
      </TabPanel>
    </Box>
  );
}
