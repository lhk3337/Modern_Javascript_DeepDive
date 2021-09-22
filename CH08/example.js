var string = "Hello World.";
var search = "l";
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}
console.log(count); // 3

foo: {
  console.log(1);
  break foo;
  console.log(2);
}
console.log("Done!");

outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log("Done!");




outs: for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
      if (i + j === 6) break outs;
        console.log(`[${i}, ${j}]`);
      
        
    }
  }
  