import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Content from './index';

// const storyProps = {};

const stories = storiesOf('Components|Content', module);

stories.add('default', () => (
  <Content>
    <main>
      <section>
        <h1>h1 HTML5 Kitchen Sink</h1>
        <h2>
          h2 Back in my quaint <a href="#">garden</a>
        </h2>
        <h3>
          h3 Jaunty <a href="#">zinnias</a> vie with flaunting phlox
        </h3>
        <h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
      </section>

      <article>
        <p>
          This paragraph is nested inside an article. It contains many
          different, sometimes useful,{' '}
          <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course
          there are classics like <em>emphasis</em>, <strong>strong</strong>,
          and <small>small</small> but there are many others as well. Hover the
          following text for abbreviation tag:{' '}
          <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym
          tag like this: <acronym title="For The Win">ftw</acronym>. You can
          define <del>deleted text</del> which often gets replaced with{' '}
          <ins>inserted</ins> text.
        </p>
        <p>
          You can also use <kbd>keyboard text</kbd>, which sometimes is styled
          similarly to the <code>&lt;code&gt;</code> or <samp>samp</samp> tags.
          Even more specifically, there is a tag just for <var>variables</var>.
          Not to be mistaken with blockquotes below, the quote tag lets you
          denote something as <q>quoted text</q>. Lastly don't forget the sub (H
          <sub>2</sub>O) and sup (E = MC<sup>2</sup>) tags.{' '}
        </p>
      </article>
      <section>
        <blockquote>
          <p>
            Blockquote: I quickly explained that many big jobs involve few
            hazards
          </p>
        </blockquote>
        <blockquote>
          <p>
            This is a mult-line blockquote with a cite reference. People think
            focus means saying yes to the thing you’ve got to focus on. But
            that’s not what it means at all. It means saying no to the hundred
            other good ideas that there are. You have to pick carefully. I’m
            actually as proud of the things we haven’tdone as the things I have
            done. Innovation is saying no to 1,000 things.
            <cite>
              Steve Jobs – Apple Worldwide Developers’ Conference, 1997
            </cite>
          </p>
        </blockquote>
      </section>

      <section>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <li>Unordered List item one</li>
          <li>Level 3, item one</li>
          <li>Level 3, item two</li>
          <li>Level 3, item three</li>
          <li>Level 3, item four</li>
        </ul>

        <ol>
          <li>List item one</li>
          <li>List item one</li>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ol>
      </section>
      <section>
        <table>
          <caption>Tables can have captions now.</caption>
          <tbody>
            <tr>
              <th>Person</th>
              <th>Number</th>
              <th>Third Column</th>
            </tr>
            <tr>
              <td>Someone Lastname</td>
              <td>900</td>
              <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
            </tr>
            <tr>
              <td>
                <a href="#">Person Name</a>
              </td>
              <td>1200</td>
              <td>
                Vestibulum id ligula porta felis euismod semper. Donec
                ullamcorper nulla non metus auctor fringilla.
              </td>
            </tr>
            <tr>
              <td>Another Person</td>
              <td>1500</td>
              <td>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </td>
            </tr>
            <tr>
              <td>Last One</td>
              <td>2800</td>
              <td>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </Content>
));
