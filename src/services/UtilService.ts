import * as _ from 'lodash';

export class UtilService {

    static omit (object: any, path: string | string[]): any {
        return _.omit(object, path);
    }
}
