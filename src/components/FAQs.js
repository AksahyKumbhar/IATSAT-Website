// // import React from "react";

// // import { Collapse, initTWE } from "tw-elements";

// // function FAQs() {
// //   initTWE({ Collapse });
// //   return (
// //     <div className="ml-6 sm:ml-20 mb-5 mr-10 md:ml-30 md:mr-30 lg:ml-40 lg:mr-40">
// //       <div class="text-center">
// //         <h2 class="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-10">
// //           Frequently Asked Questions
// //         </h2>
// //       </div>
// //       <div id="accordionExample">
// //         <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
// //           <h2 class="mb-0" id="headingOne">
// //             <button
// //               class="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
// //               type="button"
// //               data-twe-collapse-init
// //               data-twe-target="#collapseOne"
// //               aria-expanded="true"
// //               aria-controls="collapseOne"
// //             >
// //               What is the duration of the course?
// //               <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke-width="1.5"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     stroke-linecap="round"
// //                     stroke-linejoin="round"
// //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
// //                   />
// //                 </svg>
// //               </span>
// //             </button>
// //           </h2>
// //           <div
// //             id="collapseOne"
// //             class="!visible"
// //             data-twe-collapse-item
// //             data-twe-collapse-show
// //             aria-labelledby="headingOne"
// //             data-twe-parent="#accordionExample"
// //           >
// //             <div class="px-5 py-4">
// //               <strong>The total duration for the course is 15 months.</strong>{" "}
// //               It is shown by default, until the collapse plugin adds the
// //               appropriate classes that we use to style each element. These
// //               classes control the overall appearance, as well as the showing and
// //               hiding via CSS transitions. You can modify any of this with custom
// //               CSS or overriding our default variables. It's also worth noting
// //               that just about any HTML can go within the{" "}
// //               <code>.accordion-body</code>, though the transition does limit
// //               overflow.
// //             </div>
// //           </div>
// //         </div>
// //         <div class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
// //           <h2 class="mb-0" id="headingTwo">
// //             <button
// //               class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
// //               type="button"
// //               data-twe-collapse-init
// //               data-twe-collapse-collapsed
// //               data-twe-target="#collapseTwo"
// //               aria-expanded="false"
// //               aria-controls="collapseTwo"
// //             >
// //               What are the qualifications of the teachers/mentors at IATSAT?
// //               <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke-width="1.5"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     stroke-linecap="round"
// //                     stroke-linejoin="round"
// //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
// //                   />
// //                 </svg>
// //               </span>
// //             </button>
// //           </h2>
// //           <div
// //             id="collapseTwo"
// //             class="!visible hidden"
// //             data-twe-collapse-item
// //             aria-labelledby="headingTwo"
// //             data-twe-parent="#accordionExample"
// //           >
// //             <div class="px-5 py-4">
// //               <strong>This is the second item's accordion body.</strong> It is
// //               hidden by default, until the collapse plugin adds the appropriate
// //               classes that we use to style each element. These classes control
// //               the overall appearance, as well as the showing and hiding via CSS
// //               transitions. You can modify any of this with custom CSS or
// //               overriding our default variables. It's also worth noting that just
// //               about any HTML can go within the <code>.accordion-body</code>,
// //               though the transition does limit overflow.
// //             </div>
// //           </div>
// //         </div>
// //         <div class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
// //           <h2 class="accordion-header mb-0" id="headingThree">
// //             <button
// //               class="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
// //               type="button"
// //               data-twe-collapse-init
// //               data-twe-collapse-collapsed
// //               data-twe-target="#collapseThree"
// //               aria-expanded="false"
// //               aria-controls="collapseThree"
// //             >
// //               How do you take care of placements? Do you also provide placement
// //               guarantee?
// //               <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke-width="1.5"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     stroke-linecap="round"
// //                     stroke-linejoin="round"
// //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
// //                   />
// //                 </svg>
// //               </span>
// //             </button>
// //           </h2>
// //           <div
// //             id="collapseThree"
// //             class="!visible hidden"
// //             data-twe-collapse-item
// //             aria-labelledby="headingThree"
// //             data-twe-parent="#accordionExample"
// //           >
// //             <div class="px-5 py-4">
// //               <strong>This is the third item's accordion body.</strong> It is
// //               hidden by default, until the collapse plugin adds the appropriate
// //               classes that we use to style each element. These classes control
// //               the overall appearance, as well as the showing and hiding via CSS
// //               transitions. You can modify any of this with custom CSS or
// //               overriding our default variables. It's also worth noting that just
// //               about any HTML can go within the <code>.accordion-body</code>,
// //               though the transition does limit overflow.
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FAQs;


// import React from "react";
// import { initTWE } from "tw-elements";

// function FAQs() {
//   initTWE();
//   return (
//     <div className="ml-6 sm:ml-20 mb-5 mr-10 md:ml-30 md:mr-30 lg:ml-40 lg:mr-40">
//       <div class="text-center">
//         <h2 class="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-10">
//           Frequently Asked Questions
//         </h2>
//       </div>
//       <div id="accordionExample" data-twe-collapse-init>
//         <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
//           <h2 class="mb-0" id="headingOne">
//             <button
//               class="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
//               type="button"
//               data-twe-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               What is the duration of the course?
//               <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             class="!visible"
//             data-twe-collapse-item
//             data-twe-collapse-show
//             aria-labelledby="headingOne"
//             data-twe-parent="#accordionExample"
//           >
//             <div class="px-5 py-4">
//               <strong>The total duration for the course is 15 months.</strong>{" "}
//               It is shown by default, until the collapse plugin adds the
//               appropriate classes that we use to style each element. These
//               classes control the overall appearance, as well as the showing and
//               hiding via CSS transitions. You can modify any of this with custom
//               CSS or overriding our default variables. It's also worth noting
//               that just about any HTML can go within the{" "}
//               <code>.accordion-body</code>, though the transition does limit
//               overflow.
//             </div>
//           </div>
//         </div>
//         <div class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
//           <h2 class="mb-0" id="headingTwo">
//             <button
//               class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
//               type="button"
//               data-twe-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//             >
//               What are the qualifications of the teachers/mentors at IATSAT?
//               <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             class="!visible hidden"
//             data-twe-collapse-item
//             aria-labelledby="headingTwo"
//             data-twe-parent="#accordionExample"
//           >
//             <div class="px-5 py-4">
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
//           <h2 class="accordion-header mb-0" id="headingThree">
//             <button
//               class="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
//               type="button"
//               data-twe-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//             >
//               How do you take care of placements? Do you also provide placement
//               guarantee?
//               <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             class="!visible hidden"
//             data-twe-collapse-item
//             aria-labelledby="headingThree"
//             data-twe-parent="#accordionExample"
//           >
//             <div class="px-5 py-4">
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FAQs;

// import React, { useState } from "react";


// function FAQs() {


//   const [openQuestion, setOpenQuestion] = useState(null); // Initially, no question open

//   const questions = [
//     {
//       id: 1,
//       question: "What is the duration of the course?",
//       answer: "The total duration for the course is 15 months.",
//     },
//     {
//       id: 2,
//       question: "What are the qualifications of the teachers/mentors at IATSAT?",
//       answer:
//         "Our teachers/mentors are highly qualified and experienced professionals in their respective fields.",
//     },
//     {
//       id: 3,
//       question: "How do you take care of placements? Do you also provide placement guarantee?",
//       answer:
//         "We provide our students with placement assistance, but we cannot guarantee placement.",
//     },
//   ];

//   const toggleQuestion = (id) => {
//     setOpenQuestion(id === openQuestion ? null : id); // Toggle the clicked question
//   };

//   return (
//     <div className="ml-6 sm:ml-20 mb-5 mr-10 md:ml-30 md:mr-30 lg:ml-40 lg:mr-40">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-10">
//           Frequently Asked Questions
//         </h2>
//       </div>

//       {/* Accordion container with w-full for full width */}
//       <div className="w-full">
//         {questions.map((q) => (
//           <div key={q.id} className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
//             <h2 className="mb-0" id={`heading${q.id}`}>
//               {/* Question heading button */}
//               <button
//                 className={`group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-2 focus:z-3 focus:outline-none dark:bg-body-dark dark:text-white ${
//                   openQuestion === q.id
//                     ? "shadow-border-b dark:shadow-white/10" // Shadow for active question
//                     : ""
//                 }`}
//                 type="button"
//                 onClick={() => toggleQuestion(q.id)}
//                 aria-expanded={openQuestion === q.id ? "true" : "false"}
//                 aria-controls={`collapse${q.id}`}
//               >
//                 {q.question}
//                 <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </h2>

//             {/* Question content */}
//             <div
//               id={`collapse${q.id}`}
//               className={`${openQuestion === q.id ? "visible" : "hidden"} px-5 py-4`} // Control visibility based on openQuestion state
//               aria-labelledby={`heading${q.id}`}
//             >
//               <strong>{q.answer}</strong>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FAQs;


// import React, { useState } from "react";
// // import {initTWE} from "tw-elements";

// function FAQs() {

//   const [openQuestion, setOpenQuestion] = useState(1); // State to track the open question 

//   const questions = [
//     {
//       id: 1,
//       question: 'What is duratrion of the course?',
//       boldText: "The total duration for the course is 15 months.",
//       restOfAnswer:"It is shown by default, until the collapse plugin,adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing  and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//     },
//     {
//       id: 2,
//       question: 'What are the qualifications of the teachers/mentors at IATSAT?',
//       boldText: "Our teachers/mentors are highly qualified and experienced professionals in their respective fields.',",
//       restOfAnswer: "Our teachers/mentors are highly qualified and experienced professionals in their respective fields.',"
//     },
//     {
//       id: 3,
//       question: 'How do you take care of placements? Do you also provide placement guarantee?',
//       boldText: 'We provide our students with placement assistance, but we cannot guarantee placement.',
//       restOfAnswer: 'We provide our students with placement assistance, but we cannot guarantee placement.',
//     },
//     {
//       id: 4,
//       question: 'What is duratrion of the course?',
//       boldText: 'The total duration for the course is 15 months.',
//       restOfAnswer: "It is shown by default, until the collapse plugin,adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//     },
//   ];

//   const toggleQuestion = (id) => {
//     setOpenQuestion(id === openQuestion ? null : id)// Toggle the question question 
//   };

//   return (
//     <div className="ml-6 sm:ml-20 mb-5 mr-10 md:ml-30 md:mr-30 lg:ml-40 lg:mr-40">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-10">
//           Frequently Asked Questions
//         </h2>
//       </div>
//       <div id="accordionExample" data-twe-collapse-init>
//         {questions.map((q) => (
//           <div key={q.id} className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
//             <h2 class="mb-0" id={`heading${q.id}`}>
//               <button
//                 class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
//                 type="button"
//                 onClick={() => toggleQuestion(q.id)} // Toggle visibility on click
//                 aria-expanded={q.id === openQuestion ? "true" : "false"}
//                 aria-controls={`collapse${q.id}`}
//               >
//                 {q.question}
//                 <span class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </h2>
//             <div
//               id={`collapse${q.id}`}
//               class={!openQuestion || q.id === openQuestion ? "visible" : "hidden"}  // Show if it's the open question or no question is open
//               data-twe-collapse-item
//               aria-two-collpase-item
//               aria-labelledby={`heading${q.id}`}
//               data-twe-parent="#accordionExample"
//             >
//                {/* <div className="px-5 py-4">
//                 <strong>{q.answer}</strong>              
//                 </div> */}
//             </div> 

//               <div className="px-5 py-4">
//                 <strong>{q.boldText}</strong> {q.restOfAnswer}
//               </div>

//             </div>
//         ))}

//           </div>
//     </div>
//       );
// }
//       export default FAQs;

import React, { useState } from "react";

function FAQs() {
  const [openQuestion, setOpenQuestion] = useState(null); // State to track the open question 

  const questions = [
    {
      id: 1,
      question: 'What is duratrion of the course?',
      boldText: "The total duration for the course is 15 months.",
      restOfAnswer: "It is shown by default, until the collapse plugin,adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      id: 2,
      question: 'What are the qualifications of the teachers/mentors at IATSAT?',
      boldText: "Our teachers/mentors are highly qualified and experienced professionals in their respective fields.",
      restOfAnswer: "Our teachers/mentors are highly qualified and experienced professionals in their respective fields.",
    },
    {
      id: 3,
      question: 'How do you take care of placements? Do you also provide placement guarantee?',
      boldText: 'We provide our students with placement assistance, but we cannot guarantee placement.',
      restOfAnswer: 'We provide our students with placement assistance, but we cannot guarantee placement.',
    },
    {
      id: 4,
      question: 'What is duratrion of the course?',
      boldText: 'The total duration for the course is 15 months.',
      restOfAnswer: "It is shown by default, until the collapse plugin,adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(id === openQuestion ? null : id); // Toggle the question question 
  };

  return (
    <div className="ml-6 sm:ml-20 mb-5 mr-10 md:ml-30 md:mr-30 lg:ml-40 lg:mr-40">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-10">
          Frequently Asked Questions
        </h2>
      </div>
      <div id="accordionExample" data-twe-collapse-init>
        {questions.map((q) => (
          <div key={q.id} className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
            <h2 className="mb-0" id={`heading${q.id}`}>
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                type="button"
                onClick={() => toggleQuestion(q.id)} // Toggle visibility on click
                aria-expanded={q.id === openQuestion ? "true" : "false"}
                aria-controls={`collapse${q.id}`}
              >
                {q.question}
                <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id={`collapse${q.id}`}
              className={!openQuestion || q.id === openQuestion ? "visible" : "hidden"} // Show if it's the open question or no question is open
              data-twe-collapse-item
              aria-two-collpase-item
              aria-labelledby={`heading${q.id}`}
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4">
                <strong>{q.boldText}</strong> {q.restOfAnswer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
