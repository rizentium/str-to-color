
export default function rgb(str:string) {
  let length = 0;
  str.split('').forEach(d => {
    length += d.charCodeAt(0);
  });

  let hex = length.toString(16);

  if (hex.length < 6) {
    let pad = 'ffffff'.slice(0, 6-hex.length);
    hex += pad;
  }

  return '#'+hex;
}
