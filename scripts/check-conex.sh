while ! echo 'db.runCommand("ping").ok' | mongo db:27017/test --quiet; do
  echo Conectando a la bd
  sleep 1
done
echo Conexion lista