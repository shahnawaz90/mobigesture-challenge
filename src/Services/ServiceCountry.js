import http from '../Utils/http-common';

class ServiceCountry {
    static getAllCountries(pageNo, noOfItems) {
        http.get("/countries/" + pageNo + "/" + noOfItems);
    }
    static addNewCountry(name) {
        http.get("/addcountry?name=" + name);
    }
}
export default ServiceCountry