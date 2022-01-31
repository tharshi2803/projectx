import "./program-styles.css"
import React from "react";
import { Link } from "react-router-dom";

const DATA = {
    title: "Medical Boot Camp 2022",
    description: `Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.
    Perhaps the most popular way to style a Remix application in the community is to use tailwind. It has the benefits of inline-style collocation for developer ergonomics and is able to generate a CSS file for Remix to import. The generated CSS file generally caps out around 8-10kb, even for large applications. Load that file into the root.tsx links and be done with it. If you don't have any CSS opinions, this is a great approach. Using plain stylesheets and <link> tags also opens up the ability to decrease.`,
    date: new Date(),
    comments: 230,
    image: "https://www.bms.lk/Gallery/2019/Graduation/data1/images/041.jpg",
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
            <img id="recent-program-image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src={DATA.image} alt={DATA.title} className="img-fluid" />
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