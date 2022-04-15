import axios from 'axios';

const getDrugs = async () => {
    const response = await axios("http://www.mocky.io/v2/5c3e15e63500006e003e9795")

     // console.log(response)
    return response['data'];
}

export const ApiModule = {
    getDrugs
};