import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cbs-navigation-v1.scss';

const BASE_URL = process.env.API_BASE_URL;

class CBSNavigation extends Component {


    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);

        this.state = {
            username: "Unknown", 
            showAnalyticsDropdown: false,
            collapseMenu: false
        };
    }

    onClick() {
        this.setState(prevState => ({showAnalyticsDropdown: !prevState.showAnalyticsDropdown}));
      }

    onMenuClick() {
        this.setState(prevState => ({collapseMenu: !prevState.collapseMenu}));
    }
    
    fetchData() {
        if (process.env.environment !== 'production') {
            this.url = `http://www.mocky.io/v2/5cdc46d52d00003b12f5a6da`;
            fetch(this.url, { method: "GET" }).then(response => response.json())
                .then(json =>
                    this.setState({
                        username: json.name
                    })
                )
                .catch(_ =>
                    this.setState({
                        isLoading: false,
                        isError: true
                    })
                );
        }
        else {
            this.url = `${BASE_URL}/identity`;
            fetch(this.url, { method: "GET" }).then(response => response.text())
                .then(text =>
                    this.setState({
                        username: text
                    })
                )
                .catch(_ =>
                    this.setState({
                        isLoading: false,
                        isError: true
                    })
                );

        }
        this.setState({ isLoading: true });
    }

    componentDidMount() {
        this.fetchData();
    }

    rcLogo(color) {
        var backgroundColor = (color == "red" ? "#c00" : "#fff");
        var mainColor = (color == "red" ? "#fff" : "#c00");

        return(
            <div className={`logo logo-${color}`}>
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 175 100">
                        <rect width="175" height="100" fill={mainColor} />
                        <path d="M20,50h66m-33,-33v66" fill="none" stroke={backgroundColor} strokeWidth="20" />
                        <circle cx="132" cy="50" r="34" fill={backgroundColor} />
                        <circle cx="142" cy="50" r="28" fill={mainColor} />
                        <path d="M7,7H168V93H7z" fill="none" stroke={backgroundColor} strokeWidth="3" />
                    </svg>
                </figure>
                <div className="logo-text">
                    CBS
                </div>
            </div>

        )
    }

    analyticsDropdown (){
        return (
            <div>
                <div className="dropdown-content">
                    <Link to="/analytics/" className="dropdown-item"><div className="d-i-text">Health risks</div></Link>
                    <Link to="/analytics/" className="dropdown-item"><div className="d-i-text">Regions</div></Link>
                    <Link to="/analytics/lite" className="dropdown-item"><div className="d-i-text">Light area overview</div></Link>
                    <Link to="/analytics/" className="dropdown-item"><div className="d-i-text">Volunteer performance</div></Link>
                </div>
            </div>
        )
    }

    createMenuItem(url, text) {
        var active = this.props.activeMenuItem;
        
        return <Link
                    to={`/${url}/`} 
                    className={`menu-item ${url == active ? `active` : ``}`}>
                    {text} {url=="analytics/#" && <i className={`fa ${this.state.showAnalyticsDropdown ? `fa-chevron-up` : `fa-chevron-down`}`}/>}
                </Link>
    }

    render() {
        return (
            <>
                <header className={`header mobile-header`}>
                    {this.rcLogo("white")}
                    <div onClick={this.onMenuClick} className="menu-toggler">
                        <i className={`fa ${this.state.collapseMenu ? `fa-bars`:`fa-times`}`}/>
                    </div>
                </header>
                    
                <header className={`header desktop-header ${this.state.collapseMenu ? `hidden`: ``}`}>
                    {this.rcLogo("red")}
                    <nav>
                        {this.createMenuItem("analytics", "Country Overview")}

                        <div className={`dropdown ${this.state.showAnalyticsDropdown ? `active` : ``}`} onClick={this.onClick}>
                            {this.createMenuItem("analytics/#", `Analytics`)}
                            {this.state.showAnalyticsDropdown && this.analyticsDropdown()}
                        </div>

                        {this.createMenuItem("admin", "Project Administration")}
                        {this.createMenuItem("reporting/datacollectors", "Data Collectors")}
                        {this.createMenuItem("reporting/case-reports", "Reports")}
                    </nav>

                    <div className="login-status">
                        <div className="logged-in">
                            <p>Logged in as: {this.state.username}</p>
                            <a className="logout" href="#"><i className='fa fa-sign-out'/> Log out</a>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default CBSNavigation;