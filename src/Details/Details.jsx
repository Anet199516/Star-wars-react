import React from 'react';
import randomstring from 'randomstring';
import { getDetails } from '../service/dataFromServer';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      details: {},
    };
  }

  async componentDidMount() {
    const path = this.props.location.pathname;
    const details = await getDetails(path);

    this.setState({
      details, isLoaded: true,
    });
  }

  render() {
    const { details, isLoaded } = this.state;
    return (
      <>
        <h1 className="title-details">Details</h1>
        <div className="details-container">
          { isLoaded ? (
            <ul>
              {Object.entries(details).map(([key, value]) => 
                <li
                  style={{ color: "white" }} 
                  key={randomstring.generate(3)}>
                  { key.toUpperCase()}: { value }
                  </li>)}
            </ul>
          ) : (<h1>Loading...</h1>) }
        </div>
      </>
    );
  }
}

export default Details;
