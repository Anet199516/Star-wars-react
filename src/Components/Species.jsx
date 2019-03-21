import React from 'react';
import { getAllComponents } from '../service/dataFromServer';
import Pagination from '../Common/Pagination';
import { speciesColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class Species extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      species: [],
      page: 0,
      count: 0,
      config: speciesColumnConfig,
    };
  }

  componentDidMount() {
    this.updatePageFromURL();
  }

  componentDidUpdate() {
    this.updatePageFromURL();
  }

  updatePageFromURL() {
    const { location } = this.props;
    const urlParams = new URLSearchParams(location.search);
    const page = +urlParams.get('page') || 1;

    if (page === this.state.page) return;

    this.setState({ page }, this.loadPeople);
  }

  async loadPeople() {
    const { page } = this.state;
    const urlParams = new URLSearchParams();

    urlParams.set('page', page);

    const { count, results: species } = await getAllComponents(`/species?${urlParams.toString()}`);

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
        <h1 className="title-component">Species</h1>
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
