import React from 'react';
import { getAllVehicles } from '../service/AllComponents';
import Pagination from '../Common/Pagination';
import { vehiclesColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Vehicles extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      vehicles: [],
      page: 1,
      count: 0,
      config: vehiclesColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: vehicles } = await getAllVehicles();

    this.setState({
      vehicles,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { vehicles, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Vehicles</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={vehicles}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default Vehicles;
