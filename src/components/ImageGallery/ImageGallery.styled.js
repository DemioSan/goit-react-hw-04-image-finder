import styled from 'styled-components';

export const GalleryWrap = styled('ul')`
  margin-top: 80px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  max-width: calc(1300px - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 0;
  list-style: none;

  .ImageGalleryItem {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .ImageGalleryItem-image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .ImageGalleryItem-image:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;
