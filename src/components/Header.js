import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>
        <a href="https://www.gatsbyjs.org/">Gatsby</a> Html5up
      </h1>
      <p>Open-Source app with Aerial design</p>
      <nav>
        <ul>
          {config.authorSocialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
