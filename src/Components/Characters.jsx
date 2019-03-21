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
      page: 0,
      count: 0,
      config: charactersColumnConfig,
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

    const { count, results: characters } = await getAllComponents(`/people?${urlParams.toString()}`);

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
