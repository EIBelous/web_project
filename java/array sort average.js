
/* Техническое задание

Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/
let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;


for (let i = 0; i <= attempts.length - 2; i++) {
    let minValue = attempts[i];

    for (let j = i + 1; j <= attempts.length - 1; j++) {
        if (attempts[j] < minValue) {
            minValue = attempts[j];
            let swap = attempts[i];
            attempts[i] = minValue;
            attempts[j] = swap;
        }
    }
}
console.log(attempts)
averageBest=(attempts[attempts.length-1]+attempts[attempts.length-2]+attempts[attempts.length-3])/3
console.log(averageBest)
if (averageBest>qualificationDistance){
    qualified=true}