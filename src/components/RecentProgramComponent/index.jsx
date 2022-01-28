
function RecentProgram({ title, description, date, comments, image }) {
  return (
    <div className="col-sm-4 col-md-6 col-xl-4 px-3 mb-4 pt-3 text-muted" style={{ backgroundColor: '#ebebeb', fontSize: '1.5rem' }}>
        <img src={image} alt={title} className="img-fluid" />
        <div className="d-flex justify-content-between py-3">
            <p className="">{date.toISOString().slice(0, 10)}</p>
            <p className="">{date.toISOString().slice(0, 10)}</p>
        </div>
        <h2 className="mb-3" style={{ fontSize: '3rem' }}>{title}</h2>
        <p className="lh-2 text-justify mb-3">{description}</p>
        <div className="d-flex justify-content-between py-3">
            <div className="comments d-flex">
                <svg className="align-self-center" width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="align-self-center ms-3">{comments}</p>
            </div>
            <button type="button" class="align-self-center text-white px-5 py-3" style={{ fontSize: '1.6rem', backgroundColor: '#008B8B' }}>Read More</button>
        </div>
    </div>
  );
}

export default RecentProgram;