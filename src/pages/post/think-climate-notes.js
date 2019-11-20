import React from 'react';
import PostPage from '../../components/PostPage';

export default () => (
  <PostPage title="Event notes">
    <p>
      We've assembled a mindmap of our footnotes and content for you to explore.{' '}
      <a
        href="https://www.mindomo.com/mindmap/think-climate-c968e0bcbaeb452596086d4209701ed9"
        target="_blank"
      >
        Open in Mindomo window
      </a>
    </p>
    <div>
      <iframe
        src="https://www.mindomo.com/mindmap/think-climate-c968e0bcbaeb452596086d4209701ed9"
        frameborder="0"
        allowfullscreen
      >
        Your browser does not support frames.{' '}
        <a
          href="https://www.mindomo.com/mindmap/think-climate-c968e0bcbaeb452596086d4209701ed9"
          target="_blank"
        >
          View
        </a>{' '}
        this map on its original site. It was created using{' '}
        <a href="https://www.mindomo.com" target="_blank">
          Mindomo
        </a>
        .
      </iframe>
    </div>
  </PostPage>
);
