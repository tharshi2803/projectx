import "./program-styles.css"
import React from "react";
import { Link } from "react-router-dom";

const DATA = {
    title: "International Collaboration on Sustainable Development",
    description: `The Faculty of Law, University of Lund in Sweden will be commencing a new Ph.D. course titled, ‘A Law to Save the World?.  It offers critical analysis of the Sustainable Development Goals and the discourses and interests they serve.  The course focuses on the relationship between sustainable development and existing global legal order. The Postgraduate Unit of the Faculty of Law, University of Colombo expresses its appreciation to Dr. Dinesha Samaratne for the successful coordination between the two institutions.  University of Colombo is partnering with University of Lund securing 4 placements in the course.

    The selected candidates Ms. Bhuddhika Munasinghe, Ms. Dulki Seethawaka, Ms. Yasmada Lokunarangoda and Mr. Chamath Fernando met the Faculty administration on the 25th October 2021, at an event organised by the Postgraduate Unit. Dr. Sampath Punchihewa, Dean of the Faculty of Law, Prof. Wasantha Seneviratne, Head of the Department of Public & International Law, Mr. Menaka Harankaha, Head of the Department of Commercial Law, Dr. Udapadie Liyanage, Head of the Department of Private & Comparative Law and Dr. Kokila Konasinghe, Coordinator of the M. Phil. and Ph.D. Programmes of the Faculty of Law were present at this occasion.`,
    date: new Date(),
    comments: 230,
    image: "https://law.cmb.ac.lk/wp-content/uploads/2021/10/21Lund-Collaboration_01-1024x768.jpg",
    related: [
        {
            id: 1,
            title: "Medical Boot Camp 2022",
            description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
            date: new Date(),
            comments: 230,
            image: "https://cmb.ac.lk/wp-content/uploads/generalconvocation_2017_-15.jpg"
        },
        {
            id: 2,
            title: "Medical Boot Camp 2022",
            description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
            date: new Date(),
            comments: 230,
            image: "https://cbr.lk/wp-content/uploads/2021/03/IIHS-Graduation.jpg"
        },
        {
            id: 3,
            title: "Medical Boot Camp 2022",
            description: "Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.",
            date: new Date(),
            comments: 230,
            image: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_4088cac0ec.jpg"
        }
    ]
}


function SingleProgram() {

    return (
        <div className="container">
            <h1 className="container mx-auto mb-5" style={{ fontSize: '4rem', color: '#404040' }}>{DATA.title}</h1>
            <img id="recent-program-image" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} src={DATA.image} alt={DATA.title} className="img-fluid" />
            <p className="lh-2 text-justify mb-5 mt-5 para-program">{DATA.description}</p>
            <p className="lh-2 text-justify mb-5 mt-5 para-program">{DATA.description}</p>
            <h1 className="container mx-auto mb-5" style={{ fontSize: '3rem', color: '#404040' }}>Related Programs</h1>
            <div className="row px-5 px-md-0">
                {
                    DATA.related.map(({ id, title, date, image }) => (
                        <Link to={`/programs/${id}`} key={id} className="col-12 col-md-4 mb-4 pt-3 text-muted no-underline">
                            <div id="recent-program-hoverby" style={{ fontSize: '1.5rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                                <img id="recent-program-image" style={{ width: '60rem', height: '30rem', objectFit: 'cover' }} src={image} alt={title} className="img-fluid" />
                                <div id="hover-recent-program" className="py-3 px-4">
                                    <h2 className="mb-3" style={{ fontSize: '2rem', color: '#fff' }}>{title}</h2>
                                    <div className="d-flex justify-content-between " style={{ color: '#fff' }}>
                                        <p className="">{date.toISOString().slice(0, 10)}</p>
                                        <p className="">{date.toISOString().slice(0, 10)}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default SingleProgram;