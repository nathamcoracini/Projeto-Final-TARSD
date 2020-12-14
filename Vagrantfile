IMAGE_NAME = "ubuntu/xenial64"
N = 2


Vagrant.configure("2") do |config|
    config.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 2

    end

    config.vm.define "k8s-master" do |master|
      master.vm.box = IMAGE_NAME
      master.vm.network "private_network", ip: "192.168.50.10"
      master.vm.network "forwarded_port", guest: 80, host: 8080
      master.vm.hostname = "k8s-master"

      master.vm.provision "ansible" do |ansible|
	ansible.playbook = "./master-playbook.yml"
         ansible.extra_vars = {
            node_ip: "192.168.50.10",
         }
      end

      master.vm.provision "shell", path: "install-nginx.sh"
      master.vm.provision "shell", path: "install-mongo.sh"
      master.vm.provision "shell", path: "shell.sh"
    end

(1..N).each do |i|
    config.vm.define "node-#{i}" do |node|
       node.vm.box = IMAGE_NAME
       node.vm.network "private_network", ip: "192.168.50.#{i + 10}"
       node.vm.hostname = "node-#{i}"

       node.vm.provision "ansible" do |ansible|
	ansible.playbook = "./node-playbook.yml"
          ansible.extra_vars = {
             node_ip: "192.168.50.#{i + 10}",
          }
       end
    end
  end
end
