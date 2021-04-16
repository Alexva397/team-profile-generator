const htmlHead = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>MY Team</title>
</head>
<body class="bg-light">
    <div class="container-fluid">
        <div class="row justify-content-center align-items-center bg-danger text-white">
            <h1 class="p-5">My Team</h1>
        </div>
    </div>
    <div class="container-fluid p-5">
        <div class="row justify-content-center">`;

const teamCards = ``;


const htmlFoot = 
`        </div>
    </div>
</body>
</html>`;


const writeHTML = (teamArray) => {
 for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getrole() === 'Manager') {
         teamCards += `
                    <div class="card m-4 shadow bg-body rounded" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h3 class="card-title">${teamArray[i].name}</h3>
                            <h4 class="card-title"><i class="fas fa-user-tie mr-3"></i>Manager</h4>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                                <li class="list-group-item">Office Number: ${teamArray[i].officeNumber} </li>
                            </ul>
                        </div>
                    </div>`;
    } else if (teamArray[i].getrole() === 'Engineer') {
        teamCards += `
        <div class="card m-4 shadow bg-body rounded" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h3 class="card-title">${teamArray[i].name}/h3>
                <h4 class="card-title"><i class="fab fa-codepen mr-3"></i>Engineer</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamArray[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${teamArray[i].githubUsername}" target="_blank">${teamArray[i].githubUsername}</a></li>
                </ul>
            </div>
        </div>`;
    } else if (teamArray[i] === 'Intern') {
        teamCards += `
        <div class="card m-4 shadow bg-body rounded" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h3 class="card-title">${teamArray[i].name}</h3>
                <h4 class="card-title"><i class="fas fa-user-graduate mr-3"></i>Intern</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${teamArray[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                    <li class="list-group-item">School: ${teamArray[i].school}</li>
                </ul>           
            </div>
        </div>`;
    }
 }
 return `${htmlHead}${teamCards}${htmlFoot}`;
}



module.exports = writeHTML;