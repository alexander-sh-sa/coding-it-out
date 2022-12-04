import { BehaviorSubject } from 'rxjs';

export class Authentication {
  public isLoading = new BehaviorSubject<boolean>(false);

  async login(userAuthData: Record<string, string | null>) {
    this.isLoading?.next(true);
    return new Promise((res, rej) => {
      try {
        setTimeout(() => {
          this.isLoading?.next(false);
          console.log(userAuthData);
          res('Success');
        }, 1000);
      } catch (e) {
        this.isLoading?.next(false);
        console.error(e);
        rej(e);
      }
    });
  }
}
