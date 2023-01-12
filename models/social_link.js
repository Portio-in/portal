
import SocialType from "./social_type";

class SocialLink{
    constructor({id, link, type}){
        this.id = id;
        this.link = link;
        this.type = type;
    }

    static fromJson(json){
        return new SocialLink({
            id: json.id,
            link: json.link,
            type: SocialType.fromJson(json.type)
        })
    }

    toJson(){
        return {
            id: this.id,
            link: this.link,
            type: this.type.toJson()
        }
    }
}

export default  SocialLink;