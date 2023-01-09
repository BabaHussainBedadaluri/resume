import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import Image from "../images/Baba.jpeg";

const path = "BabaHussain";
const contact = [
  {
    icon: <MailIcon />,
    text: "	bedadaluribabahussain2000@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    text: "+91 9182898018",
  },
  {
    icon: <LinkedInIcon />,
    text: "https://www.linkedin.com/in/baba-hussain-bedadaluri-16370717a",
    val: 2,
  },
];

const awards = [
  {
    icon: <TurnedInIcon />,
    text: "Customer Expert",
  },
];

const sideBarContents = [
  {
    title: "Professional Summary-Proficient",
    list: "React JS, JavaScript, Redux, HTML5, CSS, Responsive Design, Bootstrap, Azure App Services",
  },
  {
    title: "Professional Summary-Exposure",
    list: "PL-SQL, SQL, Java, GIT",
  },
  {
    title: "Interests",
    list: "Web Development, Full-Stack, Playing Video Games",
  },
  {
    title: "Languagues",
    list: "English, Telugu, Hindi",
  },
  {
    title: "Certification",
    list: "Azure Fundamentals ( AZ-900 )",
  },
];

const name = "Baba Hussain Bedadaluri";
const designation = "Software Engineer";
const proSummary = `1 year of experience in building Responsive web applications.
Proficient in writing high-quality code and application interface code via Javascript and ReactJS
Proven track record of building reusable components.
Experienced in Full-stack development.
Excellent analytical, problem-solving skills and self-motivated.
Ability to adopt new technologies swiftly and excellent code debugging skills.`;

const workExperiance = [
  {
    designation: "Software Development Consultant | Front End Developer",
    duration: "Tata Consultancy Services| March 2022 - present",
    contribution: `Developed Staff login pages in WHS website with React
            Developed highly reusable responsive components.
            Created reusable Address Typeahead component which is used across multiple pages on WHS's app.
            Integrated Redux throughout the Application
            Integrated all APIS using Redux-thunk.`,
  },
];

const personalProjects = [
  {
    title: "Weather Forecast",
    info: "A responsive weather forecast website is built with react js. It can show real-time weather reports of any city in the world and five days forecast.",
    web_link:
      "https://babahussainbedadaluri.github.io/new-weather-forecast-app/",
  },
  {
    title: "Bank of Baroda",
    info: "An interactive Dummy Bank website, where account holders can log in, make payments, history of transactions, and can dismiss the account. (User: js Pin: 1111)",
    web_link: "https://babahussainbedadaluri.github.io/Bank-of-Baroda/",
  },
  {
    title: "Dice Game",
    info: "An entertainment Dice Game, where two players can roll a dice based on their turn. Players who first reach the score of 100 will win.",
    web_link: " https://babahussainbedadaluri.github.io/Dices-game/",
  },
];

const education = [
  {
    standard: "Bachelor Technologies in Electrical and Electronics Engineering",
    institution: "Sree Vidyanikethan Engineering college | 2018-2021",
    percentage: "82%",
  },
  {
    standard: "Diploma",
    institution: "SV Government Polytechnic | 2015-2018",
    percentage: "93%",
  },
  {
    standard: "Secondary Education",
    institution: "GH School Kalikiri | 2013-2014",
    percentage: "90%",
  },
];

export default {
  contact,
  path,
  sideBarContents,
  name,
  designation,
  proSummary,
  workExperiance,
  education,
  Image,
  personalProjects,
};
