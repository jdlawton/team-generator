
const generateHTML = employees => {
    console.log("inside the createHTML function");

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meet The Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col banner">
                    <h1>My Team</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                ${employees.map(createCard).join('')}

                
                
            </div>
        </div>
    </body>
    </html>
    `
}

const createCard = employee => {
    //console.log("Inside createCards function");
    //console.log(employee);
    if (employee.getRole() === 'Manager'){
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${employee.getName()} <br> ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>
                <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>
        `;
    } else if (employee.getRole() === 'Engineer') {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${employee.getName()} <br> ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>
                <li class="list-group-item">GitHub: ${employee.getGithub()}</li>
            </ul>
        </div>
        `;
    } else if (employee.getRole() === 'Intern') {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${employee.getName()} <br> ${employee.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>
                <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
        </div>
        `;
    }
   
}

module.exports = generateHTML;