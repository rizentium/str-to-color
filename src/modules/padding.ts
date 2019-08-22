export function padEnd(str:string, paddingCharacter:string, long:number) {
  for (let x = 0;x < long-str.length+2;x++) {
    str += paddingCharacter
  }
  return str
}
