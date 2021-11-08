import BarChart from './BarChart';
import { RadarChart } from './RadarChart';

const rawData = [
    { group: 'Captain America', axis: 'Intelligence', value: 3, description: 'only human' },
    { group: 'Captain America', axis: 'Strength', value: 3, description: 'only human' },
    { group: 'Captain America', axis: 'Speed', value: 2, description: 'only human' },
    { group: 'Captain America', axis: 'Durability', value: 3, description: 'only human' },
    { group: 'Captain America', axis: 'Energy', value: 1, description: 'only human' },
    { group: 'Captain America', axis: 'Fighting Skills', value: 6, description: 'able to judge combat decisively' },
    { group: 'Iron Man', axis: 'Intelligence', value: 6, description: 'Smart entreprenuer' },
    { group: 'Iron Man', axis: 'Strength', value: 6, description: 'Powered by his suit' },
    { group: 'Iron Man', axis: 'Speed', value: 5, description: 'rocket boosters' },
    { group: 'Iron Man', axis: 'Durability', value: 6, description: 'tough durable material' },
    { group: 'Iron Man', axis: 'Energy', value: 6, description: '' },
    { group: 'Iron Man', axis: 'Fighting Skills', value: 4, description: '' },
    { group: 'Hulk', axis: 'Intelligence', value: 6, description: 'Scientist brilliance' },
    { group: 'Hulk', axis: 'Strength', value: 7, description: 'Insanely strong' },
    { group: 'Hulk', axis: 'Speed', value: 3, description: 'clumsy' },
    { group: 'Hulk', axis: 'Durability', value: 7, description: 'Close to industructible' },
    { group: 'Hulk', axis: 'Energy', value: 1, description: '' },
    { group: 'Hulk', axis: 'Fighting Skills', value: 4, description: 'great at SMASHING' },
    { group: 'Thor', axis: 'Intelligence', value: 2, description: 'not too bright' },
    { group: 'Thor', axis: 'Strength', value: 7, description: 'god-like strength' },
    { group: 'Thor', axis: 'Speed', value: 7, description: 'god-like speed' },
    { group: 'Thor', axis: 'Durability', value: 6, description: 'god-like durability' },
    { group: 'Thor', axis: 'Energy', value: 6, description: '' },
    { group: 'Thor', axis: 'Fighting Skills', value: 4, description: 'quite low for a god???' },
]

const shapeData = (input) => {
    let data = [];
    let groups = []; // track unique groups
    input.forEach(function (record) {
        let group = record.group;
        if (groups.indexOf(group) < 0) {
            groups.push(group); // push to unique groups tracking
            data.push({ // push group node in data
                group: group,
                axes: []
            });
        };
        data.forEach(function (d) {
            if (d.group === record.group) { // push record data into right group in data
                d.axes.push({
                    axis: record.axis,
                    value: parseInt(record.value),
                    description: record.description
                });
            }
        });
    });
    return data;
}

function App() {
    const radarData = shapeData(rawData)
    RadarChart.draw('#radar', radarData)

    return (
        <>
            <h2>Bar Chart</h2>
            <BarChart />
            <h1>Radar Chart</h1>
            <div id="radar"></div>
        </>
    )
}

export default App;