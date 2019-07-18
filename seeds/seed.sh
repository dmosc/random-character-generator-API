DB=$1 
COLLECTION=$2
PATH_TO_FILE=$3

mongoimport --db $DB --collection $COLLECTION --type json --file $PATH_TO_FILE --jsonArray