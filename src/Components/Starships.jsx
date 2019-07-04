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
      page: 0,
      count: 0,
      config: starshipsColumnConfig,
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

    const { count, results: starships } = await getAllComponents(`/starships?${urlParams.toString()}`);

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
