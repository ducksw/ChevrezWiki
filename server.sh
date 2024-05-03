for ((i=0; i<2; i++)); do
    echo -e "\e[33m $i Cargando dependencias\e[0m"  # Texto amarillo
    sleep 1
done

echo -e "\e[32m**** SERVER ACTIVO ****\e[0m"  # Texto verde
node client/server.js
