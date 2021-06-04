
import React, { Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          National Park Database
        
      </header>

      <div className="search bar">
          
        
      </div>
    </div>
  );
}

class parks_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> Name </button>
          <button> State </button>
          <button> Latitude </button>
          <button> Longitude </button>
        </div>
      </div>
    );
  }
}

class staff_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> SSN </button>
          <button> Name </button>
          <button> Overseeing Area </button>
          <button> Office ID </button>
          <button> Employing Park Name </button>
          <button> Employing Park ID </button>
        </div>
      </div>
    );
  }
}

class campgrounds_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> Name </button>
          <button> Max Occupancy </button>
          <button> Latitude </button>
          <button> Longitude </button>
          <button> National Park Name </button>
        </div>
      </div>
    );
  }
}

class hikingtrails_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> Name </button>
          <button> Length in Miles </button>
          <button> Trail Difficulty </button>
          <button> Latitude </button>
          <button> Longitude </button>
        </div>
      </div>
    );
  }
}

class Visitors_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> National Park name </button>
          <button> First Name </button>
          <button> Last Name </button>
          <button> Annual Pass Holder (0/1) </button>
          <button> Gender </button>
        </div>
      </div>
    );
  }
}

class flora_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> National Park name </button>
          <button> Species </button>
        </div>
      </div>
    );
  }
}

class animal_searchByMenu extends Component {
  render() {
    return (
      <div>
        <button>
          Search By...
        </button>
        
        <div className="search_menu">
          <button> National Park name </button>
          <button> Species </button>
          <button> Population at a Park </button>
        </div>
      </div>
    );
  }
}

export default App;
