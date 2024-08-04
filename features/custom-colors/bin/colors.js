export default async function ({ feature, console }) {
    class Style {
        rootElm = document.querySelector(":root");
        constructor(_array) {
            for(let i = 0; i < _array.length; i++) {
                this.regRoots[_array[i]] = {
                    h: this.rootValueElm(_array[i], "h"),
                    s: this.rootValueElm(_array[i], "s"),
                    l: this.rootValueElm(_array[i], "l")
                }  
            }
        }
        regRoots = {
        }
        rootElmUpdate() {
            for(let i in this.regRoots) {
                this.rootElm.style.setProperty(`--STE-${i}-h`, `${this.regRoots[i].h}`);
                this.rootElm.style.setProperty(`--STE-${i}-s`, `${this.regRoots[i].s}%`);
                this.rootElm.style.setProperty(`--STE-${i}-l`, `${this.regRoots[i].l}%`);
            }
        }
        // get root() {
        //     return this.#root
        // }
        // set root(_value) {
        //     this.#root = _value;
        //     document.documentElement.style.setProperty("--ste-primary", `hsl(${this.root.primary.h}, ${this.root.primary.s}%, ${this.root.primary.l})%`);
        // }
        rootValueElm(_name, _part) {
            return getComputedStyle(this.rootElm).getPropertyValue(`--STE-${_name}-${_part}`);
        }
        changeRoot(_name, _part, _value) {
            if(!this.regRoots[_name]) this.regRoots[_name] = {};
            this.regRoots[_name][_part] = _value;
            this.rootElm.style.setProperty(`--STE-${_name}-h`, `${this.regRoots[_name].h}`);
            this.rootElm.style.setProperty(`--STE-${_name}-s`, `${this.regRoots[_name].s}`);
            this.rootElm.style.setProperty(`--STE-${_name}-l`, `${this.regRoots[_name].l}`);
        }
    }
    let style = new Style(["text", "gray", "primary", "green", "orange", "background"])
    globalThis.style = style
    
    style.regRoots = {
        text: {
            h: 0,
            s: 0,
            l: 100
        },
        gray: {
            h: 0,
            s: 0,
            l: 10
        },
        primary: {
            h: 16,
            s: 100,
            l: 50
        },
        green: {
            h: 30,
            s: 100,
            l: 65
        },
        orange: {
            h: 38,
            s: 100,
            l: 55
        },
        background: {
            h: 0,
            s: 0,
            l: 10
        }
    }

    style.rootElmUpdate()
}