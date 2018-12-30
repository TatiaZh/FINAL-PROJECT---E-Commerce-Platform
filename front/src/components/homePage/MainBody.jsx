import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/homePage/mainBody.css';

class MainBody extends Component {
  render() {
    return (
      <div className="mainBody--wrapper">
        <div className="batch__section--wrapper batch__section--wrapper-1">
          <div className="batch__section">
            <div className="batch__content">
              <span>Batch :</span>
              <br />
              <span>No. 1</span>
              <div className="shop__button">
                <h3>
                  <Link to="/shop" className="shop_button--text">
                    Shop Now
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content--wrapper">
          <div className="main-content">
            <div className="main-content__section-1">
              <div className="moto-div">
                <span>Pickle</span>
                <br />
                <span>Perfection</span>
              </div>
              <div className="content-div">
                <p>
                  Since 2005, Brine has done more than refine an old tradition:
                  We've started a new one. Guided by an international palate, we
                  fuse unique pickling techniques from around the world to
                  create interesting flavors and textures. Brine makes
                  everything in small batches from our home in L.A.. To achieve
                  optimal flavor, our products age from three weeks to four
                  months, making every pickle worth your patience.
                </p>
              </div>
            </div>

            <div className="main-content__section-2">
              <img
                src={'../../images/pickles-blog-beet-on-pink-square.jpeg'}
                alt=""
              />
              <img
                src={'../../images/pickles-blog-cucumber-on-green.jpeg'}
                alt=""
                className="main-content__section-2__img-2"
              />
              <img
                src={'../../images/pickles-blog-lemon-on-blue-square.jpeg'}
                alt=""
              />
            </div>

            <div className="main-content__section-3">
              <div className="moto-div">
                <span>Quality</span>
                <br />
                <span>Ingredients</span>
              </div>
              <div className="content-div">
                <p>
                  Brine pickles fresh, organic produce from local farmers in
                  California. Even our spices are fresh. Just because pickling
                  is a preservation process doesn’t mean you can use dried-up
                  thyme or week-old asparagus that’s already a little spongy. We
                  want to give our customers crisp, crunchy and delicious
                  pickled vegetables and fruits. Most of all, we want to expand
                  people’s palates and prove that pickles don’t always come in a
                  green or red variety.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="batch__section--wrapper batch__section--wrapper-2">
          <div className="batch__section batch__section-2">
            <div className="batch__content batch__content__section-2">
              <span>Batch :</span>
              <span>No. 2</span>
              <div className="shop__button shop__button__section-2">
                <h3>
                  <Link to="/shop" className="shop_button--text">
                    Shop Now
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="gap--filler">
          <h1>"The New Pickle"</h1>
          <h3>- Postprandial Magazine</h3>
        </div>

        <div className="batch__section--wrapper batch__section--wrapper-3">
          <div className="batch__section">
            <div className="batch__content">
              <span>Batch</span>
              <span>No. 3</span>
              <div className="shop__button">
                <h3>
                  <Link to="/shop" className="shop_button--text">
                    Shop Now
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content-2--wrapper">
          <div className="main-content-2">
            <div className="main-content-2__section-1">
              <div className="moto-div">
                <span>Pickle</span>
                <br />
                <span>Pioneers</span>
              </div>
              <div className="content-div">
                <p>
                  California natives Petra Frenkel and Gordon Byun are
                  passionate about pickles. Gordon was raised on a steady diet
                  of kimchi in a traditional Korean family. Helping his mom make
                  the spice mixture and prepare the vegetables, he learned from
                  the best. Petra blames her pickle obsession on her parents who
                  migrated to SoCal from New York. Dissatisfied with the L.A.
                  pickle ecosystem, her parents made kosher pickles at home.
                  Petra became a bit of a pickle-snob, but thinks that everyone
                  should eat delicious things, so it’s really more of an
                  egalitarian snobbery.
                </p>
              </div>
            </div>

            <div className="main-content-2__section-2">
              <img
                src={'../../images/pickles-blog-carrot-on-pink-square.jpeg'}
                alt=""
              />
              <img
                src={'../../images/pickles-blog-pepper-on-blue-square.jpeg'}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
