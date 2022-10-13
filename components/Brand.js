import React from "react";

const Brand = () => {
  return (
    <div className="w-full bg-gray-200 p-6 flex justify-center">
      <div className="flex gap-10">
        <img src="aws.png" className="h-24" />
        <img src="openstack.png" className="h-24" />
        <img src="apache.png" className="h-24" />
        <img src="docker.png" className="h-24" />
      </div>
    </div>
  );
};

export default Brand;
