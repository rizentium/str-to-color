import {padEnd} from "../modules/padding";

export function rgb(str:string) {
  let length = 0;
  str.split('').forEach(d => {
    length += d.charCodeAt(0);
  });
  let hex = padEnd(length.toString(16), 'f', 6);
  return '#'+hex;
}
