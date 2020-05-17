import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';
const mapUrl = 'https://corona.lmao.ninja/v2/countries';
const newsUrl = 'https://newsapi.org/v2/top-headlines?country=';

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

const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${apiUrl}/countries`);

        return countries.map((country) => country);
    } catch (err) {
        console.log(err);
    }
}

const fetchMapData = async () => {
    try {
        const {data} = await axios.get(mapUrl);

        return data;
    } catch (err) {
        console.log(err);
    }
}

const fetchNews = async (country) => {
    try {
        if (country.length === 2) {
            const {NEWS_API} = process.env;
            const modifiedUrl = newsUrl + country + '&q=covid&apiKey=54fff705cb2349ae99de265ede17056b';
            const {data} = await axios.get(modifiedUrl);

            return data;
        } else {
            return {};
        }
    } catch (err) {
        console.log(err);
        return {totalResults: 0}
    }
}

export {fetchData, fetchDailyData, fetchCountries, fetchMapData, fetchNews};
