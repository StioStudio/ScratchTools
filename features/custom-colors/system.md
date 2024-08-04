ALL VALUES will be in hsl format. This makes it easy to change later and add calculations.

How to make a custom color variable <br>
It will need the name: `--STE-<name>` <br>
Always remember --STE- in the start so the vars does not conflict with others <br>
Then you add h, s and l properties. (hue, saturation, lightness) <br>
```css
/* --STE-primary */
--STE-primary-h: 210;
--STE-primary-s: 100%;
--STE-primary-l: 80%;
/* It is always nice to have a base version too for simplicity */
---STE-primary: hsl(var(--STE-primary-h), var(--STE-primary-s), var(--STE-primary-l));
```

Most vars will be `--STE-hex-thehexff` as they are not named. They will for the most part only be the same as the primaries, but having overlays to set them to the right colors. They will be vars so they can easily be changed on the fly.