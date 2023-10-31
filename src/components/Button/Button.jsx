'use client';
import React from 'react';
import styled from '@emotion/styled';
import { Button as _Button } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Button component
 * @component
 * @param {object} props
 * @param {string} props.shape
 * @param {string} props.variant
 * @param {string} props.color
 * @param {React.ReactNode | string} props.children
 * @returns {React.ReactElement} The Button.
 */
function Button(props) {
  return <_Button {...props} />;
}

export default styled(Button)`
  ${({ theme, shape }) => `
  border-radius: ${theme.shape[shape]};`}
`;

Button.propTypes = {
  shape: PropTypes.oneOf(['rounded', 'square', 'pill']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'accent', 'action']),
  children: PropTypes.node,
};
