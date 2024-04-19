"use client ";
import Arrow from "@/app/assets/Arrow";
import Button from "@/app/components/Button";
import Sidebar from "@/app/components/Sidebar";

const intoduction = () => {
  return (
    <>
      <div className="bg-[#121212] flex  ">
        <Sidebar />
        <div className=" flex justify-center  ">
          <div className="flex  flex-col">
            <div className="border-t-[1px] mt-[64px] border-[#2F2F2F]  "></div>
            <div className=" w-[1000px] ml-[200px]">
              <div className="flex flex-col justify-between h-[98px]  mt-[64px] ">
                <h1 className="text-white text-[42px] font-bold    ">
                  Apollo server
                </h1>
                <div>
                  <p className="text-[#B8B8B8]">
                    Apollo Server is an open-source, spec-compliant GraphQL
                    server that‘s compatible with any GraphQL client, including
                    Apollo Client. It‘s the best way to build a
                    production-ready, self-documenting GraphQL API that can use
                    data from any source.
                  </p>
                </div>
              </div>
              <embed
                className=" w-[516px] h-[314px] mt-[100px]"
                title="YouTube video player"
                src="https://www.youtube.com/embed/IUCV3ZDKyTs?si=PUAo55koC_lQiQ0I"
                type=""
              />
              <div>
                <p className="text-white mb-[18px]  mt-[18px]">
                  To learn more, visit the following resources:
                </p>
                <hr />
                <div className="mt-[35px] mb-[35px]">
                  <ul>
                    <a href="https://www.apollographql.com/docs/apollo-server/">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">Apollo server:</span>
                        Apollo Server is an open-source, spec-compliant GraphQL
                        server that&lsquo;s compatible with any GraphQL client,
                        including Apollo Client.
                      </li>
                    </a>
                    <a href="https://www.splunk.com/en_us/blog/learn/serverless-functions.html#:~:text=A%20serverless%20function%20is%20essentially,triggered%20by%20a%20specific%20condition.">
                      <li className="text-white">
                        <span className="text-[#4ADF7E]">
                          Serverless Functions:
                        </span>{" "}
                        A serverless function is essentially a single-purpose
                        piece of code that is designed to do one thing. It is
                        triggered by a specific condition.
                      </li>
                    </a>
                  </ul>
                </div>
                <hr />
                <div className="flex justify-end">
                <Button label="Apollo Client" path='/graphql/apolloclient'/>

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
