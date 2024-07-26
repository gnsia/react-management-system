const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://picsum.photos/id/1/64/64',
            'name': 'kidohu',
            'birth': '880705',
            'gender': 'male',
            'job': 'Developer'
        },
        {
            'id': 2,
            'image': 'https://picsum.photos/id/2/64/64',
            'name': 'kidini',
            'birth': '901121',
            'gender': 'female',
            'job': 'Photographer'
        },
        {
            'id': 3,
            'image': 'https://picsum.photos/id/3/64/64',
            'name': 'cashunut',
            'birth': '990909',
            'gender': 'male',
            'job': 'nuts'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));