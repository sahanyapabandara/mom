> Utility classes are CSS class names that serve one particular purpose.

## Class name syntax

`.{root}-{modifier}:{value}`

All CSS utility classes conform to the above syntax.

- **Root** describes what the utility class does.
- **Modifier** provides scoping for the utility's effect.
- **Value** is a token name from the Sass design token inventory.

**Note:** In the tables below, `get(value)` refers to the respective Sass map containing the design token values. Refer to the [Styles](#/Styles) section for the full list of design tokens.

## Directional modifiers

Provides directional scoping for margin, padding and border utilities.

<table>
  <thead>
    <tr>
      <th>Modifier</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`l`</td>
      <td>Left</td>
    </tr>
    <tr>
      <td>`r`</td>
      <td>Right</td>
    </tr>
    <tr>
      <td>`t`</td>
      <td>Top</td>
    </tr>
    <tr>
      <td>`b`</td>
      <td>Bottom</td>
    </tr>
    <tr>
      <td>`x`</td>
      <td>Horizontal (left and right)</td>
    </tr>
    <tr>
      <td>`y`</td>
      <td>Vertical (top and bottom)</td>
    </tr>
  </tbody>
</table>

## Spacing utilities

<table>
  <thead>
    <tr>
      <th>Class root</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`m`</td>
      <td>Margin</td>
      <td>`get(spacing)`</td>
    </tr>
    <tr>
      <td>`nm`</td>
      <td>Negative margin</td>
      <td>`get(spacing)`</td>
    </tr>
    <tr>
      <td>`p`</td>
      <td>Padding</td>
      <td>`get(spacing)`</td>
    </tr>
  </tbody>
</table>

## Appearance utilities

<table>
  <thead>
    <tr>
      <th>Class root</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`c`</td>
      <td>Color</td>
      <td>`get(color)`</td>
    </tr>
    <tr>
      <td>`bgc`</td>
      <td>Background color</td>
      <td>`get(color)`</td>
    </tr>
    <tr>
      <td>`bsh`</td>
      <td>Box shadow</td>
      <td>`get(shadow)`</td>
    </tr>
  </tbody>
</table>

## Typography utilities

<table>
  <thead>
    <tr>
      <th>Class root</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`fz`</td>
      <td>Font size</td>
      <td>`get(font-size)`</td>
    </tr>
    <tr>
      <td>`lh`</td>
      <td>Line height</td>
      <td>`get(line-height)`</td>
    </tr>
    <tr>
      <td>`fs`</td>
      <td>Font style</td>
      <td>
        <ul>
          <li>`n` — normal</li>
          <li>`i` — italic</li>
          <li>`o` — oblique</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`fw`</td>
      <td>Font weight</td>
      <td>`get(font-weight)`</td>
    </tr>
    <tr>
      <td>`ta`</td>
      <td>Text align</td>
      <td>
        <ul>
          <li>`l` — left</li>
          <li>`r` — right</li>
          <li>`c` — center</li>
          <li>`j` — justify</li>
          <li>`ja` — justify-all</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`tt`</td>
      <td>Text transform</td>
      <td>
        <ul>
          <li>`n` — none</li>
          <li>`c` — capitalize</li>
          <li>`u` — uppercase</li>
          <li>`l` — lowercase</li>
          <li>`ja` — justify-all</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`ws`</td>
      <td>White space</td>
      <td>
        <ul>
          <li>`n` — normal</li>
          <li>`nw` — nowrap</li>
          <li>`p` — pre</li>
          <li>`pw` — pre-wrap</li>
          <li>`pl` — pre-line</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`wb`</td>
      <td>Word break</td>
      <td>
        <ul>
          <li>`n` — normal</li>
          <li>`ba` — break-all</li>
          <li>`bw` — break-word</li>
          <li>`ka` — keep-all</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Layout utilities

<table>
  <thead>
    <tr>
      <th>Class root</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`wrap`</td>
      <td>Constrains children to a max-width</td>
      <td>`get(wrap)`</td>
    </tr>
    <tr>
      <td>`d`</td>
      <td>Display</td>
      <td>
        <ul>
          <li>`n` — none</li>
          <li>`i` — inline</li>
          <li>`b` — block</li>
          <li>`ib` — inline block</li>
          <li>`f` — flex</li>
          <li>`if` — Inline flex</li>
          <li>`li` — list item</li>
          <li>`t` — table</li>
          <li>`it` — inline table</li>
          <li>`tc` — table cell</li>
          <li>`tr` — table row</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`cl`</td>
      <td>Clear</td>
      <td>
        <ul>
          <li>`n` — none</li>
          <li>`l` — left</li>
          <li>`r` — right</li>
          <li>`b` — both</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`fld`</td>
      <td>Flex direction</td>
      <td>
        <ul>
          <li>`r` — row</li>
          <li>`c` — column</li>
          <li>`rr` — row-reverse</li>
          <li>`cr` — column-reverse</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`flw`</td>
      <td>Flex wrap</td>
      <td>
        <ul>
          <li>`w` — wrap</li>
          <li>`n` — nowrap</li>
          <li>`wr` — wrap-reverse</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`ac`</td>
      <td>Align content</td>
      <td>
        <ul>
          <li>`c` — center</li>
          <li>`s` — stretch</li>
          <li>`bl` — baseline</li>
          <li>`fs` — flex-start</li>
          <li>`fe` — flex-end</li>
          <li>`sb` — space-between</li>
          <li>`sa` — space-around</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`ai`</td>
      <td>Align items</td>
      <td>
        <ul>
          <li>`n` — normal</li>
          <li>`c` — center</li>
          <li>`s` — stretch</li>
          <li>`bl` — baseline</li>
          <li>`fs` — flex-start</li>
          <li>`fe` — flex-end</li>
          <li>`ss` — self-start</li>
          <li>`se` — self-end</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`as`</td>
      <td>Align self</td>
      <td>
        <ul>
          <li>`a` — auto</li>
          <li>`n` — normal</li>
          <li>`c` — center</li>
          <li>`s` — stretch</li>
          <li>`bl` — baseline</li>
          <li>`fs` — flex-start</li>
          <li>`fe` — flex-end</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`jc`</td>
      <td>Justify content</td>
      <td>
        <ul>
          <li>`c` — center</li>
          <li>`fs` — flex-start</li>
          <li>`fe` — flex-end</li>
          <li>`sb` — space-between</li>
          <li>`sa` — space-around</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`va`</td>
      <td>Vertical align</td>
      <td>
        <ul>
          <li>`t` — top</li>
          <li>`m` — middle</li>
          <li>`b` — bottom</li>
          <li>`bl` — baseline</li>
          <li>`tt` — text-top</li>
          <li>`tb` — text-bottom</li>
          <li>`sub` — sub</li>
          <li>`sup` — super</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
