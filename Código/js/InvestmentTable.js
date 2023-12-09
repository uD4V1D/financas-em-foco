const calculateInvestment = async () => {
    const amount = document.getElementById('investment-amount').value;
    const period = document.getElementById('investment-period').value;

    try {
        const result = await simulateInvestmentAPI(amount, period);
        document.getElementById('investment-result').textContent = `Valor Futuro: R$ ${result.toFixed(2)}`;
    } catch (error) {
        console.error('Error simulating investment:', error);
    }
};

const fetchCurrencyRates = async () => {
    const apiURL = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL';

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const usdBrl = data.USDBRL;
        const eurBrl = data.EURBRL;

        document.getElementById('usd-rate').textContent = `USD: ${parseFloat(usdBrl.ask).toFixed(2)}`;
        document.getElementById('eur-rate').textContent = `EUR: ${parseFloat(eurBrl.ask).toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching currency rates:', error);
    }
};

const simulateInvestmentAPI = (amount, period) => {
    return new Promise((resolve) => {
        const interestRate = 0.05;
        const result = amount * Math.pow(1 + interestRate, period);
        resolve(result);
    });
};

document.addEventListener('DOMContentLoaded', fetchCurrencyRates);
