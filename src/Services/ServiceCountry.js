import http from '../Utils/http-common';

class ServiceCountry {
    static getAllCountries(pageNo, noOfItems) {
        return http.get("/countries/" + pageNo + "/" + noOfItems);
    }
    static addNewCountry(name) {
        return http.get("/addcountry?name=" + name);
    }
}
export default ServiceCountry;
