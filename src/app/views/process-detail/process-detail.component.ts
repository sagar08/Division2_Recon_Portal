import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
