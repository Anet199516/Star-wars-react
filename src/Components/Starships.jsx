import React from 'react';
import { getAllComponents } from '../service/dataFromServer';
import Pagination from '../Common/Pagination';
import { starshipsColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Starships extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      starships: [],
      page: 1,
      count: 0,
      config: starshipsColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: starships } = await getAllComponents(/starships/);

    this.setState({
      starships,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { starships, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Starships</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={starships}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default Starships;
