import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function customDateValidator(control: AbstractControl): ValidationErrors {
  // Valid: dd/MM/yyyy
  // Source: https://projects.lukehaas.me/regexhub/
  if (control.pristine) {
    return null;
  }
  const DATE_REGEXP = /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/;
  control.markAsTouched();

  if (control.value === '' || control.value == null) {
    return null;
  }

  if (DATE_REGEXP.test(control.value)) {
    return null;
  }
  return {
    invalidNumber: true
  };
}


