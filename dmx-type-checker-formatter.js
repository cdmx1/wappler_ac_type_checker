dmx.Formatters('any', {
    isNumber: function(input) {
      return !isNaN(parseFloat(input)) && isFinite(input);
    },
    isUUID: function(input) {
      const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
      return uuidRegex.test(input);
    },
    isBool: function(input) {
      return typeof input === 'boolean';
    },
    isString: function(input) {
      return typeof input === 'string';
    },
    isArray: function(input) {
      return Array.isArray(input);
    },
    isObject: function(input) {
      return typeof input === 'object' && !Array.isArray(input) && input !== null;
    },
    isFunction: function(input) {
      return typeof input === 'function';
    },
    isNull: function(input) {
      return input === null;
    },
    isUndefined: function(input) {
      return typeof input === 'undefined';
    },
    isDate: function(input) {
      return input instanceof Date;
    },
    isRegExp: function(input) {
      return input instanceof RegExp;
    },
    isNaN: function(input) {
      return Number.isNaN(input);
    },
    isNumberArray: function(input) {
      return Array.isArray(input) && input.every(item => !isNaN(parseFloat(item)));
    },
    isStringArray: function(input) {
      return Array.isArray(input) && input.every(item => isNaN(parseFloat(item)));
    }
  });