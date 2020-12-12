sudo apt install libpcre3-dev libssl-dev zlib1g-dev

mkdir buildnginx
cd buildnginx
git clone https://github.com/arut/nginx-rtmp-module.git
git clone https://github.com/nginx/nginx.git
cd nginx
./auto/configure --add-module=../nginx-rtmp-module --with-http_slice_module
make
sudo make install
