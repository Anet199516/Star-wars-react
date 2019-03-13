import React from 'react';
import { getAllPeople } from '../service/AllComponents';
import Pagination from '../Common/Pagination';
import { peopleColumnConfig } from '../Common/Config';
import DataTable from '../Common/DataTable';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      people: [],
      page: 1,
      count: 0,
      config: peopleColumnConfig,
    };
  }

  async componentDidMount() {
    const { count, results: people } = await getAllPeople();

    this.setState({
      people,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { people, isLoaded, count, page, config } = this.state;
    return (
      <div>
        <h1 className="title-component">People Page</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <DataTable
              className="data-table"
              items={people}
              config={config}
            />
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default People;
