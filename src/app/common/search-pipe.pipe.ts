import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(userList: any, query: string): any {
    if (!query) {
      return [];
    }
    return userList.filter((lock: any) => {
      return lock.name.toLowerCase().match(query.toLowerCase());
    });
  }


}
