import React, { Component } from 'react';
import DataTable from '../components/DataTable';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      headers: [
        { title: "Name", accessor: "name", index: 1, dataType: "string" },
        { title: "Address", accessor: "address", index: 2, dataType: "string" },
        { title: "City", accessor: "city", index: 3, dataType: "string" },
        { title: "Region", accessor: "region", index: 4, dataType: "string" },
        { title: "Country", accessor: "country", index: 5, dataType: "string" },
        { title: "Birthday", accessor: "birthday", index: 6, dataType: "number" },
      ],
    }
  }

  componentDidMount() {
    fetch('/api/v1/users')
      .then(res => res.json())
      .then(data => {this.setState({data});
    })
  } 
  
  render() {
    return (
      <div>
        <DataTable className="data-table"
          data={this.state.data}
          keyField="id"
          headers={this.state.headers}/>
      </div>
    );
  }
}

export default App;