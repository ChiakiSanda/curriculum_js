/*
問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
*/

let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven() {
    for(let i=0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            let num = numbers[i];
            console.log(num + 'は偶数です');
        }
        else {
            continue;
        }
    }
}

isEven(numbers);

/*
問2:以下の要件を満たすように実装してください。

【要件】

・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する

・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
*/

class Car {
    constructor(gas, num) {
        this.gas = gas;
        this.num = num;
    }

    
    getNumGas(gas, num) {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`);
    }
}

let car1 = new Car(35, 3333);
car1.getNumGas();

