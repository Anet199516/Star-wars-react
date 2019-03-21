import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({
  location, count, page = 1, perPage = 10,
}) => {
  const pageCount = Math.ceil(count / perPage);
  const pages = [];

  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }

  const getSearchWithPage = (page) => {
    const urlParams = new URLSearchParams(location.search);

    urlParams.set('page', page);

    return urlParams.toString();
  };

  return (
    <ul className="pagination">
      {pages.map(page => (
        <button className="button-pagination" key={page} type="button">
          <Link
            to={{
              pathname: location.pathname,
              search: getSearchWithPage(page),
            }}
          >
            {page}
          </Link>
        </button>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number,
  perPage: PropTypes.number,
};

export default withRouter(Pagination);
