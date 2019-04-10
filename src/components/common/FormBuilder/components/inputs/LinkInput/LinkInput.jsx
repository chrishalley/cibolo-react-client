import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '../';
import { PrimaryButton, SVGIcon, FileList } from '../../../../';
import styles from './LinkInput.module.css';

const propTypes = {
  links: PropTypes.array,
  name: PropTypes.string,
  showList: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  name: 'linkInput',
  showList: true,
  onChange: () => console.warn('No onChange callback defined')
};


const LinkInput = (props) => {
  const [link, setLink] = useState('');
  const [links, setLinks] = useState(props.links || []);
  
  const { name, showList, onChange, ...restProps } = props;

  const removeLink = (remLink) => {
    setLinks(links.filter(link => {
      return link.url !== remLink.url
    }));
  }

  const addLink = (link) => {
    if (link.length > 0) {
      setLinks([...links, { url: link }]);
      onChange({ url: link });
      setLink('');
    }
  };

  const keyPressHandler = (e, link) => {
    if (e.key === "Enter") {
      addLink(link);
    }
  }

  return (
    <div data-testid="linkInput" className={styles['link-input']} {...restProps} onClick={e => e.stopPropagation()}>
      <div data-testid="linkForm" className={styles['link-form']}>
        <TextInput
          name={name}
          onChange={(val) => setLink(val)}
          value={link}
          className={styles['link-input-field']}
          onBlur={() => {}}
          onKeyPress={(e) => keyPressHandler(e, link)}
        />
        <PrimaryButton className={styles['link-add-button']} type="submit" data-testid="addLink" onClick={() => addLink(link)}><SVGIcon strokeWidth="15" style={{ width: '1.5rem' }} icon="add"/></PrimaryButton>
      </div>
      {showList && <FileList files={links} onRemove={(link) => removeLink(link)}/>}
    </div>
  );
}

LinkInput.propTypes = propTypes;
LinkInput.defaultProps = defaultProps;

export { LinkInput };