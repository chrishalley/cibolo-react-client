import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '../';

const propTypes = {
  links: PropTypes.array
};

const defaultProps = {
  links: []
};

const LinkInput = (props) => {
  const [link, setLink] = useState('');
  const [links, setLinks] = useState(props.links);

  const { name } = props;

  const removeLink = (text) => {
    setLinks(links.filter(link => {
      return link !== text
    }));
  }

  const addLink = () => {
    setLinks([...links, link]);
    setLink('');
  };

  // useEffect(() => {
  //   console.log(links)
  // }, [links])

  const renderLinks = () => {
    return <ul data-testid="linksList">
      {links.map((link, i) => {
          return (
            <li key={i} data-testid="linkItem">
              <button data-testid="removeLink" onClick={() => removeLink(link)}>x</button>
              {link}
            </li>
        );
      })}
    </ul>;
  }

  return (
    <div data-testid="linkInput">
      <form data-testid="linkForm" onSubmit={(e) => { e.preventDefault(); addLink(link)}}>
        <TextInput
          name={name}
          onChange={(val) => setLink(val)}
          value={link}
        />
        <button type="submit" data-testid="addLink" onClick={() => {}}>Add</button>
      </form>
      {renderLinks()}
    </div>
  );
}

LinkInput.propTypes = propTypes;
LinkInput.defaultProps = defaultProps;

export { LinkInput };