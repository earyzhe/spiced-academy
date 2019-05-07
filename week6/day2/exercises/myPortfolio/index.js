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
        projectObj['imageUrl'] = `/projects/${projectId}/descriptor_image.png`;
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
        layout: 'base',
        siteName: 'Portfolio',
        projects: details
    });
});

app.get('/:name', (req, res) => {
    // params are the parameter in the url or the route
    var projectToRender;
    
    for (let index = 0; index < details.length; index++) {
        const project = details[index];
        if (project.descriptionUrl == req.params.name){
            projectToRender = project;
        }
    }

    if (projectToRender){

        res.render('project',{
            layout: 'main',
            project: projectToRender,
            projects: details
        });
    }
    else{
        res.render('no_match',{
            layout: 'main',
            projects: details
            
        });
    }
});

app.listen(8080, () => {console.log('Server running on localhost:8080');});