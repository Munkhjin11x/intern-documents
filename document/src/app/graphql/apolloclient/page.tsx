"use client ";
import Arrow from "@/app/assets/Arrow";
import Button from "@/app/components/Button";
import Sidebar from "@/app/components/Sidebar";

const intoduction = () => {

  return (
    <>
      <div className="bg-[#121212] flex justify-between  ">
        <Sidebar/>
        <div className=" flex justify-center  ">
          <div className="w-[2000px]  flex  flex-col" >
            <div className="border-t-[1px] mt-[64px] border-[#2F2F2F]  "></div>
            <div className=" px-[400px] w-[1700px]">     
                <div className="flex flex-col justify-between h-[98px]  mt-[64px] ">
              <h1 className="text-white text-[42px] font-bold    ">
              Apollo Client React

              </h1>
              <div>
                <p className="text-[#B8B8B8]">
                Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application
        data, all while automatically updating your UI.
                </p>
              </div>
            </div>
            <embed
              className=" w-[516px] h-[314px] mt-[100px]"
              title="YouTube video player"
              src="https://www.youtube.com/embed/GcER4OvG9j0?si=Q4pyKgqADMhYLn9J"
              type=""
            />
            <div>
              <p className="text-white mb-[18px]  mt-[18px]">To learn more, visit the following resources:</p>
              <hr />
              <div className="mt-[35px] mb-[35px]">
                <ul>
                <a href="https://www.apollographql.com/docs/react/">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">
                        Apollo Client React:
                        </span>{" "}
                        Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
                      </li>
                    </a>
                </ul>
              </div>
                <hr />
                <div className="flex justify-end">
            <Button label="Apollo Client" path='/graphql/codegen'/>
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
