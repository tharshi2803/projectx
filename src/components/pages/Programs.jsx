import "./program-styles.css"
import React, { useRef, useState } from "react";
import RecentProgram from "../RecentProgramComponent";
import { useEffect } from "react";

const DATA = [
  {
    id: 1,
    title: "Medical Boot Camp 2022",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max"    
  },
  {
    id: 2,
    title: "Medical Boot Camp 2022",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max"    
  },
  {
    id: 3,
    title: "Medical Boot Camp 2022",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max"   
  },
  {
    id: 4,
    title: "Medical Boot Camp 2022",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max"    
  },
  {
    id: 5,
    title: "Medical Boot Camp 2022",
    description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
    date: new Date(),
    comments: 230,
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-tw.jpg?w=960&cbr=1&q=90&fit=max"   
  },
]


const Programs = () => {
  const loader = useRef(null)

  useEffect(() => {
    loader.current.style.height = loader.current.firstChild.offsetHeight + 'px'
  }, [])
  
  const onButtonClick = () => {
    loader.current.style.height = 'auto'
    console.log(loader.current.firstChild.offsetHeight);
  };

  return (
    <div className="container">
      <h1 className="container mx-auto" style={{ fontFamily: "Quicksand", fontSize: '4rem' }}>Programs</h1>
      <div className="row container mt-5 mx-auto" ref={loader} style={{ overflow:'hidden' }}>
        {
        DATA.map(({id, title, description, date, comments, image}) => <RecentProgram key={id} title={title} description={description} date={date} comments={comments} image={image}/>)}
      </div>
      <div className="d-flex justify-content-center my-4">
        <button type="button" onClick={() => { onButtonClick() }} class="align-self-center text-white px-5 py-3" style={{ fontSize: '1.6rem', backgroundColor: '#008B8B' }}>Load More</button>
      </div>
    </div>
  );
};
  
export default Programs;