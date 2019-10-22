import axios from 'axios'
import {format} from 'date-fns';

//Define API request URL and request process

const url = 'https://www.reddit.com/'
const getSubRedditsAsync = async () => {
    const response = await axios.get(url + 'r/all/top.json?limit=' + 25);
    //console.log(response.data.data.children);

    const lst = response.data.data.children.map(data => {
        let date2 = format(data.data.created, 'yyyy-MM-dd');
        data.data.created = diff_hours(new Date(), new Date(date2));
        return data;
    });
    console.log(lst);
    return lst;//response.data.data.children;
};
const diff_hours = (dt2, dt1) => {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

};
export default {
    getSubRedditsAsync,

}
