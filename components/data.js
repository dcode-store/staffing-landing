import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Streamline Your Staffing Process",
  desc: "Streamline your staffing process by providing a platform to manage job postings, applications, and scheduling efficiently",
  image: benefitOneImg,
  bullets: [
    {
      title: "Easy Job Posting",
      desc: "Post job openings easily and manage them efficiently through DailyStaffing's intuitive interface.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Find the Perfect Candidates",
      desc: "DailyStaffing empowers you to find the perfect candidates by using our a comprehensive platform.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Simplified Scheduling",
      desc: "Streamline your scheduling process by easily coordinating shifts and managing staff availability.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Maximize Your Staffing Efficiency",
  desc: "Maximize your staffing efficiency and optimize your workforce management",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Seamless Staff Allocation",
      desc: "Efficiently allocate staff to different roles and shifts, ensuring optimal coverage and productivity.",
      icon: <DevicePhoneMobileIcon />,
    },
    // {
    //   title: "Advanced Analytics Dashboard",
    //   desc: "Gain valuable insights into your staffing operations with DailyStaffing's comprehensive analytics dashboard.",
    //   icon: <ChartBarSquareIcon />,
    // },
    {
      title: "Automated Task Assignment",
      desc: "Automate the assignment of tasks and shifts based on staff availability and skillset, reducing manual effort and errors.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Enhanced Communication Tools",
      desc: "Facilitate seamless communication between managers and staff members with built-in messaging and notification features.",
      icon: <SunIcon />,
    },
  ],
};


const jobTypes = [
  {
    "id": "banquet_event_servers",
    "name": "Banquet / Event Servers",
    "tags": "serving, banquets, events",
    "business_type": "Hospitality",
    "description": "Serving, setups for banquets and events",
  },
  {
    "id": "restaurant_servers",
    "name": "Restaurant Servers",
    "tags": "serving, restaurants",
    "business_type": "Hospitality",
    "description": "Serving in restaurants",
  },
  {
    "id": "cleaning",
    "name": "Cleaning",
    "tags": "apartments, houses, new buildings, old buildings",
    "business_type": "Maintenance",
    "description": "Cleaning (Apartments/house old and new buildings)",
  },
  {
    "id": "bartending",
    "name": "Bartending",
    "tags": "bars, events",
    "business_type": "Hospitality",
    "description": "Bartending at bars and events",
  },
  {
    "id": "dish_washing",
    "name": "Dish Washing",
    "tags": "restaurants, events",
    "business_type": "Hospitality",
    "description": "Dish washing in restaurants and at events",
  },
  {
    "id": "lawn_care",
    "name": "Lawn Care",
    "tags": "mowing, lawn care",
    "business_type": "Maintenance",
    "description": "Lawn care (mowing)",
  },
  {
    "id": "snow_removal",
    "name": "Snow Removal",
    "tags": "snow removal",
    "business_type": "Maintenance",
    "description": "Snow removal services",
  },
  {
    "id": "electrical_setup_maintenance",
    "name": "Electrical Setup and Maintenance",
    "tags": "electrical, maintenance",
    "business_type": "Maintenance",
    "description": "Basic electrical maintenance",
  },
  {
    "id": "plumbing",
    "name": "Plumbing",
    "tags": "plumbing",
    "business_type": "Maintenance",
    "description": "Plumbing services",
  },
  {
    "id": "general_labour",
    "name": "General Labour",
    "tags": "labour",
    "business_type": "General / Logistics / Other",
    "description": "General labour services",
  },
  {
    "id": "loading_unloading",
    "name": "Loading Unloading",
    "tags": "loading, unloading, manpower",
    "business_type": "General / Logistics / Other",
    "description": "Loading and unloading services",
  },
  {
    "id": "warehouse_forklift",
    "name": "Warehouse / Forklift",
    "tags": "warehouse, forklift",
    "business_type": "General / Logistics / Other",
    "description": "Warehouse and forklift operations",
  },
]


export { benefitOne, benefitTwo, jobTypes };
