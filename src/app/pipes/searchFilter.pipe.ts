import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'searchFilterPipe'
})

@Injectable()
export class searchFilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }

        return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
}