import React from "react";
import Container from "./container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobTypes = ({ jobTypesData }) => {
  // Group job types by business type
  const jobTypesByBusinessType = jobTypesData.reduce((groups, jobType) => {
    const group = (groups[jobType.business_type] || []);
    group.push(jobType);
    groups[jobType.business_type] = group;
    return groups;
  }, {});

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 item at once
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        {Object.entries(jobTypesByBusinessType).map(([businessType, jobTypes]) => (
          <div key={businessType}>
            <h2 className="text-2xl leading-normal font-bold text-center my-4">{businessType}</h2>
            <div className="flex flex-wrap justify-evenly items-stretch">
              {jobTypes.map((jobType) => (
                <div key={jobType.id} className="flex w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 px-6 rounded-2xl py-6 dark:bg-trueGray-800 w-full">
                    <h5 className="text-xl text-indigo-800 font-bold rounded-md dark:text-indigo-200">{jobType.name}</h5>
                    <p>{jobType.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default JobTypes;