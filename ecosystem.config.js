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
path : '/home/sandhya/node-app',
key : '/var/lib/jenkins/demo-node',	
'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
}
}
};





































