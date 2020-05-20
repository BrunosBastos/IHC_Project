
function MyViewModel() {
    // database send to local storage - seekers, employers, offers, applications
    if ((localStorage.getItem("seekers")) === null) {
      let seekers = [{"educationLevel":"Master’s Degree","name" : "Lionel Messi", "dataNasc" : "20/04/1990", "city":"Barcelona", "address": "Rua de la Paz", "email" : "messi@gmail.com", "password":"passpass", "phoneNumber" : "910000019", "description" : "Sou jogador profissional de futebol", "type" : "Marketing"},
          {"educationLevel": "High School Diploma or Equivalent","name":"Leonardo Lenny", "dataNasc":"25/05/1976", "city":"Nápoles", "address":"Viale della libertà", "email":"lenny@gmail.com", "password":"passpass", "phoneNumber":"923456789", "description":"- Experient in cooking", "type":"Others"},
          {"educationLevel": "Bachelor’s Degree", "name":"Leandro Silva", "dataNasc":"26/06/2000", "city":"Aveiro", "address":"Rua D. Joana", "email":"leandro@gmail.com", "password":"passpass", "phoneNumber":"929876543", "description":"degree in computer science", "type":"Software & Web"}];
      localStorage.setItem("seekers", JSON.stringify(seekers));
    
      let recruiters =[{"name" : "Bastos e Irmãos", "email":"bastoseirmaos@gmail.com", "password":"passpass", "address":"Rua D. Ana", "city":"Aveiro", "phone" : "932222222"},
          {"name" : "Amaral Limitada", "email":"amaral@gmail.com", "password":"passpass", "address":"Avenida da Liberdade", "city":"Aveiro", "phone" : "932255552"},
          {"name":"Heinz Group", "email":"heinz@gmail.com", "password":"passpass", "address":"Viale della libertà", "city":"Nápoles", "phone":"961234589"},
          {"name":"Slinder", "email":"slinder@gmail.com", "password":"passpass", "address":"Avenida da Universidade", "city":"Aveiro", "phone":"961254389"}]
      localStorage.setItem("recruiters", JSON.stringify(recruiters));
    
      let offers = [{"id":1,"email":"bastoseirmaos@gmail.com", "date":"10/05/2020", "role":"Engenheiro Informático", "city":"Aveiro", "address":"Rua D. Maria", "category":"Software & Web", "jobNature":"Full-time", "salary":"1200", "vacancy":"3", "description":""},
          {"id":2,"email":"amaral@gmail.com", "date":"11/05/2020", "role":"Designer", "city":"Aveiro", "address":"Bairro de Santiago", "category":"Software & Web", "jobNature":"Full-time", "salary":"1100", "vacancy":"2", "description":"In need of a designer for a website"},
          {"id":3,"email":"heinz@gmail.com", "date":"12/05/2020", "role":"Cousine Chef", "city":"Nápoles", "address":"Viale della libertà", "category":"Others", "jobNature":"Full-time", "salary":"1050", "vacancy":"1", "description":"In need of a chef for a hotel kitchen"},
          {"id":4,"email":"heinz@gmail.com", "date":"12/05/2020", "role":"Secretary", "city":"Nápoles", "address":"Viale della libertà", "category":"Administration", "jobNature":"Full-time", "salary":"1500", "vacancy":"1", "description":"In need of a administrative secretary"},
          {"id":5,"email":"amaral@gmail.com", "date":"16/05/2020", "role":"Marketing Manager", "city":"Aveiro", "address":"Bairro de Santiago", "category":"Marketing", "jobNature":"Full-time", "salary":"1100", "vacancy":"1", "description":"In need of a marketing manager"},
          {"id":6,"email":"bastoseirmaos@gmail.com", "date":"17/05/2020", "role":"Empregada de Limpeza", "city":"Aveiro", "address":"Rua D. Maria", "category":"Others", "jobNature":"Part-time", "salary":"650", "vacancy":"1", "description":"Procura-se uma empregada de limpeza"}];
      localStorage.setItem("offers", JSON.stringify(offers))
    
      let applications = [{"email": "chiquito_420@sapo.pt", "id":1, "status":"Accepted", "date":"19/05/2020"}];
      localStorage.setItem("applications", JSON.stringify(applications))
      let current_user = "";
      localStorage.setItem("current_user",current_user);
      let current_profile = "";
      localStorage.setItem("current_profile",current_profile);
      let current_offer = "";
      localStorage.setItem("current_offer",current_offer);
    }
  
    var self = this;
    self.originOffers = ko.observableArray(JSON.parse(localStorage.getItem("offers")));
    self.offers = ko.observableArray();
    for (i=self.originOffers().length-1; i>=self.originOffers().length-7 & i>=0; i--) {
        self.offers().push(self.originOffers()[i])
    }
    console.log(self.offers())
  
    self.companies = ko.observableArray(JSON.parse(localStorage.getItem("recruiters")));
    console.log(self.companies())
    self.company1 = ko.observable(self.companies()[0].name);
    self.company2 = ko.observable(self.companies()[1].name);
    self.company3 = ko.observable(self.companies()[2].name);
    self.company4 = ko.observable(self.companies()[3].name);
  
  
  }
  ko.applyBindings(new MyViewModel());