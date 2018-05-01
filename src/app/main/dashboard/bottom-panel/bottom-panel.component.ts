import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getEmployeesByRaceCount,
  getDrillThroughFromBottomPanel,
  getEmployeesByLevelCount,
  getEmployeesByStatusCount,
  getEmployeesByGenderCount
} from '../store/selectors/bottom-panel.selectors';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {
  transformToFullDescription,
  transformToShortDescription
} from '../helpers/helpers.functions';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  DrillToEmployeesByRace,
  DrillToEmployeesByLevel,
  DrillToEmployeesByStatus,
  DrillToEmployeesByGender
} from '../store/actions/bottom-panel.actions';

/** Bottom area of the main dashboard */
@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomPanelComponent implements OnInit {
  public colorScheme = {
    domain: ['#FFFFFF']
  };
  autoScale = true;
  animations = true;
  gradient = true;
  view = [700, 300];

  race$: Observable<any>;
  level$: Observable<any>;
  status$: Observable<any>;
  gender$: Observable<any>;

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
        return arr.map(transformToFullDescription);
      })
    );

    this.level$ = this.store.select(getEmployeesByLevelCount);

    this.status$ = this.store.select(getEmployeesByStatusCount);

    this.gender$ = this.store.select(getEmployeesByGenderCount).pipe(
      map(arr => {
        return arr.map(transformToFullDescription);
      })
    );
  }

  /** Handler for drill through in employee by race */
  displayRaceDetail(modalContent, event) {
    this.drillThroughTitle = event.name;
    this.store.dispatch(
      new DrillToEmployeesByRace(transformToShortDescription(event))
    );
    this.openModal(modalContent);
  }

  /** Handler for drill through in employee by level */
  displayLevelDetail(modalContent, event) {
    console.log(event);
    this.drillThroughTitle = event.name;
    this.store.dispatch(new DrillToEmployeesByLevel(event.name));
    this.openModal(modalContent);
  }

  /** Handler for drill through in employee by status */
  displayStatusDetail(modalContent, event) {
    console.log(event);
    this.drillThroughTitle = event.name;
    this.store.dispatch(new DrillToEmployeesByStatus(event.name));
    this.openModal(modalContent);
  }

  /** Handler for drill through in employee by gender */
  displayGenderDetail(modalContent, event) {
    this.drillThroughTitle = event.name;
    this.store.dispatch(
      new DrillToEmployeesByGender(transformToShortDescription(event))
    );
    this.openModal(modalContent);
  }

  /** Opening the modal for drill through */
  public openModal(modalContent) {
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
  }

  /** Closing the modal window manually */
  public closeModal() {
    this.modalRef.close();
  }
}
