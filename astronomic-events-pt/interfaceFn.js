import {rainTDY, rain2M, rainIntesityFinder, hemisphereFinder} from "./logicFn.js"

function printRain (rain) {
    console.log(rain.nome.padEnd(30," ") + '- ' + rainIntesityFinder(rain).padEnd(13," ") + '- ' + hemisphereFinder(rain).padEnd(13," ") + '- ' + rain.inicio + ' to ' + rain.fim)
}

function printRains() {
    
    console.log('\nFOR TODAY:')
    if (rainTDY == 0) {
        console.log('No meteor rain for today :(')
    } else {
        console.log(`WE FOUND ${rainTDY.length} RAIN${(rainTDY.length == 1 ? '' : 'S')} TO SEE TODAY!`)
        console.log('METEOR RAIN NAME'.padEnd(30," ") + '- INTENSITY'.padEnd(15," ") + '- HEMISPHERE'.padEnd(15," ") + '- PERIOD'.padEnd(15," "))
        rainTDY.forEach(printRain)
    }
    
    console.log('\nIN TWO MONTHS:')
    if (rain2M == 0) {
        console.log('No meteor rain to see in the next 2 months :(')
    } else {
        console.log(`DON'T MISS THE NEXT ${rain2M.length} RAIN${(rain2M.length == 1 ? '' : 'S')}!`)
        console.log('METEOR RAIN NAME'.padEnd(30," ") + '- INTENSITY'.padEnd(15," ") + '- HEMISPHERE'.padEnd(15," ") + '- PERIOD'.padEnd(15," "))
        rain2M.forEach(printRain)
    }
}

export default printRains