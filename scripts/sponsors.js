var ReactButton = ReactBootstrap.Button;
var Navbar = ReactBootstrap.Navbar;
var NavBrand = ReactBootstrap.NavBrand;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;
var Input = ReactBootstrap.Input;

var Header = React.createClass({
  render: function() {
    return(
      <Navbar className="header" inverse toggleNavKey={0}>
        <NavBrand>
          <img src="img/sponsorclub.png" height="20" width="200" />
        </NavBrand>
        <Nav right eventKey={0}>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-envelope-o"></i>
            Messages
          </NavItem>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-user"></i>
            Profile</NavItem>
          <NavItem eventKey={2} href="#">
            <i className="fa fa-star"></i>
            Favorites
          </NavItem>
          <NavItem eventKey={3} href="#">
            <img src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png" className="paypal" />
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
});

var Filters = React.createClass({
  render: function() {
    var specialties = ["Accounting", "Finance", "Engineering", "Entrepreneurship", "HR", "Marketing", "International Business", "Operations Management", "Sales", "Software"]
    var demographics = ["High School Students", "College Students", "Junior Professionals", "Senior Professionals", "Management", "Executives"];
    var numberAttendees = ["< 50", "> 50", "> 100", "> 200", "> 300", "> 500", "> 1000"];
    return(
      <div className="filter-card">
        <Filter header="Event Focus"
                addFilter={this.props.addFilter}
                removeFilter={this.props.removeFilter}
                hasBorder={true}
                filterOptions={specialties} />
        <Filter header="Demographic"
                addFilter={this.props.addFilter}
                removeFilter={this.props.removeFilter}
                hasBorder={true}
                filterOptions={demographics} />
        <Filter header="Number of Attendees"
                addFilter={this.props.addFilter}
                removeFilter={this.props.removeFilter}
                hasBorder={false}
                filterOptions={numberAttendees} />
      </div>
    )
  }
});

var Filter = React.createClass({
  getInputs: function() {
    return(
      _(this.props.filterOptions).map(function(optionLabel, idx) {
          return(
            <Input type="checkbox" label={optionLabel} readOnly />
          )
        })
    )
  },

  getBottomBorder: function() {
    if(this.props.hasBorder) {
      return(<div className="filter-border"></div>)
    }

    return(<div></div>)
  },

  render: function() {
    return(
      <div>
        <h4>{this.props.header}</h4>
        {this.getInputs()}
        {this.getBottomBorder()}
      </div>
    )
  }
});

var SponsorPanel = React.createClass({
  render: function() {
    return(
      <div className="col-sm-6">
        <div className="sponsor-card-container">
          <div className="sponsor-image"
                style={{backgroundImage: 'url(' + this.props.singleEvent.headerUrl + ')'}}></div>
          <div className="card-body">
            <header className="card-header">
              <div className="small-company-logo"
                    style={{backgroundImage: 'url(' + this.props.singleEvent.smallLogoUrl + ')'}}></div>
              <div className="company-points">
                <div className="company-name">
                  <span>{this.props.singleEvent.eventName}</span>
                </div>
                <div className="industry">
                  <span>{this.props.singleEvent.industry}</span>
                </div>
                <div className="number-employees">
                  <i className="fa fa-user"></i>
                  <span>{this.props.singleEvent.attendees}</span>
                </div>
                <div className="company-locality">
                  <i className="fa fa-map-marker"></i>
                  <span>{this.props.singleEvent.locality}</span>
                </div>
              </div>
            </header>
            <article className="sponsor-description-container">
              <span className="sponsor-description">{this.props.singleEvent.eventDescription}</span>
            </article>
            <footer className="clearfix">
              <ReactButton className="float-left">
                <i className="fa fa-times"></i>
                Not interested
              </ReactButton>
              <ReactButton bsStyle="success"
                           className="float-right">
               <i className="fa fa-pencil-square-o"></i>

                Message
              </ReactButton>
            </footer>
          </div>
        </div>
      </div>
    )
  }
});

var SponsorPanels = React.createClass({
  getSponsorPanels: function() {
    var events = [
      {
        eventName: "HackingEDU Hackathon",
        attendees: "1,000",
        industry: "Software",
        locality: "San Mateo",
        eventDescription: "HackingEDU is a hackathon run by students, for students, with the intent of disrupting the classroom and the contemporary education system. Over 1000 of the sharpest young minds from all over the West Coast will gather on October 23-25, 2015 to build anything they can dream of. Our core team includes Google Student Ambassadors and other students from over 13 different universities that have come together to inspire the next generation of students to solve the problems that plague our education system. Join HackingEDU and help us invent the future!,",
        headerUrl: "https://imgur.com/0FufnLX.jpg",
        smallLogoUrl: "https://imgur.com/qmjv20u.jpg"
      },
      {
        eventName: "EarthTeam Student Camping Trip",
        attendees: "100",
        industry: "Software",
        locality: "San Mateo",
        eventDescription: "EarthTeam programs empower youth to become lifelong environmental stewards. Students implement action projects that provide active learning about environmental science. They engage in peer-to-peer education activities, sharing their school-based service-learning projects with other students. EarthTeam's leadership opportunities promote pathways to college and environmental science and technology careers.,",
        headerUrl: "http://imgur.com/xBOJ3qE.jpg",
        smallLogoUrl: "http://imgur.com/FLpYZBl.jpg"
      },
      {
        eventName: "SF Student Career Fair",
        attendees: "15,000",
        industry: "Software",
        locality: "San Mateo",
        eventDescription: "The San Francisco Student Career Fair is a great event for students and alumni from all majors for entry-level positions and internships. Employers representing businesses, non-profits and government agencies participate in this one-day recruiting event.,",
        headerUrl: "http://imgur.com/nHUUAZe.jpg",
        smallLogoUrl: "http://imgur.com/9QAehcK.jpg"
      },
      {
        eventName: "Student Charity Run San Francisco ",
        attendees: "1,000",
        industry: "Software",
        locality: "San Francisco",
        eventDescription: "Run for charity and raise much needed funds for a good cause. To celebrate Halloween, and bring awareness to Breast Cancer, we are hosting a 5K & 10K.  We will be donating at least $4 of every registration to the Breast Cancer Research Foundation, an amazing organization that is dedicated to to prevent and cure breast cancer by advancing the world’s most promising research.,",
        headerUrl: "http://imgur.com/Goao9MJ.jpg",
        smallLogoUrl: "http://imgur.com/7Pk8Uhc.jpg"
      }
    ];
    return(
      _(events).map(function(singleEvent, idx) {
        return(
          <SponsorPanel singleEvent={singleEvent} />
        )
      })
    )
  },

  render: function() {
    return(
      <div className="row">
        {this.getSponsorPanels()}
      </div>
    )
  }
});

var SponsorPage = React.createClass({
  getInitialState: function() {
    return({
      eventFocus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      demographic: [0, 1, 2, 3, 4, 5],
      numberAttendees: [0, 1, 2, 3, 4, 5, 6]
    })
  },

  removeFilter: function(name, el) {
    var index = this.state[name].indexOf(el);
    if (index > -1) {
      this.state[name].splice(index, 1);
    }
    this.setState(this.state);
  },

  addFilter: function(name, el) {
    this.state[name].push(el);
    this.setState(this.state);
  },

  render: function() {
    return(
      <div className="app">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Filters removeFilter={this.removeFilter}
                       addFilter={this.addFilter} />
            </div>
            <div className="col-sm-8">
              <SponsorPanels filters={this.state} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <SponsorPage />,
  document.getElementById('content')
);
