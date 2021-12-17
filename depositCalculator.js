var calculateDeposit = function (deposit, percent, period, isCapitalized) {
    var profit = deposit / 100 * percent / 12 * period;
    var result = deposit + profit;
    if (isCapitalized) {
        result = deposit;
        for (var i = 0; i < period; i++) {
            profit = result / 100 * percent / 12;
            result += profit;
        }
    }
    return Math.floor(result);
};
getProfitableDeposit=function(deposit,period,percentEazy,percentHard){
    let profitHard=calculateDeposit(deposit,percentHard,period,true)
    console.log('hardProfirt '+profitHard)
    let profitEasy=calculateDeposit(deposit,percentEazy,period,false)
    console.log('eazyProfit '+profitEasy)
    if (profitEasy>profitHard){
        return 'Выбирай обычный вклад. Получишь ' +profitEasy }else{
        return 'Выбирай капитализацию. Получишь ' + profitHard}}
getProfitableDeposit(100000,12,12,12,)