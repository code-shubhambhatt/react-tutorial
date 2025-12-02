import React from "react";
import Card from "../components/Card";
import JobCard from "../components/Jobcard";


const App = () => {
  const arr = [10, 20];
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    rate: "$120/hr",
    location: "Mumbai, India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s"
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    rate: "$90/hr",
    location: "Bangalore, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 day ago",
    role: "Backend Engineer",
    type: "Full-Time",
    level: "Senior Level",
    rate: "$110/hr",
    location: "Hyderabad, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 4,
    company: "Netflix",
    posted: "3 days ago",
    role: "Product Designer",
    type: "Part-Time",
    level: "Junior Level",
    rate: "$70/hr",
    location: "Pune, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
  },
  {
    id: 5,
    company: "Meta",
    posted: "6 days ago",
    role: "React Developer",
    type: "Full-Time",
    level: "Mid Level",
    rate: "$100/hr",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
  },
  {
    id: 6,
    company: "Tesla",
    posted: "4 days ago",
    role: "Software Engineer",
    type: "Full-Time",
    level: "Senior Level",
    rate: "$130/hr",
    location: "Delhi, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
  },
  {
    id: 7,
    company: "Adobe",
    posted: "1 week ago",
    role: "UI Designer",
    type: "Contract",
    level: "Mid Level",
    rate: "$85/hr",
    location: "Chennai, India",
    logo: "data:image/png;base64,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"
  },
  {
    id: 8,
    company: "Spotify",
    posted: "2 days ago",
    role: "UX Researcher",
    type: "Part-Time",
    level: "Senior Level",
    rate: "$95/hr",
    location: "Gurgaon, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    id: 9,
    company: "LinkedIn",
    posted: "3 days ago",
    role: "Data Analyst",
    type: "Full-Time",
    level: "Junior Level",
    rate: "$75/hr",
    location: "Bangalore, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  },
  {
    id: 10,
    company: "Apple",
    posted: "8 days ago",
    role: "iOS Developer",
    type: "Full-Time",
    level: "Senior Level",
    rate: "$150/hr",
    location: "Mumbai, India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  }
]


  return (
    <div className="parent">
      {
        jobs.map(function(elem){
          return <JobCard
          company={elem.company}
          posted={elem.posted}
          role={elem.role}
          type={elem.type}
          level={elem.level}
          rate={elem.rate}
          location={elem.location}
          logo={elem.logo}
        />
        })
      }





      {/* {arr.map(function(elem) {
        return <Card user={elem} />;
      })} */}
      {/* <Card user="Diwakar Bhatt" skill1="AutoCAD" skill2="Engineering" />
      <Card user ="Shubham Bhatt" skill1="Python" skill2="JavaScript" /> */}
    </div>
  );
};

export default App;
