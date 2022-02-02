import "./program-styles.css"
import React, { useRef, useState } from "react";
import RecentProgram from "../RecentProgramComponent";
import { useEffect } from "react";
import UpcomingNews from "../UpcomingNews/Index";

const DATA = [
  {
    id: 1,
    title: "Nawaloka College of Higher Studies (NCHS) holds its 4th Graduation ceremony",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://www.bms.lk/Gallery/2019/Graduation/data1/images/041.jpg"
  },
  {
    id: 2,
    title: "International Collaboration on Sustainable Development",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://law.cmb.ac.lk/wp-content/uploads/2021/10/21Lund-Collaboration_01-1024x768.jpg"
  },
  {
    id: 3,
    title: "Master of Business Administration (MBA) - Postgraduate Diploma in Management (PGDM)",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://static.sliit.lk/wp-content/uploads/2022/01/25074227/he-NBQSA-The-ICT-Awards-2021-was-held-at-BMICH-1.jpg"
  },
  {
    id: 4,
    title: "UCL Partners with Monash University to Combat Dengue in Sri Lanka",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://www.ucl.lk/news/22.jpg"
  },
  {
    id: 5,
    title: "POSTGRADUATE PROGRAMS IN SRI LANKA",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://ancedu.com/wp-content/uploads/2021/03/DSC_4054.jpg"
  },
  {
    id: 6,
    title: "BBA (Hons) Specialising in Marketing Management",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://static.sliit.lk/wp-content/uploads/2017/12/Marketing-Management.jpg"
  },
  {
    id: 7,
    title: "University of Colombo Leadership Training Program – Phase 02 5 | University of Colombo, Sri Lanka",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://cmb.ac.lk/wp-content/uploads/Leadership-Training-Program-Phase-02-5.jpg"
  },
]


const Programs = () => {
  const loader = useRef(null)
  const loadMoreRef = useRef(null)

  let counter = 1
  let tabCounter = 1

  const loaderUpcoming = useRef(null)
  const loadMoreRefCupcoming = useRef(null)

  let counterUpcoming = 1
  let tabCounterUpcoming = 1

  useEffect(() => {
    if (window.innerWidth < 1025) {
      loader.current.style.height = loader.current.firstChild.offsetHeight + 'px'
      loaderUpcoming.current.style.height = loaderUpcoming.current.firstChild.offsetHeight + 'px'
    }
  }, [])

  const onButtonClick = () => {
    if (window.innerWidth < 767) {
      counter++
      loader.current.style.height = loader.current.firstChild.offsetHeight * counter * 1.02 + 'px'
      setTimeout(() => {
        window.scrollBy(0, loader.current.firstChild.offsetHeight)
      }, 600)

      if (counter === DATA.length) {
        loadMoreRef.current.disabled = true
      }
    } else if (window.innerWidth < 1025 && window.innerWidth > 767) {
      counter = counter + 2
      tabCounter++
      loader.current.style.height = loader.current.firstChild.offsetHeight * tabCounter * 1.03 + 'px'
      setTimeout(() => {
        window.scrollBy(0, loader.current.firstChild.offsetHeight)
      }, 600)
      if (counter >= DATA.length) {
        loadMoreRef.current.disabled = true
      }
    }

  };

  const moreUpcomingNews = () => {
    if (window.innerWidth < 767) {
      counterUpcoming++
      loaderUpcoming.current.style.height = loaderUpcoming.current.firstChild.offsetHeight * counterUpcoming * 1.02 + 'px'
      setTimeout(() => {
        window.scrollBy(0, loaderUpcoming.current.firstChild.offsetHeight)
      }, 600)

      if (counterUpcoming === DATA.length) {
        loadMoreRefCupcoming.current.disabled = true
      }
    } else if (window.innerWidth < 1025 && window.innerWidth > 767) {
      counterUpcoming = counterUpcoming + 2
      tabCounterUpcoming++
      loaderUpcoming.current.style.height = loaderUpcoming.current.firstChild.offsetHeight * tabCounterUpcoming * 1.03 + 'px'
      setTimeout(() => {
        window.scrollBy(0, loaderUpcoming.current.firstChild.offsetHeight)
      }, 600)
      if (counterUpcoming >= DATA.length) {
        loadMoreRefCupcoming.current.disabled = true
      }
    }
  }

  return (
    <div className="container">
      <h1 className="container mx-auto" style={{ fontSize: '4rem', color: '#404040' }}>Programs</h1>
      <div className="row d-xl-none container mt-5 mx-auto recent-program-container" ref={loader} style={{ overflow: 'hidden' }}>
        {
          DATA.map(({ id, title, description, date, comments, image }, index) => {
            if (window.innerWidth < 1025) {
              return (
                <RecentProgram key={id} id={id} title={title} description={description} date={date} comments={comments} image={image} />
              )
            } else {
              return <></>
            }
          })}
      </div>

      <div className="container mt-5 mx-auto recent-program-container d-none d-xl-block" style={{ overflow: 'hidden' }}>
        <RecentProgram id={DATA[0].id} title={DATA[0].title} description={DATA[0].description} date={DATA[0].date} comments={DATA[0].comments} image={DATA[0].image} small={false} />
        <div className="row">
          {
            DATA.map(({ id, title, description, date, comments, image }, index) => {
              if (window.innerWidth > 1025 && index === 0) {
              } else {
                return (
                  <RecentProgram key={id} id={id} title={title} description={description} date={date} comments={comments} image={image} small={true} />
                )
              }
            })}
        </div>
      </div>
      <div className="d-flex justify-content-center my-4">
        <button id="recent-programs-loader" ref={loadMoreRef} type="button" onClick={() => { onButtonClick() }} class="d-xl-none align-self-center text-white px-5 py-3" style={{ fontSize: '1.6rem', backgroundColor: '#008B8B' }}>Load More</button>
      </div>


      {/* //*Upcoming News */}

      <h1 className="container mx-auto" style={{ fontSize: '4rem', color: '#404040' }}>Upcoming News</h1>
      <div className="row d-xl-none container mt-5 mx-auto recent-program-container" ref={loaderUpcoming} style={{ overflow: 'hidden' }}>
        {
          DATA.map(({ id, title, description, date, comments, image }, index) => {
            if (window.innerWidth < 1025) {
              return (
                <RecentProgram key={id} id={id} title={title} description={description} date={date} comments={comments} image={image} />
              )
            } else {
              return <></>
            }
          })}
      </div>

      <div className="container mt-5 mx-auto recent-program-container d-none d-xl-block" style={{ overflow: 'hidden' }}>
        <UpcomingNews id={DATA[0].id} title={DATA[0].title} description={DATA[0].description} date={DATA[0].date} comments={DATA[0].comments} image={DATA[0].image} small={false} firstItem={true} />
        <div className="row">
          {
            DATA.map(({ id, title, description, date, comments, image }, index) => {
              if (window.innerWidth > 1025 && index === 0) {
              } else {
                return (
                  <UpcomingNews key={id} id={id} title={title} description={description} date={date} comments={comments} image={image} small={true} firstItem={false} />
                )
              }
            })}
        </div>
      </div>
      <div className="d-flex justify-content-center my-4">
        <button id="recent-programs-loader" ref={loadMoreRefCupcoming} type="button" onClick={() => { moreUpcomingNews() }} class="d-xl-none align-self-center text-white px-5 py-3" style={{ fontSize: '1.6rem', backgroundColor: '#008B8B' }}>Load More</button>
      </div>

    </div>
  );
};

export default Programs;