"use client ";
import Arrow from "@/app/assets/Arrow";
import Sidebar from "@/app/components/Sidebar";

const intoduction = () => {

  return (
    <>
      <div className="bg-[#121212] flex justify-between  ">
        <Sidebar/>
        <div className=" flex justify-center  ">
          <div className="w-[1900px] flex  flex-col" >
            <div className="border-t-[1px] mt-[64px] border-[#2F2F2F]  "></div>
            <div className=" px-[400px] w-[1700px]">     
                <div className="flex flex-col justify-between h-[98px]  mt-[64px] ">
              <h1 className="text-white text-[42px] font-bold    ">
              Jest testing

              </h1>
              <div>
                <p className="text-[#B8B8B8]">
                      Unit tests verify the smallest parts of your application in complete isolation, ensuring they work as expected
                </p>
            
              </div>
            </div>
            <h1 className="text-white text-[42px] font-bold    ">
                Backend
              </h1>
            <embed
              className=" w-[516px] h-[314px]"
              title="YouTube video player"
              src="https://www.youtube.com/embed/1W4zOReGK_U?si=v2tNs8gqapGAEiz1"
              type=""
            />
                 <h1 className="text-white text-[42px] font-bold    ">
                 Frontend
              </h1>
            <embed
              className=" w-[516px] h-[314px]"
              title="YouTube video player"
              src="https://www.youtube.com/embed/9RhxqJrFerM?si=SX33y_B5BI8VuwZ3"
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
                        Jest Testing React
                        </span>{" "}
                        Learn how to test React components with Jest
                      </li>
                    </a>
                    <a href="https://www.apollographql.com/docs/react/">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">
                        Apollo Client Testing
                        </span>{" "}
                        Learn how to test Apollo Client with Jest
                      </li>
                    </a>
                    <a href="https://www.apollographql.com/docs/react/">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">
                        Jest Getting Started
                        </span>{" "}
                        Learn how to get started with Jest
                      </li>
                    </a>
                    <a href="https://www.apollographql.com/docs/react/">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">
                        Unit Testing
                        </span>{" "}
                        Learn the basics of unit testing
                      </li>
                    </a>
                </ul>
              </div>
                <hr />
                <div className="flex justify-end">
                <button className="text-[#4ADF7E]">Apollo Server <Arrow/></button>
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
