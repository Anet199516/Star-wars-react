import React from 'react';
import { getAllComponents } from '../service/dataFromServer';
import Pagination from '../Common/Pagination';
import { filmsColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Films extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      films: [],
      config: filmsColumnConfig,
    };
  }

  async componentDidMount() {
    const { results: films } = await getAllComponents(/films/);

    this.setState({
      films,
      isLoaded: true,
    });
  }

  render() {
    const { films, isLoaded, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Films</h1>
        { isLoaded ? (
          <DataTable
            className="data-table"
            items={films}
            config={config}
          />
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}


export default Films;
