import chalk from 'chalk';

type ForegroundColor =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'grey'
  | 'blackBright'
  | 'redBright'
  | 'greenBright'
  | 'yellowBright'
  | 'blueBright'
  | 'magentaBright'
  | 'cyanBright'
  | 'whiteBright';

type Modifiers =
  | 'reset'
  | 'bold'
  | 'dim'
  | 'italic'
  | 'underline'
  | 'inverse'
  | 'hidden'
  | 'strikethrough'
  | 'visible';

type BackgroundColor =
	| 'bgBlack'
	| 'bgRed'
	| 'bgGreen'
	| 'bgYellow'
	| 'bgBlue'
	| 'bgMagenta'
	| 'bgCyan'
	| 'bgWhite'
	| 'bgGray'
	| 'bgGrey'
	| 'bgBlackBright'
	| 'bgRedBright'
	| 'bgGreenBright'
	| 'bgYellowBright'
	| 'bgBlueBright'
	| 'bgMagentaBright'
	| 'bgCyanBright'
	| 'bgWhiteBright';

type Tprint = (
  str: string,
  opt?: {
    color?: ForegroundColor;
    bgColor?: BackgroundColor;
    style?: Modifiers;
  }
) => void;

const print: Tprint = (str, opt) => {
  const style = opt && opt.style || '';
  const color = (opt && opt.color as ForegroundColor) || 'white';
  const bgColor = (opt && opt.bgColor as BackgroundColor) || 'bgBlack';
  if (style) {
    console.log(chalk[style][color][bgColor]('\n', str));
  } else {
    console.log(chalk[color][bgColor]('\n', str));
  }
};

export default print;
