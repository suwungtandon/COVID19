const cardTypes = [
    {
        id: '1',
        name: 'Confirmed',
        data: 'confirmed',
        body: 'Number of confirmed cases',
    },
    {
        id: '2',
        name: 'Recovered',
        data: 'recovered',
        body: 'Number of recoveries',
    },
    {
        id: '3',
        name: 'Deaths',
        data: 'deaths',
        body: 'Number of Deaths',
    }
];

const imageTypes = [
    {
        id: '1',
        name: 'Wash hands',
        data: 'hands',
        body: 'Clean your hands often. Use soap and water, or an alcohol-based hand rub.',
        link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
    },
    {
        id: '2',
        name: 'Symptoms',
        data: 'symptoms',
        body: 'If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.',
        link: 'https://www.mohfw.gov.in/pdf/FAQ.pdf#:~:text=The%20most%20common%20symptoms%20of,without%20needing%20special%20treatment.',
    },
    {
        id: '3',
        name: 'Wear Masks',
        data: 'mask',
        body: 'Use masks when going outside as a precautionary measure. Better safe than sorry',
        link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks',
    },
    {
        id: '4',
        name: 'Analyse',
        data: 'details',
        body: 'Regulary monitor your health and keep track of symptomps.',
        link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks',
    }
];

const faqTypes = [
    {
        id: '1',
        question: 'What is a coronavirus?',
        answer: 'Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.',
    },
    {
        id: '2',
        question: "How can we protect others and ourselves if we don't know who is infected?",
        answer: `Practicing hand and respiratory hygiene is important at ALL times and is the best way to protect others and yourself.
        When possible maintain at least a 1 meter distance between yourself and others. This is especially important if you are standing by someone who is coughing or sneezing.  Since some infected persons may not yet be exhibiting symptoms or their symptoms may be mild, maintaining a physical distance with everyone is a good idea if you are in an area where COVID-19 is circulating. `,
    },
    {
        id: '3',
        question: 'Is there a vaccine, drug or treatment for COVID-19?',
        answer: `While some western, traditional or home remedies may provide comfort and alleviate symptoms of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. WHO does not recommend self-medication with any medicines, including antibiotics, as a prevention or cure for COVID-19. However, there are several ongoing clinical trials of both western and traditional medicines. WHO is coordinating efforts to develop vaccines and medicines to prevent and treat COVID-19 and will continue to provide updated information as soon research results become available.`,
    },
    {
        id: '4',
        question: 'How long does it take after exposure to COVID-19 to develop symptoms?',
        answer: 'The time between exposure to COVID-19 and the moment when symptoms start is commonly around five to six days but can range from 1 – 14 days. Self-isolation is an important measure taken by those who have COVID-19 symptoms to avoid infecting others in the community, including family members.',
    },
    {
        id: '5',
        question: 'Can I catch COVID-19 from my pet?',
        answer: `Several dogs and cats (domestic cats and a tiger) in contact with infected humans have tested positive for COVID-19. In addition, ferrets appear to be susceptible to the infection. In experimental conditions, both cats and ferrets were able to transmit infection to other animals of the same species, but there is no evidence that these animals can transmit the disease to human and play a role in spreading COVID-19. COVID-19 is mainly spread through droplets produced when an infected person coughs, sneezes, or speaks.
        It is still recommended that people who are sick with COVID-19 and people who are at risk limit contact with companion and other animals. When handling and caring for animals, basic hygiene measures should always be implemented. This includes hand washing after handling animals, their food, or supplies, as well as avoiding kissing, licking or sharing food.`,
    }
];

export {cardTypes, imageTypes, faqTypes};