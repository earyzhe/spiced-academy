const express = require('express');
const hb = require('express-handlebars');
const app = express();
const fs = require('fs');
var projectNames;
var details = [];

// Get the project details dynamically on init
try {
    projectNames = fs.readdirSync(`${__dirname}/public/projects`);
    projectNames.shift();
    for (let index = 0; index < projectNames.length; index++) {
        const projectId = projectNames[index];
        var content = fs.readFileSync(`${__dirname}/public/projects/${projectId}/description.json`);
        var projectObj = JSON.parse(content);
        projectObj['url'] = `/projects/${projectId}/`;
        projectObj['descriptionUrl'] = `${projectId}`;
        projectObj['imageUrl'] = `${__dirname}/${projectId}/descriptor_image.png`;
        // projectObj['projectUrl'] = `${__dirname}/public/projects/${projectId}`;
        details.push(projectObj);
    }
} catch (e) {
    console.log(e);
}

app.engine('handlebars', hb(0));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        // Sets the layout template
        layout: 'main',
        siteName: 'Portfolio',
        projects: details
    });
});

// app.get('/about', (req, res) => {
//     res.render('about',{
//         layout: 'main',
//         siteName: 'Portfolio',
//         // characters:futuramaArr
//     });
// });

app.get('/:name', (req, res) => {
    // params are the parameter in the url or the route

    var projectToRender;
    console.log(details);
    
    for (let index = 0; index < details.length; index++) {
        const project = details[index];
        if (project.descriptionUrl == req.params.name){
            projectToRender = project;
        }
    }
    // console.log('Absolute path');
    // console.log(`${__dirname}/public/projects/${projectToRender.url}`);

    // res.sendFile(`${__dirname}/public/projects/${projectToRender.url}`);
    console.log(projectToRender);
    console.log(req.params.name);
    res.render('project',{
        layout: 'main',
        project: projectToRender,
    });
});

app.listen(8080, () => {console.log('Server running on localhost:8080');});