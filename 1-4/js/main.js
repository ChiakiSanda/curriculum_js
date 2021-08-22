/*
理解度チェック
JavaScript→1-4というフォルダの中に作成してください。
出力の結果はconsole.logで表示してください。

3の倍数のとき、 Fizz! と出力します。
5の倍数のとき、 Buzz! と出力します。
3の倍数かつ5の倍数のとき、 FizzBuzz!! と出力します。(15の倍数、と考えるのはナシです。)
3の倍数でも、5の倍数でもない場合は、その数を出力します。
それを1〜100まで実施してください。
*/

for(let num = 1; num <=100; num++){
    if(num % 3 === 0) {
        console.log('Fizz!')
    }
    else if(num % 5 === 0) {
        console.log('Buzz!')
    }
    else {
        console.log(num);
    }
}