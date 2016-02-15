#!/bin/bash

read -p "Enter MySQL hostname   : " host
read -p "Enter MySQL username   : " user
#read -s "Enter MySQL password   : " pass
read -s -p "Enter MySQL password   : " pass
echo ""
read -p "Enter image upload dir : " dir

echo "module.exports =" > ./Settings.js
echo "{" >> ./Settings.js
echo "host : \"$host\"," >> ./Settings.js
echo "user : \"$user\"," >> ./Settings.js
echo "password : \"$pass\"," >> ./Settings.js
echo "schema : \"hexhack\"," >> ./Settings.js
echo "uploaddir : \"$dir\"" >> ./Settings.js
echo "}" >> ./Settings.js

echo "MySQL will prompt you for your MySQL password.."
mysql --host $host -u $user -p hexhack -e "$(cat ./db.sql)" to finish setup
echo "Setup complete"
