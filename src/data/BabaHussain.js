import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import Image from "../images/Baba.png";

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
    text: "https://www.linkedin.com/in/babahussain",
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
    list: "  HTML5, CSS, Tailwind CSS, JavaScript, React JS, Next JS, Redux, Responsive Design, Azure App Services",
  },
  {
    title: "Professional Summary-Exposure",
    list: "Node JS, Express, MongoDB, GIT",
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
const proSummary = `Over 2.5 years of experience developing responsive web applications, adept at translating designs into high-quality code using JavaScript and ReactJS.
Proven track record in building reusable components and working in Scrum teams.
Skilled in full-stack development, with strong code debugging and problem-solving abilities.
Quick learner with a self-motivated approach, capable of swiftly adopting new technologies.
Excellent analytical skills, coupled with a proactive attitude towards problem-solving.
Effective communicator, able to collaborate seamlessly with cross-functional teams to achieve project objectives.`;

const workExperiance = [
  {
    designation: "Software Development Consultant | Front End Developer",
    duration: "Tata Consultancy Services| March 2022 - present",
    contribution: `Engineered staff login pages within the Biogen Healthcare System (BHS) website using React.
    Developed a suite of highly reusable and responsive components to enhance website functionality.
    Designed and implemented a reusable Address component, deployed across multiple pages within the Biogen Healthcare System (BHS) application.
    Integrated Redux seamlessly throughout the application to manage state efficiently and ensure scalability.
    Utilized Redux-thunk to seamlessly integrate all APIs, optimizing data flow and enhancing application performance.`,
  },
];

const personalProjects = [
  {
    title: "Natours",
    info: "A fully integrated website, enabling users to register, authenticate, explore tour offerings, conduct transactions via debit or credit cards, and access interactive maps for tour destinations. This platform was constructed utilizing React.js, Express, Node.js, and MongoDB.",
    web_link: "https://natours-79sq.onrender.com/",
  },
  {
    title: "YouTube Clone",
    info: "I spearheaded the development of a YouTube replica website, leveraging frontend technologies such as React.js, Tailwind CSS, and Rest APIs. The platform features a homepage categorizing content into sections like entertainment, sports, news, and trending sessions. Additionally, it incorporates a search functionality allowing users to explore available YouTube videos seamlessly.",
    web_link: "https://funny-kitsune-1d688b.netlify.app/",
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
