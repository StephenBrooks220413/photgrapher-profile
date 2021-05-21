import './App.css';

function App() {
  return (
    <div>
      <header className="App-header fixed-top">
        <h1>Mike Bolwsin</h1>
        <div className="col-md">
          <i class="fab icon-f fa-facebook-messenger"></i>
          <i class="fab icon-l fa-linkedin-in"></i>
          <i class="fab icon-t fa-twitter"></i>
        </div>
      </header>
      <div class="bg-image">
        <img
          src="/camera.png"
          className="img-fluid max"
          alt="Sample"
        />
        <div className="mask bg-cam">
          <div className="intro-text">
            <h1 className="text-white mb-0">Accepting Appointments</h1>
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="container">
        <h1 className="display-3 text-center">Previous Work</h1>
        <div className="row text-center">
          <div className="col-md">
            <img
              src="https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              className="img-fluid max"
              alt="Sample"
            /><br />
            <label>Wedding</label>
          </div>
          <div className="col-md">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              className="img-fluid max"
              alt="Sample"
            /><br />
            <label>Background</label>
          </div>
          <div className="col-md">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
              className="img-fluid max"
              alt="Sample"
            /> <br />
            <label>Modeling</label>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row text-center">
          <div className="col-md">
            <br /><br />
            <img src="https://images.unsplash.com/photo-1616341592284-28a4f957e68d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" className="img-fluid w-100 h-75" alt="camera"/>
          </div>
          <div className="col-md">
            <h1>About Me</h1>
            Spent the last 12 years taking photos of varied events, and it all started
            with a disposable camera I bought at Wal-Greens. I used it to take some photos
            of an event and it was so humorious that someone paid extra for me to get a
            better camera. To this day I have that disposable camera as memorabilia and
            still look back to that day now. Especially when I have those tough jobs and
            I think to myself that it coud always be tougher. <br /><br />
            <strong>Now</strong>, I have 4 studios, 9 employees, and 3 offices. TO this day
            me and that person who paid me more to get anothyer camera had remained in contact
            and I do all his family events. Just comes to show that you never know what you
            will get, but you just have to put yourself out there and try.
          </div>
        </div>
      </div>
      <br /><br />
      <div className="container text-center">
        <h1 className="display-4">Upcoming Work</h1>
      <div
        id="carouselBasicExample"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <br /><br />
      <footer class="bg-light text-center text-white">
        <div class="text-center bg p-3">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
