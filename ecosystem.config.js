module.exports = {
apps : [{
      name: "node-demo",
        script: "npm run start:dev",
}
],
deploy : {
production : {
user : 'sandhya',
host : '52.66.85.95',
ref : 'main',
repo : 'git@github.com:Sandhya5070/nodejs.git',
path : '/var/lib/jenkins',
key : '.ssh/id_rsa.pub ubuntu@52.66.85.95'	
'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
}
}
};





































