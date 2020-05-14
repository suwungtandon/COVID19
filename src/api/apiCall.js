import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';

const fetchData = async (country) => {
    let changableUrl = apiUrl;

    if(country) {
        changableUrl = `${apiUrl}/countries/${country}`;
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (err) {
        console.log(err);
    }
}

const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${apiUrl}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (err) {
        console.log(err);
    }
}

const fetchCountries  = async () => {
    try {
        const {data: {countries}} = await axios.get(`${apiUrl}/countries`);

        return countries.map((country) => country.name);
    } catch (err) {
        console.log(err);
    }
}

export {fetchData, fetchDailyData, fetchCountries};
