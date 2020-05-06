import sub from './sub';
console.log('bundle test');
sub('error');
const test = () => {
  console.log('init')
}
document.querySelector("body").innerText= "webpack reload";
