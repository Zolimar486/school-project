

// ResponsiveImage.js
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Post = ({alt}) => {
  return <Image src="./image/girl.png" alt={alt} />;
};

export default Post;
