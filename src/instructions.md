GIT
lando/style-guide-app
https://github.com/lando101/style-guide-app

DEPLOY TO AWS
ng build && npm run aws-deploy
install aws cli :: once installed aws config -- set aws keys

VIDEO TO DEPLOY TO AWS
https://www.youtube.com/watch?v=ZkYsMBNR_eY&t=600s
{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "AllowPublicReadAccess",
"Effect": "Allow",
"Principal": "_",
"Action": [
"s3:GetObject"
],
"Resource": [
"arn:aws:s3:::example-bucket/_"
]
}
]
}

// HOW TO USE DIRECTIVE TO LOAD COMPONENTS DYNAMICALLY
https://blog.bogdancarpean.com/angular-how-to-dynamically-inject-a-component-to-dom/

// WHEN AND HOW TO BUILD A DATA SERVICE
https://www.codementor.io/@yomateo/angular-service-go-get-json-4min-video-oohl3rwmx

FIREBASE SETUP || AUTHENTICATION
https://www.positronx.io/full-angular-7-firebase-authentication-system/

INSTALLING BOOTSTRAP RESOURCE
https://www.techiediaries.com/angular-bootstrap/

---

CLI COMMANDS

SERVE PROJECT LOCALLY ON LOCALHOST:4200
ng serve

UPDATE DIST
ng build

GENERATE COMMANDS
ng generate service my-service
ng generate component my-component

INSTALLATION OF MATERIAL
https://www.youtube.com/watch?v=OY0Y_kEX-18

WEATHER ICONS
https://github.com/manifestinteractive/weather-underground-icons/tree/master/dist/icons/white/png/256x256

ILLUSTRATION IMAGES
https://undraw.co/license

Copyright 2020 Katerina Limpitsouni
All images, assets and vectors published on unDraw can be used for free. You can use them for noncommercial
and commercial purposes. You do not need to ask permission from or provide credit to the creator or unDraw.

More precisely, unDraw grants you an nonexclusive, worldwide copyright license to download, copy, modify,
distribute, perform, and use the assets provided from unDraw for free, including for commercial purposes,
without permission from or attributing the creator or unDraw. This license does not include the right to
compile assets, vectors or images from unDraw to replicate a similar or competing service, in any form or
distribute the assets in packs. This extends to automated and non-automated ways to link, embed, scrape,
search or download the assets included on the website without our consent.
