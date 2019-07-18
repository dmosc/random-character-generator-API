DB=$1 
COLLECTION=$2

mongo $DB --eval "db.$COLLECTION.drop()"