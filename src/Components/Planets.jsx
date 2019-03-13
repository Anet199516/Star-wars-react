import React from 'react';
import { getAllPlanets } from '../service/AllComponents';
import Pagination from '../Common/Pagination';
import { planetsColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Planets extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      planets: [],
      page: 1,
      count: 0,
      config: planetsColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: planets } = await getAllPlanets();

    this.setState({
      planets,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { planets, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Planets</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={planets}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}
export default Planets;
