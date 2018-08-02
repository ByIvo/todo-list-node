'use strict'
import server from './src/app';

const port = process.env.PORT || 3000;

server
    .listen(port, () => console.log(`app running on port ${port}`));