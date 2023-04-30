class Data {
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

const dataConverter = new Data();

class Converter {
    constructor() {
        this.conversionFormulas = {
            Currency: {
                USD: {
                    EUR: (amount) => amount * 0.85,
                    GBP: (amount) => amount * 0.72,
                },
                EUR: {
                    USD: (amount) => amount * 1.18,
                    GBP: (amount) => amount * 0.85,
                },
                GBP: {
                    USD: (amount) => amount * 1.39,
                    EUR: (amount) => amount * 1.18,
                },
            },
            Time: {
                seconds: {
                    minutes: (amount) => amount / 60,
                    hours: (amount) => amount / 3600,
                },
                minutes: {
                    seconds: (amount) => amount * 60,
                    hours: (amount) => amount / 60,
                },
                hours: {
                    seconds: (amount) => amount * 3600,
                    minutes: (amount) => amount * 60,
                },
            },
            Distance: {
                meters: {
                    kilometers: (amount) => amount / 1000,
                    miles: (amount) => amount / 1609.34,
                },
                kilometers: {
                    meters: (amount) => amount * 1000,
                    miles: (amount) => amount * 0.621371,
                },
                miles: {
                    meters: (amount) => amount * 1609.34,
                    kilometers: (amount) => amount * 1.60934,
                },
            },
            Weight: {
                grams: {
                    kilograms: (amount) => amount / 1000,
                    pounds: (amount) => amount / 453.592,
                },
                kilograms: {
                    grams: (amount) => amount * 1000,
                    pounds: (amount) => amount * 2.20462,
                },
                pounds: {
                    grams: (amount) => amount * 453.592,
                    kilograms: (amount) => amount * 0.453592,
                },
            },
            Data: {dataConverter},
            Temperature: {
                Celsius: {
                    Fahrenheit: (amount) => (amount * 9) / 5 + 32,
                },
                Fahrenheit: {
                    Celsius: (amount) => ((amount - 32) * 5) / 9,
                },
            },

        };

        this.conversionType = '';
        this.fromUnit = '';
        this.toUnit = '';
        this.inputValue = null;
        this.convertedValue = null;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const links = document.querySelectorAll('li');
        links.forEach((link) => {
            link.addEventListener('click', this.handleConversionTypeChange.bind(this));
        });

        this.fromUnit = document.getElementById('fromUnit');
        this.toUnit = document.getElementById('toUnit');
        this.inputValue = document.getElementById('inputValue');
        this.convertedValue = document.getElementById('convertedValue');
        this.fromUnit.addEventListener('change', this.convertValue.bind(this));
        this.toUnit.addEventListener('change', this.convertValue.bind(this));
        this.inputValue.addEventListener('input', this.convertValue.bind(this));
    }

    handleConversionTypeChange(event) {
        const conversionType = event.target.innerText;
        this.conversionType = conversionType;
        this.updateConversionTypeDisplay();
        this.setupConversionForm(conversionType);
    }

    setupConversionForm(conversionType) {
        let units = [];
        switch(conversionType){
            case "Data":
                units = Object.keys(dataConverter.units);
                break;
            default:
                units = Object.keys(this.conversionFormulas[conversionType]);
                break;

        }
        //const units = Object.keys(this.conversionFormulas[conversionType]);
        this.fromUnit.innerHTML = this.generateUnitOptions(units);
        this.toUnit.innerHTML = this.generateUnitOptions(units);
        this.convertValue();
    }

    generateUnitOptions(units) {
        return units
            .map((unit) => `<option value="${unit}">${unit}</option>`)
            .join('');
    }

    updateConversionTypeDisplay() {
         const conversionTypeElement = document.getElementById('conversionTypeDisplay');
        conversionTypeElement.textContent = this.conversionType;
    }

    convertValue() {
        const inputValue = parseFloat(this.inputValue.value);
        const fromUnit = this.fromUnit.value;
        const toUnit = this.toUnit.value;

        if (isNaN(inputValue)) {
            this.convertedValue.value = '';
            return;
        }

        if (fromUnit && toUnit) {
            const conversionFormula = this.conversionFormulas[this.conversionType][fromUnit][toUnit];
            const convertedValue = conversionFormula(inputValue);
            this.convertedValue.value = convertedValue.toFixed(2);
        }
    }
}

const converter = new Converter()


// Event listener for conversion type selection
const conversionType = document.getElementById('conversionType');
const conversionLinks = document.querySelectorAll('#sidebar ul li');
conversionLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const selectedConversionType = link.textContent;
        conversionType.textContent = selectedConversionType;
        clearConversionFields();
    });
});

// Helper function to clear conversion fields
function clearConversionFields() {
    document.getElementById('inputValue').value = '';
    document.getElementById('fromUnit').selectedIndex = 0;
    document.getElementById('toUnit').selectedIndex = 0;
    document.getElementById('convertedValue').value = '';
}

// Event listener for unit conversion
const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', () => {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (!isNaN(inputValue) && fromUnit && toUnit) {
        let convertedValue;

        if (converter.conversionType === 'Data') {
            convertedValue = dataConverter.convert(inputValue, fromUnit, toUnit);
        } else {
            convertedValue = converter.convert(inputValue, fromUnit, toUnit, conversionType.textContent);
        }

        document.getElementById('convertedValue').value = convertedValue;
    }
});
