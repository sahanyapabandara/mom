> The shadow effect is used to add depth to an element and highlight foreground objects from the background.

Shadows indicate the direction of light and how far away an element is to a light source. Key lights create sharper shadows while ambient lights create softer, more subtle shadows.

## Shadow types

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Usage</th>
      <th>Properties</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    	<td>S</td>
      <td>Card, card style accordion</td>
      <td>0px 0px 2px rgba(0, 0, 0, 0.1)<br/>0px 1px 4px rgba(0, 0, 0, 0.2)</td>
      <td><div style="width: 48px; height:48px;" class="bsh:s"></div></td>
    </tr>
    <tr>
    	<td>M</td>
      <td>Button hover state, dropdown list, date picker, toast message</td>
      <td>0px 6px 10px rgba(0, 0, 0, 0.14)<br/>0px 1px 18px rgba(0, 0, 0, 0.12)</td>
      <td><div style="width: 48px; height:48px;" class="bsh:m"></div></td>
    </tr>
    <tr>
    	<td>L</td>
      <td></td>
      <td>0px 12px 17px rgba(0, 0, 0, 0.14)<br/>0px 5px 22px rgba(0, 0, 0, 0.12)</td>
      <td><div style="width: 48px; height:48px;" class="bsh:l"></div></td>
    </tr>
    <tr>
    	<td>XL</td>
      <td>Modal</td>
      <td>0px 11px 15px rgba(0, 0, 0, 0.2)<br/>0px 24px 38px rgba(0, 0, 0, 0.14)<br/>0px 9px 46px rgba(0, 0, 0, 0.12)</td>
      <td><div style="width: 48px; height:48px;" class="bsh:xl"></div></td>
    </tr>
    <tr>
      <td>Header</td>
      <td>Page header only</td>
      <td>0px 2px 2px rgba(0, 0, 0, 0.2)<br/>0px 0px 2px rgba(0, 0, 0, 0.1)</td>
      <td><div style="width: 48px; height:48px;" class="bsh:header"></div></td>
    </tr>
  </tbody>
</table>

## How shadow is used

- Shadows indicate differences in elevation between elements. Larger shadows indicate higher elevations and vice versa.
- They allow surfaces to move in front of, and behind, other surfaces, for example, content scrolling behind a sticky menu.
- They show that an item has been picked. For example, a Primary button has shadow-m when it is hovered over.

## Design considerations

- **Use soft shadows.** To do this, lower the opacity and set a higher level of blur. For example, the shadow of a card has less than 20% opacity. A more subtle shadow creates a more clean and modern feel.
- **Combine key and ambient shadows to convey depth.**
- Use shadows **consistently**, including the blurs, colours and opacity.
