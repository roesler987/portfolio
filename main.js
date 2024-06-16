function getProjects() {
    const gitHub = 'https://api.github.com/users/roesler987/repos';
    var loadingElement = document.getElementById('loading');

    fetch(gitHub, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
        loadingElement.style.display = 'none';
        showProjects(response);
        console.log(response);
    })
    .catch((e) => {
        console.log(e);
    });
}

function showProjects(data) {
    var list = document.getElementById('my-projects-list');

    for (let i = 0; i < data.length; i++) {
        let projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        let projectName = document.createElement('h3');
        projectName.textContent = data[i]['name'];
        projectDiv.appendChild(projectName);

        let projectDescription = document.createElement('p');
        projectDiv.appendChild(projectDescription);

        let projectLink = document.createElement('a');
        projectLink.href = data[i]['clone_url'];
        projectLink.target = '_blank';
        projectLink.textContent = 'Ver Projeto';
        projectDiv.appendChild(projectLink);

        list.appendChild(projectDiv);
    }
}

getProjects();
