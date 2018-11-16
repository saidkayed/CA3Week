const URL = "http://localhost:8084/jwtbackend";



function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}

class ApiFacade {
    
      
     
     
    
     fetchSwapiPeople = () =>{
   return fetch(URL + "/api/swapi/people").then(res =>res.json(),handleHttpErrors);
     }
     fetchSwapiPlanets = () =>{
       const option = this.makeOptions("GET",true);
   return fetch(URL + "/api/swapi/planets",option).then(res => res.json(),handleHttpErrors);
     }
   fetchSwapiStartships = () =>{
     const option = this.makeOptions("GET",true);
   return fetch(URL + "/api/swapi/starships",option).then(res => res.json(),handleHttpErrors);
   }
   fetchSwapiVehicles = () =>{
     const option = this.makeOptions("GET",true);
   return fetch(URL + "/api/swapi/vehicles",option).then(res => res.json(),handleHttpErrors);
   }
   fetchSwapispecies = () =>{
     const option = this.makeOptions("GET",true);
   return fetch(URL + "/api/swapi/species",option).then(res => res.json(),handleHttpErrors);
   }
   fetch_dummie_data = () =>{
     const option = this.makeOptions("GET",true);
   return fetch(URL + "/api/pagination",option).then(res => res.json(),handleHttpErrors);
   }
   
     
    
   }
   
   
   const facade = new ApiFacade();
   export default facade;