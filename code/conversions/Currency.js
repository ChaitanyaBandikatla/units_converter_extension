//Our currency class handles all currency related conversions
class Currency {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    //api call that fetches the conversion rate for a given query q, where q is the stock name. For eg: USD
    getData(q) {
        return fetch('https://api.exchangeratesapi.io/latest?base=' + q)
            .then(response => response.json())
            .then(data => data.rates)
    }

    //Our standard conversion is USD, so we try to convert all selection to USD
    async getStandardConversion(quantity) {
        let rate;
        switch (this.unit.toLowerCase()) {
            case "usd":
                return quantity;
            case "eur":
                rate = await this.getData('EUR').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            case "gbp":
                rate = await this.getData('GBP').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            case "inr":
                rate = await this.getData('INR').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            case "jpy":
                rate = await this.getData('JPY').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            case "cad":
                rate = await this.getData('CAD').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            case "aud":
                rate = await this.getData('AUD').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            case "chf":
                rate = await this.getData('CHF').then(function (d) {
                    return d['USD']
                })
                return rate * quantity
            default:
                return null

        }
    }

    /*From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10*/
    async getAllConversions(quantity, precision) {
        let res = ""
        let factor = 1
        for (let i = 0; i < this.arr.length; i++) {
            switch (this.arr[i].toLowerCase()) {
                case "usd":
                    res += ",$ " + getPreciseNumber(quantity, precision);
                    break
                case "eur":
                    factor = await this.getData('USD').then(function (d) {
                        return d['EUR']
                    })
                    res += ",€ " + getPreciseNumber(factor * quantity, precision)
                    break
                case "gbp":
                    factor = await this.getData('USD').then(function (d) {
                        return d['GBP']
                    })
                    res += ",£ " + getPreciseNumber(factor * quantity, precision)
                    break
                case "inr":
                    factor = await this.getData('USD').then(function (d) {
                        return d['INR']
                    })
                    res += ",₹ " + getPreciseNumber(factor * quantity, precision)
                    break
                case "jpy":
                    factor = await this.getData('USD').then(function (d) {
                        return d['JPY']
                    })
                    res += ",¥ " + getPreciseNumber(factor * quantity, precision)
                    break
                case "cad":
                    factor = await this.getData('USD').then(function (d) {
                        return d['CAD']
                    })
                    res += ",C$ " + getPreciseNumber(factor * quantity, precision)
                    break
                case "aud":
                    factor = await this.getData('USD').then(function (d) {
                        return d['AUD']
                    })
                    res += ",AU$ " + getPreciseNumber(factor * quantity, precision)
                    break
                case "chf":
                    factor = await this.getData('USD').then(function (d) {
                        return d['CHF']
                    })
                    res += ",Fr " + getPreciseNumber(factor * quantity, precision)
                    break
            }
        }
        return res
    }


}

module.exports = Currency;