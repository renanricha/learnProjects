import dados from "./data.js"


// Functions for filter
let now = new Date('2024-12-29 23:59:59') //'2024-12-29 23:59:59'

function meteorRainTDY (dataBase) {
    let startDate = new Date(now.getFullYear() +"/"+ dataBase.inicio)
    let endDate = new Date (now.getFullYear() +"/"+ dataBase.fim)
    
    if (startDate > endDate) {
        endDate = new Date (startDate.getFullYear() + 1 +"/"+ dataBase.fim)
    }
    let teste = (now >= startDate && now <= endDate)
    return teste
}

function meteorRain2M (dataBase) {
    let startDate = new Date(now.getFullYear() +"/"+ dataBase.inicio)
    let endDate = new Date (now.getFullYear() +"/"+ dataBase.fim)

    let thisMonth = now.getMonth()
    let startMonth = startDate.getMonth()

    if (thisMonth > startMonth) {
        startDate = new Date (startDate.getFullYear() + 1 +"/"+ dataBase.inicio)
    }

    let monthPlus2 = thisMonth + 2

    if (monthPlus2 > 11) {
        monthPlus2 -= 12
    }

    let teste = (now < startDate && startMonth <= monthPlus2 && thisMonth <= startMonth)
    return teste
}

const rainTDY = dados.filter(meteorRainTDY)

const rain2M = dados.filter(meteorRain2M)

// Functions to format

function rainIntesityFinder (meteorRain) {
    let stWord = meteorRain.intensidade.split(' ')
    switch (stWord[0]){
        case 'Fraca':
            return '1 (Weak)'
            break
        case 'Média':
            return '2 (Medium)'
            break
        case 'Forte':
            return '3 (Strong)'
            break
        case 'Irregular':
            return '(Irregular)'
            break
        default:
            return '1 (Weak)'
    }
}

function hemisphereFinder(meteorRain) {
    if (meteorRain.declinacao >= 0) {
        return 'North'
    } else {
        return 'South'
    }
}

export {rainTDY, rain2M, rainIntesityFinder, hemisphereFinder}