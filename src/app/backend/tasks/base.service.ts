import { environment } from "../../../environments/environment";

export abstract class BaseService {

  private serverurl = environment.serverurl;

  protected buildurl(path:string){
      return this.serverurl + path;
  }

}
