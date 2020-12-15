cp -f /vagrant/nginx.conf /usr/local/nginx/conf/nginx.conf
cd /usr/local/nginx/sbin
sudo ./nginx
cp -f /vagrant/mongod.conf /etc/mongod.conf
sudo systemctl unmask mongod
sudo service mongod start
