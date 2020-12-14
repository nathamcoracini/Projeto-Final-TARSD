cp -rf /vagrant/nginx.conf /usr/local/nginx/conf/nginx.conf
cd /usr/local/nginx/sbin
./nginx

cp -rf /vagrant/mongod.conf /etc/mongod.conf
sudo systemctl unmask mongod
sudo system start mongod
