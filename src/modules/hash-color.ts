export function hashColor(str:string) {
  const length = str.length/3;
  const r = str.slice(0,length);
  const g = str.slice(length*2, length*2);
  const b = str.slice(length*3, length*3);

  let rHex = 0;
  let gHex = 0;
  let bHex = 0;

  r.split('').forEach(d => {
    rHex += d.charCodeAt(0);
  });
  g.split('').forEach(d => {
    gHex += d.charCodeAt(0);
  });
  b.split('').forEach(d => {
    bHex += d.charCodeAt(0);
  });

  return `${rHex}${gHex}${bHex}`;
}
