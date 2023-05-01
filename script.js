import {Data, Time, Distance, Weight,Currency,Temperature} from "./Formulas.js";
const data = new Data();
const time = new Time();
const distance = new Distance();
const weight = new Weight();
const currency = new Currency();
const temperature = new Temperature();

class Converter {
    constructor() {
        this.conversionFormulas = {
            Currency: currency,
            Time: time,
            Distance: distance,
            Weight: weight,
            Data: data,
            Temperature: temperature,

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
            link.addEventListener('click', (event) => this.handleConversionTypeChange(event));
        });

        const convertButton = document.getElementById('convertButton');
        convertButton.addEventListener('click', () => {
            const inputValue = parseFloat(document.getElementById('inputValue').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;
            if (!isNaN(inputValue) && fromUnit && toUnit) {
                let convertedValue;
                const type = document.getElementById("conversionTypeDisplay").textContent;
                switch (type) {
                    case "Data":
                        convertedValue = data.convert(inputValue, fromUnit, toUnit);
                        break;
                    case "Time":
                        convertedValue = time.convert(inputValue, fromUnit, toUnit);
                        break;
                    case "Currency":
                        convertedValue = currency.convert(inputValue, fromUnit, toUnit);
                        break;
                    case "Weight":
                        convertedValue = weight.convert(inputValue, fromUnit, toUnit);
                        break;
                    case "Distance":
                        convertedValue = distance.convert(inputValue, fromUnit, toUnit);
                        break;
                    case "Temperature":
                        convertedValue = temperature.convert(inputValue,fromUnit,toUnit);
                        break;
                }
                document.getElementById('convertedValue').value = convertedValue;
            }
        });

        // Event listener for conversion type selection
        const conversionLinks = document.querySelectorAll('#conversionType ul li');
        conversionLinks.forEach((link) => {
            link.addEventListener('click', () => {
                const selectedConversionType = link.textContent;
                conversionLinks.forEach((el) => {
                    if (el.textContent !== selectedConversionType) {
                        el.classList.remove('active');
                    } else {
                        el.classList.add('active');
                    }
                });
            });
        });

        this.fromUnit = document.getElementById('fromUnit');
        this.toUnit = document.getElementById('toUnit');
        this.inputValue = document.getElementById('inputValue');
        this.convertedValue = document.getElementById('convertedValue');
    }

    handleConversionTypeChange(event) {
        const conversionType = event.target.innerText;
        this.conversionType = conversionType;
        this.updateConversionTypeDisplay();
        this.setupConversionForm(conversionType);
    }

     setupConversionForm(conversionType) {
        const units = Object.keys(this.conversionFormulas[conversionType].units);
        const fromUnit = document.getElementById('fromUnit');
        const toUnit = document.getElementById('toUnit');
       document.getElementById("conversionTypeDisplay").textContent = conversionType;

        // Set the number of visible options based on the number of units
        const maxVisibleOptions = 5; // Adjust this value as needed
        const numUnits = units.length;
        const visibleOptions = Math.min(maxVisibleOptions, numUnits);

        // Set the height of the list box to accommodate the visible options
        fromUnit.size = visibleOptions+1;
        toUnit.size = visibleOptions+1;

        // Generate the unit options
        fromUnit.innerHTML = this.generateUnitOptions(units);
        toUnit.innerHTML = this.generateUnitOptions(units);
    }

    generateUnitOptions(units) {
        return units
            .map((unit) => `<option value="${unit}">${unit}</option>`)
            .join('');
    }

    updateConversionTypeDisplay() {
        const conversionTypeElement = document.getElementById('conversionTypeDisplay');
        const a = document.getElementById(`${this.conversionType.toLowerCase()}Link`);
        a.classList.add("active");
        conversionTypeElement.textContent = this.conversionType;
    }
}

const converter = new Converter();
converter.setupConversionForm("Time");


// Helper function to clear conversion fields
function clearConversionFields() {
    document.getElementById('inputValue').value = '';
    document.getElementById('fromUnit').selectedIndex = 0;
    document.getElementById('toUnit').selectedIndex = 0;
    document.getElementById('convertedValue').value = '';
    const activeElements = document.getElementsByClassName("active");
    for (let i = activeElements.length - 1; i >= 0; i--) {
        activeElements[i].classList.remove("active");
    }
}

