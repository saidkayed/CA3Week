const URL = "http://localhost:8084/jwtbackend";



function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}

class ApiFacade {
    
      
     
     
 makeOptions(method,addToken,body) {
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && this.loggedIn()) {
     opts.headers["x-access-token"] = this.getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts; 
 }
 login = (user, pass) => {
    const options = this.makeOptions("POST", true,{ username: user, password: pass });
    return fetch(URL + "/api/login", options, true)
      .then(handleHttpErrors)
      .then(res => { this.setToken(res.token) })
  }      
  setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }
  logout = () => {
    localStorage.removeItem("jwtToken");
  }
  fetchData = () => {
    const options = this.makeOptions("GET",true); //True add's the token
    return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
  }
  fetchAdminData = () => {
    const options = this.makeOptions("GET",true); //True add's the token
    return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
  }
  /*fetchSwapiPeople = () =>{
    const option = this.makeOptions("GET",true);
return fetch(URL + "/api/swapi/people",option)
.then(res =>res.json(), handleHttpErrors)
  }
  */
  fetchSwapiPeople = () =>{
    const option = this.makeOptions("GET",true);
return fetch(URL + "/api/swapi/people",option)
.then(res =>res.json(), handleHttpErrors)
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