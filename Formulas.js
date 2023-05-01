export class Data {
    constructor() {
        this.units = {
            bits: {
                toBits: (value) => value,
                toBytes: (value) => value / 8,
                toKilobits: (value) => value / 1000,
                toKilobytes: (value) => value / 8000,
                toMegabytes: (value) => value / 8e+6,
                toGigabits: (value) => value / 1e+9,
                toGigabytes: (value) => value / 8e+9,
                toTerabytes: (value) => value / 8e+12,
                toPetabytes: (value) => value / 8e+15,
            },
            bytes: {
                toBits: (value) => value * 8,
                toBytes: (value) => value,
                toKilobits: (value) => value / 125,
                toKilobytes: (value) => value / 1024,
                toMegabytes: (value) => value / 1.049e+6,
                toGigabits: (value) => value / 1.074e+9,
                toGigabytes: (value) => value / 1.074e+9,
                toTerabytes: (value) => value / 1.1e+12,
                toPetabytes: (value) => value / 1.126e+15,
            },
            kilobits: {
                toBits: (value) => value * 1000,
                toBytes: (value) => value * 125,
                toKilobits: (value) => value,
                toKilobytes: (value) => value / 8,
                toMegabytes: (value) => value / 8000,
                toGigabits: (value) => value / 1e+6,
                toGigabytes: (value) => value / 8e+6,
                toTerabytes: (value) => value / 8e+9,
                toPetabytes: (value) => value / 8e+12,
            },
            kilobytes: {
                toBits: (value) => value * 8000,
                toBytes: (value) => value * 1024,
                toKilobits: (value) => value * 8,
                toKilobytes: (value) => value,
                toMegabytes: (value) => value / 1024,
                toGigabits: (value) => value / 131072,
                toGigabytes: (value) => value / 1048576,
                toTerabytes: (value) => value / 1.074e+9,
                toPetabytes: (value) => value / 1.1e+12,
            },
            megabytes: {
                toBits: (value) => value * 8e+6,
                toBytes: (value) => value * 1.049e+6,
                toKilobits: (value) => value * 8000,
                toKilobytes: (value) => value * 1024,
                toMegabytes: (value) => value,
                toGigabits: (value) => value / 131072,
                toGigabytes: (value) => value / 1048576,
                toTerabytes: (value) => value / 1.074e+9,
                toPetabytes: (value) => value / 1.1e+12,
            },
            gigabits: {
                toBits: (value) => value * 1e+9,
                toBytes: (value) => value * 1.25e+8,
                toKilobits: (value) => value * 1e+6,
                toKilobytes: (value) => value * 1.25e+5,
                toMegabytes: (value) => value * 125000,
                toGigabits: (value) => value,
                toGigabytes: (value) => value / 8,
                toTerabytes: (value) => value / 8000,
                toPetabytes: (value) => value / 8e+6,
            },
            gigabytes: {
                toBits: (value) => value * 8e+9,
                toBytes: (value) => value * 1e+9,
                toKilobits: (value) => value * 8e+6,
                toKilobytes: (value) => value * 1e+6,
                toMegabytes: (value) => value * 1000,
                toGigabits: (value) => value * 8,
                toGigabytes: (value) => value,
                toTerabytes: (value) => value / 1000,
                toPetabytes: (value) => value / 1e+6,
            },
            terabytes: {
                toBits: (value) => value * 8e+12,
                toBytes: (value) => value * 1.1e+12,
                toKilobits: (value) => value * 8e+9,
                toKilobytes: (value) => value * 1.074e+9,
                toMegabytes: (value) => value * 1.1e+6,
                toGigabits: (value) => value * 8000,
                toGigabytes: (value) => value * 1000,
                toTerabytes: (value) => value,
                toPetabytes: (value) => value / 1000,
            },
            petabytes: {
                toBits: (value) => value * 8e+15,
                toBytes: (value) => value * 1.126e+15,
                toKilobits: (value) => value * 8e+12,
                toKilobytes: (value) => value * 1.1e+12,
                toMegabytes: (value) => value * 1.126e+9,
                toGigabits: (value) => value * 8e+9,
                toGigabytes: (value) => value * 1e+9,
                toTerabytes: (value) => value * 1000,
                toPetabytes: (value) => value,
            },
        };
    }

    convert(value, fromUnit, toUnit) {
        if (!this.units.hasOwnProperty(fromUnit) || !this.units.hasOwnProperty(toUnit)) {
            throw new Error('Invalid unit.');
        }

        if (value < 0) {
            throw new Error('Value must be non-negative.');
        }

        if (fromUnit === toUnit) {
            return value;
        }
        const conversionFunction = this.units[fromUnit][`to${toUnit.charAt(0).toUpperCase()}${toUnit.slice(1)}`];

        if (!conversionFunction) {
            throw new Error('Invalid conversion.');
        }

        return conversionFunction(value);
    }
}

export class Time {
    constructor() {
        this.units = {
            microseconds: {
                toMicroseconds: (value) => value,
                toMilliseconds: (value) => value / 1000,
                toSeconds: (value) => value / 1000000,
                toMinutes: (value) => value / 60000000,
                toHours: (value) => value / 3600000000,
                toDays: (value) => value / 86400000000,
                toWeeks: (value) => value / 604800000000,
                toYears: (value) => value / 31536000000000,
                toDecades: (value) => value / 315360000000000,
                toCenturies: (value) => value / 3153600000000000,
            },
            milliseconds: {
                toMicroseconds: (value) => value * 1000,
                toMilliseconds: (value) => value,
                toSeconds: (value) => value / 1000,
                toMinutes: (value) => value / 60000,
                toHours: (value) => value / 3600000,
                toDays: (value) => value / 86400000,
                toWeeks: (value) => value / 604800000,
                toYears: (value) => value / 31536000000,
                toDecades: (value) => value / 315360000000,
                toCenturies: (value) => value / 3153600000000,
            },
            seconds: {
                toMicroseconds: (value) => value * 1000000,
                toMilliseconds: (value) => value * 1000,
                toSeconds: (value) => value,
                toMinutes: (value) => value / 60,
                toHours: (value) => value / 3600,
                toDays: (value) => value / 86400,
                toWeeks: (value) => value / 604800,
                toYears: (value) => value / 31536000,
                toDecades: (value) => value / 315360000,
                toCenturies: (value) => value / 3153600000,
            },
            minutes: {
                toMicroseconds: (value) => value * 60000000,
                toMilliseconds: (value) => value * 60000,
                toSeconds: (value) => value * 60,
                toMinutes: (value) => value,
                toHours: (value) => value / 60,
                toDays: (value) => value / 1440,
                toWeeks: (value) => value / 10080,
                toYears: (value) => value / 525600,
                toDecades: (value) => value / 5256000,
                toCenturies: (value) => value / 52560000,
            },
            hours: {
                toMicroseconds: (value) => value * 3600000000,
                toMilliseconds: (value) => value * 3600000,
                toSeconds: (value) => value * 3600,
                toMinutes: (value) => value * 60,
                toHours: (value) => value,
                toDays: (value) => value / 24,
                toWeeks: (value) => value / 168,
                toYears: (value) => value / 8760,
                toDecades: (value) => value / 87600,
                toCenturies: (value) => value / 876000,
            },
            days: {
                toMicroseconds: (value) => value * 86400000000,
                toMilliseconds: (value) => value * 86400000,
                toSeconds: (value) => value * 86400,
                toMinutes: (value) => value * 1440,
                toHours: (value) => value * 24,
                toDays: (value) => value,
                toWeeks: (value) => value / 7,
                toYears: (value) => value / 365,
                toDecades: (value) => value / 3650,
                toCenturies: (value) => value / 36500,
            },
            weeks: {
                toMicroseconds: (value) => value * 604800000000,
                toMilliseconds: (value) => value * 604800000,
                toSeconds: (value) => value * 604800,
                toMinutes: (value) => value * 10080,
                toHours: (value) => value * 168,
                toDays: (value) => value * 7,
                toWeeks: (value) => value,
                toYears: (value) => value / 52.143,
                toDecades: (value) => value / 521.429,
                toCenturies: (value) => value / 5214.286,
            },
            months: {
                toMicroseconds: (value) => value * 2.628e+15,
                toMilliseconds: (value) => value * 2.628e+12,
                toSeconds: (value) => value * 2.628e+9,
                toMinutes: (value) => value * 4.381e+7,
                toHours: (value) => value * 730.5,
                toDays: (value) => value * 30.4375,
                toWeeks: (value) => value * 4.348,
                toYears: (value) => value / 12,
                toDecades: (value) => value / 120,
                toCenturies: (value) => value / 1200,
            },
            years: {
                toMicroseconds: (value) => value * 31536000000000,
                toMilliseconds: (value) => value * 31536000000,
                toSeconds: (value) => value * 31536000,
                toMinutes: (value) => value * 525600,
                toHours: (value) => value * 8760,
                toDays: (value) => value * 365,
                toWeeks: (value) => value * 52.143,
                toYears: (value) => value,
                toDecades: (value) => value / 10,
                toCenturies: (value) => value / 100,
            },
            decades: {
                toMicroseconds: (value) => value * 315360000000000,
                toMilliseconds: (value) => value * 315360000000,
                toSeconds: (value) => value * 315360000,
                toMinutes: (value) => value * 5256000,
                toHours: (value) => value * 87600,
                toDays: (value) => value * 3650,
                toWeeks: (value) => value * 521.429,
                toYears: (value) => value * 10,
                toDecades: (value) => value,
                toCenturies: (value) => value / 10,
            },
            centuries: {
                toMicroseconds: (value) => value * 3153600000000000,
                toMilliseconds: (value) => value * 3153600000000,
                toSeconds: (value) => value * 3153600000,
                toMinutes: (value) => value * 52560000,
                toHours: (value) => value * 876000,
                toDays: (value) => value * 36500,
                toWeeks: (value) => value * 5214.286,
                toYears: (value) => value * 100,
                toDecades: (value) => value * 10,
                toCenturies: (value) => value,
            },
        };
    }

    convert(value, fromUnit, toUnit) {
        if (!this.units.hasOwnProperty(fromUnit) || !this.units.hasOwnProperty(toUnit)) {
            throw new Error('Invalid unit.');
        }

        if (value < 0) {
            throw new Error('Value must be non-negative.');
        }

        if (fromUnit === toUnit) {
            return value;
        }

        const conversionFunction = this.units[fromUnit][`to${toUnit.charAt(0).toUpperCase()}${toUnit.slice(1)}`];

        if (!conversionFunction) {
            throw new Error('Invalid conversion.');
        }

        return conversionFunction(value);
    }
}

export class Distance {
    constructor() {
        this.units = {
            millimeters: {
                toMillimeters: (value) => value,
                toCentimeters: (value) => value / 10,
                toMeters: (value) => value / 1000,
                toKilometers: (value) => value / 1000000,
                toInches: (value) => value * 0.0393701,
                toFeet: (value) => value * 0.00328084,
                toYards: (value) => value * 0.00109361,
                toMiles: (value) => value * 6.2137e-7,
            },
            centimeters: {
                toMillimeters: (value) => value * 10,
                toCentimeters: (value) => value,
                toMeters: (value) => value / 100,
                toKilometers: (value) => value / 100000,
                toInches: (value) => value * 0.393701,
                toFeet: (value) => value * 0.0328084,
                toYards: (value) => value * 0.0109361,
                toMiles: (value) => value * 6.2137e-6,
            },
            meters: {
                toMillimeters: (value) => value * 1000,
                toCentimeters: (value) => value * 100,
                toMeters: (value) => value,
                toKilometers: (value) => value / 1000,
                toInches: (value) => value * 39.3701,
                toFeet: (value) => value * 3.28084,
                toYards: (value) => value * 1.09361,
                toMiles: (value) => value * 0.000621371,
            },
            kilometers: {
                toMillimeters: (value) => value * 1000000,
                toCentimeters: (value) => value * 100000,
                toMeters: (value) => value * 1000,
                toKilometers: (value) => value,
                toInches: (value) => value * 39370.1,
                toFeet: (value) => value * 3280.84,
                toYards: (value) => value * 1093.61,
                toMiles: (value) => value * 0.621371,
            },
            inches: {
                toMillimeters: (value) => value * 25.4,
                toCentimeters: (value) => value * 2.54,
                toMeters: (value) => value * 0.0254,
                toKilometers: (value) => value * 0.0000254,
                toInches: (value) => value,
                toFeet: (value) => value * 0.0833333,
                toYards: (value) => value * 0.0277778,
                toMiles: (value) => value * 0.000015783,
            },
            feet: {
                toMillimeters: (value) => value * 304.8,
                toCentimeters: (value) => value * 30.48,
                toMeters: (value) => value * 0.3048,
                toKilometers: (value) => value * 0.0003048,
                toInches: (value) => value * 12,
                toFeet: (value) => value,
                toYards: (value) => value * 0.333333,
                toMiles: (value) => value * 0.000189394,
            },
            yards: {
                toMillimeters: (value) => value * 914.4,
                toCentimeters: (value) => value * 91.44,
                toMeters: (value) => value * 0.9144,
                toKilometers: (value) => value * 0.0009144,
                toInches: (value) => value * 36,
                toFeet: (value) => value * 3,
                toYards: (value) => value,
                toMiles: (value) => value * 0.000568182,
            },
            miles: {
                toMillimeters: (value) => value * 1609344,
                toCentimeters: (value) => value * 160934.4,
                toMeters: (value) => value * 1609.34,
                toKilometers: (value) => value * 1.60934,
                toInches: (value) => value * 63360,
                toFeet: (value) => value * 5280,
                toYards: (value) => value * 1760,
                toMiles: (value) => value,
            },
        };

    }

    convert(value, fromUnit, toUnit) {
        if (!this.units.hasOwnProperty(fromUnit) || !this.units.hasOwnProperty(toUnit)) {
            throw new Error('Invalid unit.');
        }

        if (value < 0) {
            throw new Error('Value must be non-negative.');
        }

        if (fromUnit === toUnit) {
            return value;
        }

        const conversionFunction = this.units[fromUnit][`to${toUnit.charAt(0).toUpperCase()}${toUnit.slice(1)}`];

        if (!conversionFunction) {
            throw new Error('Invalid conversion.');
        }

        return conversionFunction(value);
    }
}

export class Weight {
    constructor() {
        this.units = {
            grams: {
                toGrams: (value) => value,
                toKilograms: (value) => value / 1000,
                toOunces: (value) => value * 0.035274,
                toPounds: (value) => value * 0.00220462,
                toMetricTonnes: (value) => value / 1000000,
            },
            kilograms: {
                toGrams: (value) => value * 1000,
                toKilograms: (value) => value,
                toOunces: (value) => value * 35.274,
                toPounds: (value) => value * 2.20462,
                toMetricTonnes: (value) => value / 1000,
            },
            ounces: {
                toGrams: (value) => value * 28.3495,
                toKilograms: (value) => value * 0.0283495,
                toOunces: (value) => value,
                toPounds: (value) => value * 0.0625,
                toMetricTonnes: (value) => value / 35274.96,
            },
            pounds: {
                toGrams: (value) => value * 453.592,
                toKilograms: (value) => value * 0.453592,
                toOunces: (value) => value * 16,
                toPounds: (value) => value,
                toMetricTonnes: (value) => value / 2204.62,
            },
            metricTonnes: {
                toGrams: (value) => value * 1000000,
                toKilograms: (value) => value * 1000,
                toOunces: (value) => value * 35274.96,
                toPounds: (value) => value * 2204.62,
                toMetricTonnes: (value) => value,
            },
        };
    }

    convert(value, fromUnit, toUnit) {
        if (!this.units.hasOwnProperty(fromUnit) || !this.units.hasOwnProperty(toUnit)) {
            throw new Error('Invalid unit.');
        }

        if (value < 0) {
            throw new Error('Value must be non-negative.');
        }

        if (fromUnit === toUnit) {
            return value;
        }

        const conversionFunction = this.units[fromUnit][`to${toUnit.charAt(0).toUpperCase()}${toUnit.slice(1)}`];

        if (!conversionFunction) {
            throw new Error('Invalid conversion.');
        }

        return conversionFunction(value);
    }
}

export class Currency {
    constructor() {
        this.units = {};
        this.fetchExchangeRates();
    }

    fetchExchangeRates() {
        fetch("https://v6.exchangerate-api.com/v6/af872b822c34b24b652188b2/latest/USD").then((response) =>
            response.json()).then((data) => {
            const rates = data["conversion_rates"];
            const currencies = Object.keys(rates);

            currencies.forEach((currency) => {
                this.units[currency] = rates[currency];
            });
        }).catch((error) => {
            console.log('Error fetching exchange rates:', error);
            this.units["error fetching rates"] = "error fetching rates";
        });
    }

    convert(amount, fromCurrency, toCurrency) {
        // Perform the currency conversion based on the fetched exchange rates
        const fromRate = this.units[fromCurrency];
        const toRate = this.units[toCurrency];

        if (fromRate && toRate) {
            return (amount / fromRate) * toRate;
        } else {
            console.log('Invalid currency units');
            return null;
        }
    }
}

export class Temperature {
    constructor() {
        this.units = {
            Celsius: {
                toCelsius: (value) => value,
                toFahrenheit: (value) => (value * 9) / 5 + 32,
                toKelvin: (value) => value + 273.15,
            },
            Fahrenheit: {
                toCelsius: (value) => ((value - 32) * 5) / 9,
                toFahrenheit: (value) => value,
                toKelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
            },
            Kelvin: {
                toCelsius: (value) => value - 273.15,
                toFahrenheit: (value) => (value - 273.15) * (9 / 5) + 32,
                toKelvin: (value) => value,
            },
        };
    }

    convert(value, fromUnit, toUnit) {
        // Convert the value to the intermediate unit (Celsius)
        const intermediateValue = this.units[fromUnit].toCelsius(value);

        // Convert the intermediate value to the target unit
        const convertedValue = this.units[toUnit][`to${toUnit}`](intermediateValue);

        // Round the converted value to 2 decimal places
        const roundedValue = Math.round(convertedValue * 100) / 100;

        return roundedValue;
    }
}







