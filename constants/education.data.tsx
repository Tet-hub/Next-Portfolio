interface EducationData {
  level: string;
  year: string;
  course: string;
  school: string;
  address: string;
}

const educationData: EducationData[] = [
  {
    level: "College",
    year: "2020 - 2024",
    course: `Bachelor of Science in Information and Technology`,
    school: `University of Cebu- Main
    Campus`,
    address: `Sanciangko St. 6000 Cebu City, Philippines`,
  },
  {
    level: "Senior High",
    year: "2017 - 2020",
    course: `TVL- Computer System Servicing`,
    school: `University of Cebu- Main SHS Department`,
    address: `J. Alcantara St. 6000 Cebu City, Philippines`,
  },
  {
    level: "Junior High",
    year: "2014 - 2017",
    course: `N/A`,
    school: `Abellana National School`,
    address: `Osmeña Blvd, Cebu City, Cebu, Philippines`,
  },
  {
    level: "Elementary",
    year: "2008 - 2014",
    course: `N/A`,
    school: `Punta Princesa Elementary School`,
    address: `Tres de Abril Street, Cebu, Philippines`,
  },
];

export default educationData;
