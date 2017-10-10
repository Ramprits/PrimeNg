import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeCollectionRef: AngularFirestoreCollection<any>;
  employees: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.employeeCollectionRef = db.collection<any>('employees');
    this.employees = this.employeeCollectionRef.valueChanges();
  }

  ngOnInit() {
  }

}
