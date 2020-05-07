import sub from './sub';
import test2 from './test2.tsx';
console.log('bundle test');
sub('error');
const test = async () => {
  console.log('init');
  await asyncfn();
};
async function asyncfn() {
  console.log('async desu');
}

test();
test2('aaa');
document.querySelector('body').innerText = 'webpack reload';
