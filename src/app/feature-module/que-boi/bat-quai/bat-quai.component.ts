import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  environment1,
  environment2,
  environment3, environment4,
  environment5,
  environment6, environment7,
  environment8
} from 'src/app/environment/environment';

@Component({
  selector: 'app-bat-quai',
  templateUrl: './bat-quai.component.html',
  styleUrls: ['./bat-quai.component.scss']
})
export class BatQuaiComponent implements OnInit {
  infoForm!: FormGroup;
  inputAgeTouched = false;
  inputFullNameTouched = false;
  classQue: string = 'd-none';
  classBtn: string = 'd-block';
  shake_btn: string = '';
  title: string = '';
  detail: string = '';
  list: string = '';
  note: string = '';
  rd: number = 0;
  submit = false;
  constructor(private _formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.infoForm = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[\p{L}\p{M} ]+$/u), Validators.maxLength(50)]],
      gender: ['male', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(3)]],
    })
    // Theo dõi sự kiện focus của ô input
    this.age?.valueChanges.subscribe(() => {
      this.inputAgeTouched = true;
    });

    this.fullName?.valueChanges.subscribe(() => {
      this.inputFullNameTouched = true;
    });
  }

  onSubmit() {
    this.submit = true;
    this.inputFullNameTouched = true;
    this.inputAgeTouched = true;
    if (this.infoForm.invalid) {
      this.submit = false;
      return;
    }
    this.infoForm.disable();
    this.classQue = 'd-block'
    this.classBtn = 'd-none';
  }
  onEdit() {
    this.submit = false;
    this.infoForm.enable();
    this.classBtn = 'd-block';
    this.classQue = 'd-none';
    this.title = '';
    this.detail = '';
    this.list = '';
    this.note = '';
  }

  clickRung() {
    this.shake_btn = 'shake_btn'
    this.rd = 0
  }
  onResult() {
    this.shake_btn = ''
    this.randomShake();
  }

  randomShake() {
    let nameTmp = this.fullName?.value?.trim().toLowerCase();
    if (nameTmp && (nameTmp.includes('nga') || nameTmp.includes('ngọc') || nameTmp.includes('trang'))) {
      this.rd = 9;
      this.title = 'VIP';
      this.detail = 'Quẻ này bao đẹp, bao vip, cầu được ước thấy';
      this.list = '<ul>'
        + '<li><span><strong>Tình yêu</strong>: Tìm được 1  anh người iu siêu ưng ý.</span></li>'
        + '<li><span><strong>Công danh</strong>: Muốn danh gì có danh nấy.</span></li>'
        + '<li><span><strong>Tiền bạc</strong>: Tiền tiêu rủng rỉnh, hết lại được bơm.</span></li>'
        + '<li><span><strong>Xuất hành</strong>: Các cụ độ nên đi đứng an toàn, nhưng vẫn phải cẩn thận.</span></li>'
        + '<li><span><strong>Bệnh tật</strong>: Người khỏe re, chả bệnh tật gì sất.</span></li>'
        + '<li><span><strong>Ngũ sắc</strong>: Hắc hường.</span></li>'
        + '<li><span><strong>Số đại diện</strong>: Em iu thích số nào thì số đó là số đại diện.</span></li></ul>';
      this.note = 'Quẻ này VIP rồi, chả cần giải thích nữa';
    } else {
      this.rd = Math.floor(Math.random() * 8) + 1;
      switch (this.rd) {
        case 6:
          this.title = environment6.que;
          this.detail = environment6.detail;
          this.list = environment6.list;
          this.note = environment6.note;
          break;
        case 1:
          this.title = environment1.que;
          this.detail = environment1.detail;
          this.list = environment1.list;
          this.note = environment1.note;
          break;
        case 3:
          this.title = environment3.que;
          this.detail = environment3.detail;
          this.list = environment3.list;
          this.note = environment3.note;
          break;
        case 2:
          this.title = environment2.que;
          this.detail = environment2.detail;
          this.list = environment2.list;
          this.note = environment2.note;
          break;
        case 5:
          this.title = environment5.que;
          this.detail = environment5.detail;
          this.list = environment5.list;
          this.note = environment5.note;
          break;
        case 8:
          this.title = environment8.que;
          this.detail = environment8.detail;
          this.list = environment8.list;
          this.note = environment8.note;
          break;
        case 7:
          this.title = environment7.que;
          this.detail = environment7.detail;
          this.list = environment7.list;
          this.note = environment7.note;
          break;
        case 4:
          this.title = environment4.que;
          this.detail = environment4.detail;
          this.list = environment4.list;
          this.note = environment4.note;
          break;
        default:
          this.title = '';
          this.detail = '';
          this.list = '';
          this.note = '';
      }
    }

  }

  get age() { return this.infoForm.get('age'); }
  get fullName() { return this.infoForm.get('fullName'); }
  get gender() { return this.infoForm.get('gender'); }
  get tmpName() {
    let ageTmp = Number(this.age?.value)
    let genderTmp = this.gender?.value;
    if (!this.submit) {
      switch (this.gender?.value) {
        case 'male':
          return 'Người anh em';
        case 'female':
          return 'Honey';
        default: return 'Bạn'
      }
    } else {
      if (ageTmp >= 29 && genderTmp === 'female') {
        return 'Bác gái'
      } else if (ageTmp >= 29 && genderTmp === 'male') {
        return 'Bác zai'
      } else if (ageTmp < 29 && genderTmp === 'male') {
        return 'Em zai'
      } else if (ageTmp < 29 && genderTmp === 'female') {
        return 'Mỹ nữ'
      } else {
        return 'Bạn'
      }
    }
  }
}
