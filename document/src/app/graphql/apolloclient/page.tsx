"use client ";
import Arrow from "@/app/assets/Arrow";
import Sidebar from "@/app/components/Sidebar";

const intoduction = () => {

  return (
    <>
      <div className="bg-[#121212] flex justify-between  ">
        <Sidebar/>
        <div className=" flex justify-center  ">
          <div className="w-screen flex  flex-col" >
            <div className="border-t-[1px] mt-[64px] border-[#2F2F2F]  "></div>
            <div className=" px-[400px] w-[1700px]">     
                <div className="flex flex-col justify-between h-[98px]  mt-[64px] ">
              <h1 className="text-white text-[42px] font-bold    ">
                GraphQL Introduction
              </h1>
              <div>
                <p className="text-[#B8B8B8]">
                  GraphQL is a query language and runtime for APIs. It is used
                  to build and consume web service APIs.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around h-[208px] mt-6">
              <p className="text-[#B8B8B8]">
                GraphQL allows clients to make a single API call to request
                exactly the data they need, in a predictable format. This <br />
                allows for more efficient and flexible data retrieval, compared
                to traditional REST APIs where the client has to make <br />
                multiple API calls to different endpoints, and may receive more
                data than it needs.
              </p>
              <p className="text-[#B8B8B8]">
                With GraphQL, the client defines the structure of the data it
                needs, by sending a query to the server. The server then <br />{" "}
                returns the requested data in the same structure, as defined by
                the query. The client can also make mutations to <br />
                update or create data on the server.
              </p>
            </div>
            <embed
              className=" w-[516px] h-[314px]"
              title="YouTube video player"
              src="https://www.youtube.com/embed/3HBdtwg4cmc?si=PE3hVlRIlKwTurNZ"
              type=""
            />
            <div>
              <p className="text-white mb-[18px]  mt-[18px]">To learn more, visit the following resources:</p>
              <hr />
              <div className="mt-[35px] mb-[35px]">
                <ul>
                  <li className="text-white">
                  <span className="text-[#4ADF7E]"> GraphQL Introduction</span> Learn the basics of GraphQ:</li>
                  <li className="text-white"><span className="text-[#4ADF7E]">How to GraphQL:</span> A fullstack tutorial website to learn all about GraphQL</li>
                  <li className="text-white"><span className="text-[#4ADF7E]">GraphQL Explained in 100 Seconds:</span> A short video that explains the basics of GraphQL</li>
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
