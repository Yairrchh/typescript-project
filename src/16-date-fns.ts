import {subDays, format} from 'date-fns'

const date = new Date(1998, 2, 30)

const rta = subDays(date, 30);
const rtaF = format(rta, 'yyyy/MM/dd');

console.log(rtaF)
