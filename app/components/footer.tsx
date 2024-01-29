export default function Footer() {
    return (
      <div className="container-fluid text-center text-white p-4" style={{ minHeight: '8rem', backgroundColor: 'black', paddingTop: '2rem'}}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col">
            <p style={{textAlign: 'left'}}>Brainstorm forms part of a group project assignment being undertaken at Heriot Watt University. The course being undertaken is Software Engineering/Professional Development. For further
            information on the project. For more information, please contact us.</p>
          </div>
          <div className="col">
            <p style={{textAlign: 'right'}}>
              Contact us<br/>
              <a href="mailto:cg2017@hw.ac.uk">cg2017@hw.ac.uk</a><br/>
              07753185398
            </p>
          </div>
        </div>
      </div>
    );
  }
  