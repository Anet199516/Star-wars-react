import React from 'react';
import { getAllComponents } from '../service/dataFromServer';
import Pagination from '../Common/Pagination';
import { charactersColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      characters: [],
      page: 1,
      count: 87,
      config: charactersColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: characters } = await getAllComponents(/people/);

    this.setState({
      characters,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { characters, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">Characters</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={characters}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default Characters;
