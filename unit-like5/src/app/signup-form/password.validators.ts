import { AbstractControl, ValidationErrors} from '@angular/forms'
import { debug } from 'util';

export class PasswordValidators {

    static oldPassswordInvalid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if ((control.value as string) != "1234")
                resolve({ oldPassswordInvalid: true });
            else
                resolve(null);

        });

    }
    static confPassswordShouldMatch (control:AbstractControl) : ValidationErrors|null {
        let confPassword = control.get("confPassword");
        let newPassword = control.get("newPassword");
        console.log("confpwd" + confPassword.value);
        console.log("newpwd"+newPassword.value);
        if ((confPassword.value as string) != (newPassword.value as string))
           return ({confPassswordShouldMatch : true});

        return null;

    }

}