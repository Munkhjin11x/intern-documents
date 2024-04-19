"use client ";
import Arrow from "@/app/assets/Arrow";
import Button from "@/app/components/Button";
import Sidebar from "@/app/components/Sidebar";

const intoduction = () => {

  return (
    <>
      <div className="bg-[#121212] flex  ">
        <Sidebar/>
        <div className=" flex justify-center  ">
          <div className=" flex  flex-col" >
            <div className="border-t-[1px] mt-[64px] border-[#2F2F2F]  "></div>
            <div className=" w-[1000px] ml-[200px]">     
                <div className="flex flex-col justify-between h-[98px]  mt-[64px] ">
              <h1 className="text-white text-[42px] font-bold    ">
              GraphQL Codegen

              </h1>
              <div>
                <p className="text-[#B8B8B8]">
                Generate code from your GraphQL schema and operations with a simple CLI
                </p>
              </div>
            </div>
            <div>
              <p className="text-white mb-[18px]  mt-[18px]">To learn more, visit the following resources:</p>
              <hr />
              <div className="mt-[35px] mb-[35px]">
                <ul>
                <a href="https://the-guild.dev/graphql/codegen">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">
                        GraphQL Codegen
                        </span>{" "}
                        Generate code from your GraphQL schema and operations with a simple CLI
                      </li>
                    </a>
                </ul>
              </div>
                <hr />
                <div className="flex justify-end">
                <Button label="Unit Testing" path='/testing/unittesting'/>

                </div>
            </div>
            </div>
     
        
         
          </div>
        </div>
      </div>
    </>
  );
};

export default intoduction;
