import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="#">Lead Manager</a>
        </div>
</nav>
            </div>
        );
    }
}

export default Header;
