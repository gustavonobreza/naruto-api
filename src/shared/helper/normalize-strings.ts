export function normalize(s: string) {
  let r = s.toLowerCase();
  r = r.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return r;
}

// const i = 'Jūgo',
//   j = 'Mei Terumī',
//   l = 'Hiashi Hyūga';

// console.log(normalize(i), normalize(j), normalize(l));
