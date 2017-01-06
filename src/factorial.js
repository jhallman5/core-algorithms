//
// function factorial(x) {
//        if(x == 0) {
//            return 1;
//        }
//        if(x < 0 ) {
//            return undefined;
//        }
//        for(var i = x; --i; ) {
//            x *= i;
//        }
//        return x;
// }


export default function factorial(x) {
  if(x == 0) {
    return 1;
  }
  if(x < 0 ) {
    return undefined;
  } else
    return x * factorial(x-1)
}
