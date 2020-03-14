echo === IMPORTANDO DATOS ===
mongoimport -h db --db hack --collection users --file /mongo-backup/users.json
mongoimport -h db --db hack --collection passwords --file /mongo-backup/passwords.json
echo === DATOS IMPORTADOS ===
