In order to run psql inside docker when we define the .env file to postgresql

this is an example:

POSTGRES_USER=jonathan
POSTGRES_DB=mydb


sudo docker exec -it my-postgres psql -U jonathan -d mydb



================================
To add user at docker group
=> sudo usermod -aG docker $USER
================================
