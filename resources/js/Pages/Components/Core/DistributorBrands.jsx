import React from 'react'
import DistributorSideBarLayout from '../Layouts/DistributorSideBarLayout';
import DistributorBrandsTable from '../Utils/DistributorBrandsTable';


const DistributorBrands = () => {
  return (
    <main className="max-h-screen h-screen flex flex-col"> 
        <div className="h-[75%] mt-[2rem] bg-[#334756]">
                {/* <DistributorBrandsTable /> */} Distributor Brands
        </div>
    </main>
  );
}

DistributorBrands.layout = (page) => <DistributorSideBarLayout>{page}</DistributorSideBarLayout>;
export default DistributorBrands;
