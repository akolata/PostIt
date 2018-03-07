/**
 * Dto used for Firebase login
 */
export class AuthenticationDto {
  constructor(public email?: string,
              public password?: string,) {
  }
}

/**
 * Class used for login/registration validation
 */
export class AuthenticationResult {
  constructor(public hasResult: boolean,
              public message?: string,
              public valid?: boolean) {
  }
}

/**
 * A single comment for post
 */
export class PostComment {
  constructor(public email: string,
              public comment: string) {
  }
}

/**
 * Class representing a user's post
 */
export class Post {
  _id: {
    $oid: string;
  };
  title: string;
  content: string;
  created: Date;
  authorEmail: string;
  comments?: PostComment[];
}
