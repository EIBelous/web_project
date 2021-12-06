let getStatistics = function (players) {
    let totalGoals=0
    for (let i=0;i<players.length;i++){
        totalGoals+=players[i].goals
        let coefficient=players[i].goals*2+players[i].passes
        players[i].coefficient=coefficient;


    }
    console.log(totalGoals)
    for (let i=0;i<players.length;i++){
        players[i].percent=Math.round(players[i].goals*100/totalGoals)}
    return players
}