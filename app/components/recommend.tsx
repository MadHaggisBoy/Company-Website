import Image from 'next/image';


export default function Recommend() {
    return ( 
        <div className="row row-cols-1 row-cols-md-3 g-5">
        <div className="col">
          <div className="card" style={{height: '30rem'}}>
            <img src="jason-goodman-Oalh2MojUuk-unsplash.jpg" className="card-img-top" alt="..." style={{height: '9rem', objectFit: 'cover'}}/>
            <div className="card-body">
              <h5 className="card-title">Business</h5>
              <p className="card-text">Create teams and collaborate with colleages on important projects. Our platform will help your business grow by providing you with the tools to create an effective workflow to enable maximum productivity.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="brooke-cagle-WHWYBmtn3_0-unsplash.jpg" className="card-img-top" alt="..." style={{height: '9rem', objectFit: 'cover'}}/>
            <div className="card-body">
              <h5 className="card-title">Socialise</h5>
              <p className="card-text">Text, video call and share content with friends. Brainstorm serves as the perfect platform to keep in the loop with the people closest to you.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="kvalifik-5Q07sS54D0Q-unsplash.jpg" className="card-img-top" alt="..." style={{height: '9rem', objectFit: 'cover'}}/>
            <div className="card-body">
              <h5 className="card-title">Create</h5>
              <p className="card-text">Brainstorm provides you with the tools to create, organise and manage your own content. Looking for an app to organise your personal notes, documents or images? Brainstorm will keep you in check.</p>
            </div>
          </div>
        </div>
      </div>
    );
}