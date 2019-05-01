import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name : 'filter'
})

export class PipeFilter implements PipeTransform {
transform(mygallery, value) {
  return mygallery.filter(user => {
    return user.category.includes(value)
  })
}

}
