type ClassNamesArgument = string | number | boolean | undefined | null | Record<string, unknown> | ClassNamesArgument[];

const classNames = (...args: ClassNamesArgument[]): string =>
  args
    .reduce((classes: string[], arg) => {
      if (!arg) {
        return classes;
      }

      if (typeof arg === 'string' || typeof arg === 'number') {
        classes.push(arg.toString());
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          const inner = classNames(...arg);

          if (inner) {
            classes.push(inner);
          }

        }
      } else if (typeof arg === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());

          return classes;
        }

        Object.entries(arg).forEach(([key, value]) => {
          // When using css modules for conditional styling
          // the key can be undefined and this will coerce to
          // 'undefined', therefore 'undefined' cannot be used
          // as the key of the object
          if (value && key !== 'undefined') {
            classes.push(key);
          }

        });
      }

      return classes;
    }, [])
    .join(' ');

export default classNames;
