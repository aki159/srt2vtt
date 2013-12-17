#!/bin/bash

echo "WEBVTT"
echo ""
while read p
do if echo $p | grep -q "[0-9][0-9]:[0-9][0-9]:[0-9][0-9],[0-9][0-9][0-9] --> [0-9][0-9]:[0-9][0-9]:[0-9][0-9],[0-9][0-9][0-9]"; then echo $p| sed "s/,/./g"; else echo $p; fi
done < $1