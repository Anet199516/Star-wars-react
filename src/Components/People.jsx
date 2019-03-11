import React from 'react';
import { getAll } from '../service/AllPeople';
import Pagination from '../Common/Pagination';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      people: [],
      page: 1,
      count: 0,
    };
  }

  async componentDidMount() {
    const { count, results: people } = await getAll();

    this.setState({
      people,
      count,
      isLoaded: true,
    });
  }

  render() {
    const { people, isLoaded, count, page } = this.state;
    return (
      <div className="PeoplePage">
        <h1>People Page</h1>
        { isLoaded ? (
          <>
            <Pagination count={count} page={page} />
            <ul>
              { people.map(person => <li key={person.name}>{JSON.stringify(person)}</li>)}
            </ul>
          </>
        ) : (<h1>Loading...</h1>)}
      </div>
    );
  }
}

export default People;
