import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getEmployeesByRaceCount,
  getDrillThroughFromBottomPanel
} from '../store/selectors/bottom-panel.selectors';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {
  transformRaceToFullDescription,
  transformToShortDescription
} from '../helpers/helpers.functions';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrillToEmployeesByRace } from '../store/actions/bottom-panel.actions';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomPanelComponent implements OnInit, OnDestroy {
  public colorScheme = {
    domain: ['#FFFFFF']
  };
  autoScale = true;
  animations = true;
  gradient = true;
  view = [700, 300];

  race$: Observable<any>;

  gender = [{ name: 'Male', value: 12 }, { name: 'Female', value: 21 }];
  status = [{ name: 'Active', value: 31 }, { name: 'Inactive', value: 11 }];
  level = [{ name: 'Senior', value: 31 }, { name: 'Junior', value: 21 }];

  drillThroughEmployees$: Observable<any>;
  drillThroughTitle: string;
  public modalRef: NgbModalRef;
  public p: any;
  constructor(private store: Store<any>, public modalService: NgbModal) {}

  ngOnInit() {
    this.drillThroughEmployees$ = this.store.select(
      getDrillThroughFromBottomPanel
    );

    this.race$ = this.store.select(getEmployeesByRaceCount).pipe(
      map(arr => {
        return arr.map(transformRaceToFullDescription);
      })
    );
  }

  displayRaceDetail(modalContent, event) {
    this.drillThroughTitle = event.name;
    this.store.dispatch(
      new DrillToEmployeesByRace(transformToShortDescription(event))
    );
    this.openModal(modalContent);
  }

  public openModal(modalContent) {
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
  }

  public closeModal() {
    this.modalRef.close();
  }

  public onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {}
}
