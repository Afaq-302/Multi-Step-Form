import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

const Home = () => {

  const [STEP_1, STEP_2, STEP_3, STEP_4, STEP_5] = [1, 2, 3, 4, 5];

  const [step, setStep] = useState(STEP_3);


  return <>
    <Head>
      <title>
        Multistep Form
      </title>
    </Head>

    {/* BODY DIV */}
    <div className="bg-[#eef5ff] h-screen flex justify-center items-center font-[Ubuntu]">
      {/* CONTAINER */}
      <div className="  shadow-2xl rounded-xl bg-white p-5">
        {/* INNER CONTAINER */}
        <div className="grid grid-cols-10">

          {/* ##### SIDEBAR ##### */}
          <div className="col-span-3   p-8 bg-[url('../../public/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat">


            <div className="flex items-center mt-0 mb-7">
              <div

                className={`font-semibold text-[15px] leading-[0]  px-3 py-4 rounded-full mr-4 border-[1px] border-[#bee1fd] text-[#bee1fd] ${step == STEP_1 ? "bg-[#bee1fd] text-black" : ""}`}
                onClick={() => setStep(STEP_1)}
              >
                1
              </div>
              <div className="leading-[1.4] block">
                <div className="text-[#bee1fd] text-[12px] opacity-70">STEP 1
                </div>
                <div className="text-white text-[15px] font-medium tracking-[1px]">YOUR INFO</div>
              </div>
            </div>

            <div className="flex items-center mt-0 mb-7">
              <div className={`font-semibold text-[15px] leading-[0] border-[1px] border-[#bee1fd] text-[#bee1fd] px-3 py-4 rounded-full mr-4 ${step == STEP_2 ? "bg-[#bee1fd] text-[black]" : ""}`} onClick={() => setStep(STEP_2)}>2
              </div>
              <div className="leading-[1.4] block">
                <div className="text-[#bee1fd] text-[12px] opacity-70">STEP 2
                </div>
                <div className="text-white text-[15px] font-medium tracking-[1px]">SELECT PLAN</div>
              </div>
            </div>

            <div className="flex items-center mt-0 mb-7">
              <div className={`font-semibold text-[15px] leading-[0] border-[1px] border-[#bee1fd] text-[#bee1fd] px-3 py-4 rounded-full mr-4 ${step == STEP_3 ? "bg-[#bee1fd] text-[black]" : ""}`} onClick={() => setStep(STEP_3)}>3

              </div>
              <div className="leading-[1.4] block">
                <div className="text-[#bee1fd] text-[12px] opacity-70">STEP 3
                </div>
                <div className="text-white text-[15px] font-medium tracking-[1px]">ADD-ONS</div>
              </div>
            </div>


            <div className="flex items-center mt-0 mb-7">
              <div className={`font-semibold text-[15px] leading-[0] border-[1px] border-[#bee1fd] text-[#bee1fd] px-3 py-4 rounded-full mr-4 ${step == STEP_4 ? "bg-[#bee1fd] text-[black]" : ""}`} onClick={() => setStep(STEP_4)}>4
              </div>
              <div className="leading-[1.4] block">
                <div className="text-[#bee1fd] text-[12px] opacity-70">STEP 4
                </div>
                <div className="text-white text-[15px] font-medium tracking-[1px]">SUMMARY</div>
              </div>
            </div>

          </div>

          {/* ##### FORM #####  */}
          <div className="col-span-7 py-8 px-16">
            <section className={`step2 ${step == STEP_1 ? "" : "hidden"}`}>

              <h1 className="text-3xl font-bold text-[#02295a] mb-2">Personal info</h1>
              <p className="text-[#9699ab] text-[15px]">Please provide your name, email address and phone number.</p>

              <div className="mt-5">
                {/* NAME INPUT */}
                <div className="mb-3">
                  <label htmlFor="name" className="mt-3 mr-3 text-[15px] text-[#02295a]"
                  >Name</label>
                  <input className="p-3 py-[10px] w-full rounded-md border-[1px] mt-1" id="name" placeholder="e.g. Stephen King" type="text" name="name" />
                </div>

                {/* EMAIL INPUT */}
                <div className="mb-3">
                  <label htmlFor="email" className="mt-3 mr-3 text-[15px] text-[#02295a]"
                  >Email Address</label>
                  <input className="p-3 py-[10px]  w-full rounded-md border-[1px] mt-1" id="email" placeholder="e.g. Stephen King" type="text" name="name" />
                </div>

                {/* PHONE NUMBER INPUT */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="mt-3 mr-3 text-[15px] text-[#02295a]"
                  >Phone Number</label>
                  <input className="p-3 py-[10px]  w-full rounded-md border-[1px] mt-1" id="phoneNumber" placeholder="e.g. Stephen King" type="text" name="name" />
                </div>

                <div className="flex justify-end mt-12">
                  <button
                    onClick={() => setStep(STEP_2)}
                    className="p-3 px-6 rounded-lg text-white text-[15px] bg-[#02295a] hover:bg-[#174a8b]">Next Step</button>
                </div> 
              </div>
            </section>

            {/* STEP 2 */}
            <section className={`step2 w-[411px] h-[429px] ${step == STEP_2 ? "" : "hidden"}`}>
              <h2 className="text-3xl font-bold text-[#02295a] mb-2">Select your plan</h2>
              <p className="text-[15px] text-[#9699ab]">You have the option of monthly or yearly billing</p>

              <div className="flex flex-row mt-10">
                <div className="flex flex-col px-4 py-5 mr-3 rounded-xl border-2 border-[#d6d9e6]  hover:border-2 hover:border-[#473dff]">
                  <Image
                    src="assets/images/icon-arcade.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className="mr-8"
                  />
                  <h3 className="text-[#02295a] font-semibold mt-5">Arcade</h3>
                  <p className="mt-1 text-[#9699ab]">$9/mo</p>
                  <div className="text-[13px] opacity-100 transition-opacity font-medium text-[#02295a] ">2 months free</div>
                </div>

                <div className="flex flex-col px-4 py-5 mr-3 rounded-xl border-2 border-[#d6d9e6]  hover:border-2 hover:border-[#473dff]">
                  <Image
                    src="assets/images/icon-advanced.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className="mr-8"
                  />
                  <h3 className="text-[#02295a] font-semibold mt-5">Advanced</h3>
                  <p className="mt-1 text-[#9699ab]">$12/mo</p>
                  <div className="text-[13px] opacity-100 transition-opacity font-medium text-[#02295a] ">2 months free</div>
                </div>

                <div className="flex flex-col px-4 py-5 mr-3 rounded-xl border-2 border-[#d6d9e6]  hover:border-2 hover:border-[#473dff]">
                  <Image
                    src="assets/images/icon-pro.svg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className="mr-8"
                  />
                  <h3 className="text-[#02295a] font-semibold mt-5">Pro</h3>
                  <p className="mt-1 text-[#9699ab]">$15/mo</p>
                  <div className="text-[13px] opacity-100 transition-opacity font-medium text-[#02295a] ">2 months free</div>
                </div>


              </div>

              <div className="mt-8 flex justify-center p-3 rounded-lg bg-[#f0f6ff]">
                <div className="flex items-center">
                  <div className="text-[14px] text-[#9699ab] font-semibold">
                    Monthly
                  </div>

                  <div className="relative inline-block mx-4">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  <div className="text-[14px] text-[#9699ab] font-semibold">
                    Yearly
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setStep(STEP_1)}
                  className="p-3 px-6 text-[#9699ab] hover:text-[#174a8b] hover:font-medium text-[15px]">Go Back</button>
                <button
                  onClick={() => setStep(STEP_3)}
                  className="p-3 px-6 rounded-lg text-white text-[15px] bg-[#02295a] hover:bg-[#174a8b]">Next Step</button>
              </div>
            </section>



            {/* STEP 3 */}
            <section className={`step2 w-[411px] h-[429px] ${step == STEP_3 ? "" : "hidden"}`}>
              <h1 className="text-3xl font-bold text-[#02295a] mb-2">Pick add-ons</h1>
              <p className="text-[#9699ab] text-[15px]">Add-ons help enhance your gaming experience.</p>


              <div className="mt-6">
                {/* Add-on Checkbox */}
                <div>
                  <div className="mx-auto p-4 bg-white rounded-lg border-2 border-[#d6d9e6]">
                    <div className="flex pb-2">
                      <div>
                        <input type="checkbox" className=" w-4 h-4 mr-4" />
                        <p className="flex-1">This is a paragraph.</p>
                        <p className="flex-1">This is a paragraph.</p>

                      </div>
                      <p>+$10/yr</p>
                    </div>

                  </div>
                </div>

              </div>

            </section>




            {/* STEP 4 */}
            <section className={`step2 w-[411px] h-[429px] ${step == STEP_4 ? "" : "hidden"}`}>
              <h2 className="text-3xl text-blue-600">Hii this is step 4</h2>
            </section>


            {/* STEP 5 */}
            <section className={`step2 w-[411px] h-[429px] ${step == STEP_5 ? "" : "hidden"}`}>
              <h2 className="text-3xl text-blue-600">Hii this is step 5</h2>
            </section>


          </div>


        </div>
      </div>
    </div>

  </>

};

export default Home;
