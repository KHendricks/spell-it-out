#! /bin/bash
#
# Bash script to create a build tar and copy to my
# digital ocean server.
# 
# I know its not the best to use the root account but
# for the purpose of this project I was fine with doing
# that.
#
build_tar="web_build_`date +"%d_%b_%Y"`.tar"
cd SpellItOut
expo build:web
tar -cf $build_tar web-build
rm -rf web-build
scp $build_tar root@spellitout.net:~/builds

