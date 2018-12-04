import React from "react";

export default () => (
  <div>
    {/* <!-- Footer --> */}
    <footer className="page-footer font-small unique-color-dark">


      {/* <!-- Footer Elements --> */}
      <div className="container">

        {/* <!-- Grid row--> */}

        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-md-12 py-5">
            <div className="mb-5 flex-center">

              {/* <!-- Facebook --> */}
              <a className="fb-ic">
                <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              {/* <!-- Twitter --> */}
              <a className="tw-ic">
                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
              {/* <!-- Google +--> */}
              <a className="gplus-ic">
                <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" />
              </a>
            </div>
          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row--> */}

      </div>
      {/* <!-- Footer Elements --> */}

      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="#">AuthorsHaven.com</a>
      </div>
      {/* <!-- Copyright --> */}

    </footer>

  </div>
);
