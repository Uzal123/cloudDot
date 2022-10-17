import React from "react";

const Brand = () => {
  return (
    <div className="w-full p-6 flex flex-nowrap justify-center items-center overflow-hidden">
      {/* <div direction="right" width="60%"> */}
      <div className="flex gap-10">
        <img src="aws.png" className="h-24" />
        <img src="openstack.png" className="h-24" />
        <img src="apache.png" className="h-24" />
        <img src="docker.png" className="h-24" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Brand;
