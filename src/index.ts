// Workaround for https://github.com/bjyoungblood/es6-error/issues/40
declare class _ExtendableError extends Error {}
const ExtendableError: typeof _ExtendableError = require('es6-error');

class CustomErrorA extends ExtendableError {
  a = 'a';
}

class CustomErrorB extends ExtendableError {
  b = 'b';
}

const foo = () => {
  try {
    console.log('foo -> try');
    throw new CustomErrorA();
  } catch (error) {
    console.log('foo -> catch');
    if (error instanceof CustomErrorA) {
      console.trace('CustomErrorA', error.a);
    } else if (error instanceof CustomErrorB) {
      console.trace('CustomErrorB', error.b);
    } else {
      throw error;
    }
  }
};

const main = () => {
  try {
    console.log('main -> try');
    foo();
  } catch (error) {
    console.log('main -> catch');
    console.trace(error);
  }
};

main();
