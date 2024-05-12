exports.ERRORS = {
  ERROR_INTERNO: {
    httpCode: 500,
    code: '#9999',
    description: 'Ha ocurrido un error interno, intente mas tarde.',
  },
  TOKEN_EXPIRADO: {
    httpCode: 401,
    code: '#9997',
    description: 'Sesión expirada.',
  },
  TOKEN_INVALIDO: {
    httpCode: 401,
    code: '#9996',
    description: 'Sesión expirada.',
  },
  CORS_VALIDATION: {
    httpCode: 403,
    code: '#9995',
    description: 'No autorizado.',
  },
  FALTAN_CAMPOS_REQUERIDOS: {
    httpCode: 400,
    code: '#1001',
    description: 'Faltan campos requeridos.',
  },
  NO_ENCONTRADO: {
    httpCode: 404,
    code: '#1002',
    description: 'Recurso no encontrado',
  },
  CREDENCIALES_INCORRECTAS: {
    httpCode: 401,
    code: '#1003',
    description: 'Usuario o contraseña inválida, por favor intente nuevamente.',
  },
  USUARIO_YA_REGISTRADO: {
    httpCode: 403,
    code: '#1004',
    description: 'El username ingresado ya se encuentra registrado.',
  },
  EMAIL_YA_REGISTRADO: {
    httpCode: 403,
    code: '#1005',
    description: 'El email ingresado ya se encuentra registrado.',
  },
};
exports.DEFAULT_ERROR = {
  httpCode: 500,
  code: '#9999',
  description: 'Ha ocurrido un error inesperado, intente mas tarde.',
};
