export const OAUTH_FLOWS = {
  AUTHORIZATION_CODE: {
    name: 'Authorization Code',
    description: 'The most common OAuth 2.0 flow, used for server-side applications.',
    steps: [
      'User clicks login button',
      'User is redirected to the authorization server',
      'User grants permission',
      'Authorization server redirects back to the application with an authorization code',
      'Application exchanges the authorization code for an access token',
      'Application uses the access token to access protected resources'
    ]
  },
  IMPLICIT: {
    name: 'Implicit',
    description: 'Used for client-side applications, where the access token is returned directly.',
    steps: [
      'User clicks login button',
      'User is redirected to the authorization server',
      'User grants permission',
      'Authorization server redirects back to the application with an access token',
      'Application uses the access token to access protected resources'
    ]
  },
  CLIENT_CREDENTIALS: {
    name: 'Client Credentials',
    description: 'Used for server-to-server communication, where the client application is the resource owner.',
    steps: [
      'Application authenticates with the authorization server using its client credentials',
      'Authorization server returns an access token',
      'Application uses the access token to access protected resources'
    ]
  },
  PASSWORD: {
    name: 'Resource Owner Password Credentials',
    description: 'Used for trusted applications, where the user provides their username and password directly to the application.',
    steps: [
      'User provides their username and password to the application',
      'Application sends the username and password to the authorization server',
      'Authorization server returns an access token',
      'Application uses the access token to access protected resources'
    ]
  }
};
