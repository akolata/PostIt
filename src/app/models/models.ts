export class LoginDto {
  constructor(public email?: string,
              public password?: string,) {
  }
}

export class LoginResult {
  constructor(
    public hasResult: boolean,
    public message?: string,
    public valid?: boolean
  ){}
}

export class AddPostDto {
  _id: {
    $oid: string;
  };
  title: string;
  content: string;
  created: Date;
}
