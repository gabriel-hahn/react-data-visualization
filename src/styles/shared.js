const theme = 'dark';
export const lightTheme = theme === 'light';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const colorPrimary = lightTheme ? 'white' : '#061a44';
export const colorSecondary = lightTheme ? 'white' : '#010e2c';
export const colorTertiary = lightTheme ? '#09f010' : '#42ff3a';

export const lightBlueBackground = `background-color: ${colorPrimary}`;
export const backgroundColorDark = `background-color: ${colorSecondary};`;
export const greenBackgroundColor = `background-color: ${colorTertiary};`;

export const fontColorGreen = 'color: #03A9F4';
export const fontColorWhite = 'color: white';
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`;
export const greenBoxShadow = 'box-shadow: 0px 0px 4px 2px #5fff17';
export const redBoxShadow = 'box-shadow: 0px 0px 2px 2px #e41111';

export const fontSizeBig = 'font-size: 2em';
export const fontSizeMedium = 'font-size: 1.5em;';
export const fontSizeNormal = 'font-size: 1.0em';
export const fontSizeSmall = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';
