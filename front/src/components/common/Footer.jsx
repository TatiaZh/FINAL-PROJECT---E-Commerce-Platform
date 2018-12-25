import React, { Component } from 'react';
import '../../CSS/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer--wrapper">
          <div className="footer-top__div">
            <div>
              <a href="#" className="fa fa-facebook" />
            </div>
            <div>
              <a href="#" className="fa fa-instagram" />
            </div>
            <div>
              <a href="#" className="fa fa-twitter" />
            </div>
          </div>

          <div className="footer-nav__div">
            <a href="">STOCKISTS</a>
            <a href="">FAQ</a>
            <a href="">PRIVACY</a>
            <a href="">TERMS OF USE</a>
            <a href="">CONTACT</a>
          </div>
          <div className="footer-bot__div">
            <span>Powered By</span>
            <a href="">Nova</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
