import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComboSearchComponent } from '../../../../shared/combo-search/combo-search.component';

import { UserService } from '../../users/user.service';
import { Subject } from '../subject.model';
import _ from 'lodash';
import { HttpService } from '../../../../services/http.service';
import { SubjectService } from '../subject.service';
import { User } from '../../users/user.model';

@Component({
  selector: 'app-subject-search',
  templateUrl: './subject-search.component.html',
  styleUrls: ['./subject-search.component.scss']
})
export class SubjectSearchComponent extends ComboSearchComponent<Subject> {
  selected: string;
  @Input() isMultiple = true;
  @Output() subjectChanged = new EventEmitter<User[]>();
  constructor(public _subjectService: SubjectService) {
    super(_subjectService, false);
  }
  onSelectionChange(evt) {
    const selected = _.filter(this.payload, (el) => {
      return el.id === evt.value;
    });
    this.subjectChanged.emit(selected[0]);
  }
}
