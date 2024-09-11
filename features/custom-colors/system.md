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


Create new color variables using a css file. <br>
Example css:
```css
.hsl {
    color:
    hsl(0, 0%, 0%) = #000
    hsla(0, 0%, 0%, 0) = rgba(0, 0, 0, 0)
    hsla(0, 0%, 0%, 0.2) = rgba(0, 0, 0, 0.2)
    hsla(0, 0%, 0%, 0.25) = rgba(0, 0, 0, 0.25)
    hsla(0, 0%, 0%, 0.15) = rgba(0, 0, 0, 0.15)
    hsla(0, 0%, 0%, 0.1) = rgba(0, 0, 0, 0.1)
    hsl(0, 0%, 70%) = #b3b3b3
    hsl(0, 0%, 85%) = #d9d9d9
    hsl(0, 0%, 95%) = #f2f2f2
    hsl(0, 0%, 98%) = #fafafa
    hsl(0, 0%, 99%) = #fcfcfc
    hsl(0, 0%, 100%) = #fff
    hsla(0, 0%, 100%, 0.75) = rgba(255, 255, 255, 0.75)
    hsla(0, 0%, 100%, 0.15) = rgba(255, 255, 255, 0.15)
    
    hsl(20, 100%, 40%) = #c40
    hsla(35, 90%, 55%, 0.1) = rgba(244, 157, 37, 0.1)
    hsl(38, 100%, 55%) = #ffab1a
    hsl(60, 100%, 50%) = #ff0
    hsl(144, 45%, 26%) = #24603c
    hsl(145, 45%, 36%) = #328554
    hsl(163, 86%, 40%) = #0ebd8c
    hsla(215, 100%, 65%, 0.15) = rgba(77, 151, 255, 0.15)
    hsla(215, 100%, 65%, 0.1) = rgba(77, 151, 255, 0.1)
    hsla(215, 100%, 65%, 0.25) = rgba(77, 151, 255, 0.25)
    hsla(215, 100%, 65%, 0.7) = rgba(77, 151, 255, 0.7)
    hsl(215, 100%, 65%) = #4d97ff
    hsl(226, 15%, 40%) = #575e75
    hsl(260, 60%, 60%) = #855cd6
    hsl(260, 100%, 70%) = #96f
    hsl(300, 53%, 60%) = #cf63cf
    ;
}
```

You can make them change to try custom color format using `style.CSSSyntax(css_file)`. Returns the object.


The syntax will work like this: <br>
Takes away:
```css
.hsl {
    color:
```
and
```css
    ;
}
```

Now stuff can be split up by "\n    " (enter + tab). They will then be split by " = " (space + equals + space). This will make something like this:
```json
[
    ["hsl(0, 0%, 0%)", "#000"]
    ["hsla(0, 0%, 0%, 0)", "rgba(0, 0, 0, 0)"]
    ["hsla(0, 0%, 0%, 0.2)", "rgba(0, 0, 0, 0.2)"]
    ["hsla(0, 0%, 0%, 0.25"), "rgba(0, 0, 0, 0.25)"]
    ["hsla(0, 0%, 0%, 0.15)", "rgba(0, 0, 0, 0.15)"]
    ["hsla(0, 0%, 0%, 0.1)", "rgba(0, 0, 0, 0.1)"]
    ["hsl(0, 0%, 70%)", "#b3b3b"]
    // ...
]
```

How the CSSSyntax function works:
```sudo
// type
if obj[input][1].indexOf("#) == 0 then hex
if obj[input][1].indexOf("hsla") == 0 then hsla
if obj[input][1].indexOf("hsl") == 0 then hsl
if obj[input][1].indexOf("rgba") == 0 then rgba
if obj[input][1].indexOf("rgb") == 0 then rgb
if obj[input][1].indexOf("hwb") == 0 then hwb
return type


// name
rem_a = get_insides(input)
rem = ""
loop i in rem_a
    rem += "-" + i
return type(input) + "-" + rem


// hsl_or_hsla
if obj[input][0] == "hsl" then hsl
if obj[input][0] == "hsla" then hsla
return type


// get_insides
get string between "(" and ")"
split string on ","
return array


// Main
output = {}
loop i in obj
    rem = get_insides(i[0])
    output[name(i[1])] = {
        h: rem[0],
        s: rem[1],
        l: rem[2],
        a: rem?.[3],
    }

```

