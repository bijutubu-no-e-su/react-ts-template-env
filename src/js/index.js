import sub from './sub';
console.log('bundle test');
sub('error');
const test = async () => {
  console.log('init')
  await asyncfn();
}
async function asyncfn() {
  console.log('async desu');
}

test();
document.querySelector("body").innerText= "webpack reload";
