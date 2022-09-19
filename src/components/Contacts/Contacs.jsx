import React from 'react';
import { List, Wrapper, Item, Span, Button, Img } from './Contacs.styled.js';
import Avatar from 'react-avatar';
import Delete from './../../Assets/img/Delete.svg';
import PropTypes from 'prop-types';

function Contacs({ contacts, onDelete }) {
  return (
    <Wrapper>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <Avatar size="25" name={name} round={true} />
              {name}:<Span>{number}</Span>
              <Button
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                <Img src={Delete} alt="Delete" />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default Contacs;

Contacs.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
