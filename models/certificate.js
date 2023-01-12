import {formatDate, formattedDateToTZFormat} from '../helpers/dateFormatter';
import isBlank from "../helpers/isBlank";

class Certificate{
    constructor({id, title, providedBy, link, completedOn}){
        this.id = id;
        this.title = title;
        this.providedBy = providedBy;
        this.link = link;
        this.completedOn = completedOn;
    }
    static fromJson(json){
        return new Certificate({
            id: json.id,
            title: json.title,
            providedBy: json.providedBy ? json.providedBy : "",
            link: json.link ? json.link : "",
            completedOn: formatDate(json.completedOn)
        })
    }

    toJson(){
        return {
            id: this.id,
            title: this.title,
            provided_by: this.providedBy,
            link: this.link,
            completed_on: formattedDateToTZFormat(this.completedOn)
        }
    }

    isProvidedByBlank(){
        return this.providedBy === undefined || this.providedBy === null
    }

    isLinkBlank(){
        return this.link === undefined || this.link === null
    }

    validate(){
        return this.isLinkBlank() && this.isProvidedByBlank() && isBlank(this.title);
    }

    setCompletedOnDate(date){
        let splitted = date.split("-");
        this.completedOn = `${splitted[2]}-${splitted[1]}-${splitted[0]}`
    }

    static empty(){
        return new Certificate({
            id: null,
            title: "",
            providedBy: "",
            link: "",
            completedOn: null
        })
    }
}

export default Certificate;