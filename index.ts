import { concat, of } from 'rxjs'; 
import { map, concat as cc, mergeMap } from 'rxjs/operators';


const first = of([ '1', '2', '3']);
const second = of([ '5', '6', '7']);
const third = of([ '9', '10', '11']);

const source = concat([
  first, second, third
  ]).pipe(
    mergeMap(r => r.pipe(mergeMap(i => i))),
  );

source.subscribe(x => console.log(x));
