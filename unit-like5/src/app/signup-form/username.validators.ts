import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContianSpace(control:AbstractControl):ValidationErrors|null {
        if ((control.value as string).indexOf(' ') >= 0)
        return { cannotContainSpace:true }

        // return {minlength:{
        //     requiredLength:10,
        //     actualLength: control.value.length
        // }}
        return null;
    }

    static shouldBeUnique(control:AbstractControl) :Promise<ValidationErrors|null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('ok');
                if(control.value === 'mosh')
                   return resolve({shouldBeUnique: true})
                else
                   return resolve(null);
            }, 2000);

        })


        return null;
    }

}
