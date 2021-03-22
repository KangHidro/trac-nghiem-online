import { ValidationErrors, AbstractControl } from '@angular/forms';

export function numberValidator(control: AbstractControl): ValidationErrors {
  if (control.pristine) {
    return null;
  }
  const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
  control.markAsTouched();

  if (control.value === '' || control.value == null) {
    return null;
  }

  if (NUMBER_REGEXP.test(control.value)) {
    return null;
  }
  return {
    invalidNumber: true
  };
}
