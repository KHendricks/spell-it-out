#! /bin/bash
#
# Bash script to create a build tar and copy to my
# digital ocean server.
# 

build_tar="web_build_`date +"%d_%b_%Y"`.tar"
cd app
expo build:web
tar -cf $build_tar web-build
rm -rf web-build
scp $build_tar app@spellitout.net:~/builds

