import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../shared/types';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {compareSegments} from '@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker';
import {group} from '@angular/animations';

const fields = {
  commonInfo: {
    name: {
      validators: ['required']
    },
    email: {
      validators: ['required', 'email']
    },
    phone: {
      validators: ['required']
    },
  },
  company: {
    name: {
      validators: ['required']
    },
    catchPhrase: {
      validators: ['required']
    },
    bs: [],
  },
  address: {
    city: {
      validators: ['required']
    },
    street: {
      validators: ['required']
    },
    suite: {
      validators: ['required']
    },
    zipcode: {
      validators: ['required']
    },
  },
};

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;

  form: FormGroup;

  get bsFormArray(): FormArray {
    return this.form.get('company').get('bs') as FormArray;
  }


  fieldNameMap = {
    commonInfo: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Phone',
        field: 'phone'
      },
      {
        label: 'Email',
        field: 'email'
      },
    ],
    company: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Catch Phrase',
        field: 'catchPhrase'
      }
    ],
    address: [
      {
        label: 'City',
        field: 'city'
      },
      {
        label: 'Street',
        field: 'street'
      },
      {
        label: 'Suite',
        field: 'suite'
      },
      {
        label: 'Zip code',
        field: 'zipcode'
      }
    ]
  };

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({});

    // console.log(fields);

    Object.keys(fields).forEach(groupKey => {
      // console.log(groupKey);
      // console.log(fields[groupKey]);
      this.form.addControl(groupKey, new FormGroup({}));

      const group = this.form.get(groupKey) as FormGroup;

      Object.keys(fields[groupKey]).forEach(fieldKey => {

        if (Array.isArray(fields[groupKey][fieldKey])) {
          group.addControl(fieldKey, new FormArray([]));
          return;
        }

        const validators = [];
        if (fields[groupKey][fieldKey].validators && Array.isArray(fields[groupKey][fieldKey].validators)) {
          fields[groupKey][fieldKey].validators.forEach(validatorName => {
              switch (validatorName) {
                case 'required':
                  validators.push(Validators.required);
                  break;
                case 'email':
                  validators.push(Validators.email);
                  break;
              }
            }
          );
        }
        console.log(validators);
        const control = new FormControl('', validators);
        group.addControl(fieldKey, control);
      });
    });

    console.log(this.form);

    this.route.data
      .subscribe(({user}) => {
        console.log(user);
        this.user = user;
        this.form.get('commonInfo').patchValue(this.user);
        this.form.get('company').patchValue({...this.user.company, bs: []});
        this.user.company.bs.split(' ').forEach(bsEl => {
          this.bsFormArray.push(new FormControl(bsEl));
        });
        this.form.get('address').patchValue(this.user.address);
      });

  }

  addBS(): void {
    this.bsFormArray.push(new FormControl(''));
  }

  deleteBS(formControl: AbstractControl): void {
    const index = this.bsFormArray.value.findIndex(fc => fc === formControl.value);
    this.bsFormArray.removeAt(index);
  }

  saveUserInfo(): void {
    this.user.name = this.form.get('commonInfo').get('name').value;
    this.user.email = this.form.get('commonInfo').get('email').value;
    this.user.phone = this.form.get('commonInfo').get('phone').value;

    this.user.company.name = this.form.get('company').get('name').value;
    this.user.company.catchPhrase = this.form.get('company').get('catchPhrase').value;
    this.user.company.bs = this.bsFormArray.value.join(' ');

    this.user.address.city = this.form.get('address').get('city').value;
    this.user.address.street = this.form.get('address').get('street').value;
    this.user.address.suite = this.form.get('address').get('suite').value;
    this.user.address.zipcode = this.form.get('address').get('zipcode').value;
    const userJson = JSON.stringify(this.user);
    console.log(userJson);
  }
}
