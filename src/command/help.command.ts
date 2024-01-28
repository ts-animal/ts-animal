export function help() {
  const msg = `
dance {animal} {option}     show animal ascii animation.
    --speed=[0~2000]        frame speed.
    --repeat=[1~...]        repeat times. default is infinite.
    --color=[random, ...]   color. default is white.
list                        show current animal list.
help                        show current this helping message. 
version                     show ts-animal version.
colors                      show colors
  `;

  console.log(msg);
}
