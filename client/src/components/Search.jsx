import React from 'react';
import styles from '../../dist/player.css';

const Search = ({
  query, change, search, positivePolarity, negativePolarity,
}) => (
  <div>
    <div className="container">
      <div className={styles.searchBar}>
        <input className="input-field" type="text" placeholder="Search an Artist..." value={query} onChange={change} />
        <h4>How are you feeling?</h4>
        <button type="button" className="waves-effect waves-light btn blue accent-3 happy" onClick={() => { positivePolarity(); search(query); }}>
          Happy

          {/* Happy Emoji button */}
        </button>
        <button type="button" className="waves-effect waves-light btn blue accent-3 sad" onClick={() => { negativePolarity(); search(query); }}>
          Sad{/* Sad or Crying Emoji button */}
        </button>
        {/* Filter by:  <button type="button">songtitles</button> */}
        {/* <input type="button" value="Sort" className="sort" /> */}
      </div>
    </div>
  </div>
);

export default Search;
