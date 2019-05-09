<p align="center">
  <img src="https://user-images.githubusercontent.com/1064036/57315359-44a52100-70a8-11e9-8aa4-2b4bbe1a107d.png" alt="Gradient Palette" width="250" />
  <br/><br />
  Generate gradient palettes with zero dependencies<br /><br />
  <a href="https://badge.fury.io/js/gradient-palette"><img src="https://badge.fury.io/js/gradient-palette.svg" alt="npm version" height="18"></a>
</p>


## Installation

**yarn**
```
yarn add gradient-palette
```

**npm**
```
npm install garadient-palette --save
```

## Usage

### importing package
```javascript
import GradientPalette from "gradient-palette";
```

### Generating a palette
`GradientPalette.generate(startHex, endHex, numSteps)`

```javascript
GradientPalette.generate("#D7DE63", "#226C45", 8);

// returns ["#d7de63", "#bdce5f", "#a3bd5a", "#89ad56", "#709d52", "#568d4e", "#3c7c49", "#226c45"]
```
![sample_palette](https://user-images.githubusercontent.com/1064036/57316244-2dffc980-70aa-11e9-999d-87e0a08435e3.png)
