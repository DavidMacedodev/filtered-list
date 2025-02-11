import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImage'
})
export class UserStatusImagePipe implements PipeTransform {

  transform(userStatus: number): string {

    const statusImages: { [key:number]: string } = {
      1: 'assets/icons/active-icon.png',
      2: 'assets/icons/inactive-icon.png',
    };


    return statusImages[userStatus]
  }

}
