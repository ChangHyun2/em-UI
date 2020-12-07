import React, { useState } from 'react';
import { css } from '@emotion/core';

import Backdrop from './Backdrop';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
const Demo = () => {
  const [showBackDrop, setShowBackDrop] = useState(false);
  const handleToggle = () => setShowBackDrop(!showBackDrop);
  const handleClose = (e) => {
    setShowBackDrop(false);
  };

  return (
    <>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop open={showBackDrop} onClick={handleClose}>
        <Loading color={'white'} size={'sm'} />
      </Backdrop>
    </>
  );
};
export default Demo;
