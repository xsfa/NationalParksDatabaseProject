import React from 'react'

class Search extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the DOM element
      this.input = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      console.log("Searching for: ", this.input.current.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Search:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" name="Search" />
        </form>
      )
    }
  }

  export default Search;