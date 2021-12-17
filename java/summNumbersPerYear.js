let years=[]
let TargetYears=[]
let getYears=function(start,finished,target){
    for (let i=start;i<=finished;i++){
        years.push(String(i))
    }
    for(let j=0;j<years.length;j++){
        if(Number(years[j][0])+Number(years[j][1])+Number(years[j][2])+Number(years[j][3])===target){
            TargetYears.push(Number(years[j]))}
    }
    return TargetYears}
getYears(1955,1980,5)
console.log(years)
console.log(Number(years[0][0])+Number(years[0][1])+Number(years[0][2])+Number(years[0][3]))
