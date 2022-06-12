const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                    <p class="card-text">☕${manager.getRole()}</p>
                        <div class="card-header">Id: ${manager.getId()}</div>
                    <div class="card-header">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
                        <div class="card-header">OfficeNumber: ${manager.getOfficeNumber()}</div>
            </div>
        </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">

        <div class="card-body">
             <h5 class="card-title">${engineer.getName()}</h5>
                <p class="card-text">🤓${engineer.getRole()}</p>
                    <div class="card-header">Id: ${engineer.getId()}</div>
                <div class="card-header">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
            <div class="card-header">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer"></div>
        </div>
    </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">

        <div class="card-body">
             <h5 class="card-title">${intern.getName()}</h5>
                <p class="card-text">
                👨‍🎓${intern.getRole()}</p>
                    <div class="card-header">Id: ${intern.getId()}</div>
                <div class="card-header">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>${intern.getEmail()}</div>
            <div class="card-header">Github: <a href="https://github.com/${intern.getSchool()}" target="_blank" rel="noopener noreferrer"></div>
        </div>
    </div>
        `;
    };


    // creates an array to host all of the employees 
    const html = [];

    // the code below allows each employee to be appeneded to the array
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

// export function to generate entire page
module.exports = team => {

    return `
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>Team-Generator</title>
    </head>
    <body>
    
          <main role="main">
      
            <section class="jumbotron text-center">
              <div class="container">
                <h1 class="jumbotron-heading">My Team</h1>
                </p>
              </div>
            </section>
      
            <div class="py-5 bg-light">
              <div class="container">
      
                <div class="row">
                    ${generateTeam(team)}
                </div>
                
              </div>
            </div>
      
          </main>
    </body>
    </html>
    
    `;
};