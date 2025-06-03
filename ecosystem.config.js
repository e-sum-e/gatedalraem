module.exports = {
  apps: [
    {
      name: 'moyeora-it-FE',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      cwd: '/home/ubuntu/projects/moyeora-it-FE', 
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
