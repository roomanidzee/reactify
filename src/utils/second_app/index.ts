
export default class UserCardUtils {

    static getRandomNumber(){

        const min = 1;
        const max = 20;

        return  Math.floor(Math.random() * (max - min + 1)) + min;

    }

}