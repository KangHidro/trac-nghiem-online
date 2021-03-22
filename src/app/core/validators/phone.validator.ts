import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  // Match 10 digit
  const valid = /^\+?(\d.*){10}$/.test(control.value);
  return valid ? null : { invalidNumber: { valid: false, value: control.value } };
}
