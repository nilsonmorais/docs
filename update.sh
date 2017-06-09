#!/bin/bash

update(){
	echo "Git Add">&2
	git add -A >&2
	echo "Git commit $@">&2
	git commit -m '"$@"' >&2
	echo "Git Push">&2
	git push origin master >&2
	exit 0
}

usage(){
    echo "Usage: ./update.sh -m 'Commit msg'"; exit 0;
}

if [ "$1" == "" ]; then
    usage;exit;
fi

while getopts ":m:" opt; do
	case $opt in 
		m)
            update $OPTARG >&2
            ;;
		\?)
			echo "Invalid option: -$OPTARG" >&2
			usage
			exit 1
			;;
        :)
			echo "Option -$OPTARG requires an argument." >&2
			exit 1
			;;
	esac
done
