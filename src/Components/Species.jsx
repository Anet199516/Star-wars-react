import React from 'react';
import { getAllSpecies } from '../service/AllComponents';
import Pagination from '../Common/Pagination';
import { speciesColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Species extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      species: [],
      page: 1,
      count: 0,
      config: speciesColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: species } = await getAllSpecies();

    this.setState({
      species,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { species, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Species Page</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={species}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default Species;
