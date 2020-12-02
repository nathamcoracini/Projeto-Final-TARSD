IMAGE_NAME = "docker.io/library/ubuntu:latest"
N = 2


Vagrant.configure("2") do |config|
    config.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 4
    end

    config.vm.define "k8s-master" do |master|
      master.vm.box = IMAGE_NAME
      config.vm.box_version = "02"
      master.vm.network "private_network", ip: "192.168.50.10"
      master.vm.hostname = "k8s-master"

      master.vm.provision "ansible" do |ansible|
        ansible.compatibility_mode= "1.8"
	ansible.playbook = "D:/HashiCorp/Vagrant/bin/Kubernetes/master-playbook.yml"
         ansible.extra_vars = {
            node_ip: "192.168.50.10",
         }
      end
    end

(1..N).each do |i|
    config.vm.define "node-#{i}" do |node|
       node.vm.box = IMAGE_NAME
       config.vm.box_version = "02"
       node.vm.network "private_network", ip: "192.168.50.#{i + 10}"
       node.vm.hostname = "node-#{i}"

       node.vm.provision "ansible" do |ansible|
        ansible.compatibility_mode= "1.8"
	ansible.playbook = "D:/HashiCorp/Vagrant/bin/Kubernetes/node-playbook.yml"
          ansible.extra_vars = {
             node_ip: "192.168.50.#{i + 10}",
          }
       end
    end
  end
end
